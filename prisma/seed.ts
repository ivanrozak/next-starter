import { faker } from '@faker-js/faker'
import bcrypt from 'bcryptjs'
import { PrismaClient, Role } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Clear existing data
  await prisma.post.deleteMany()
  await prisma.category.deleteMany()
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()

  console.log('🗑️ Cleared existing data')

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Technology',
        description: 'All about tech and programming',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Lifestyle',
        description: 'Daily life and personal experiences',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Business',
        description: 'Business insights and entrepreneurship',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Education',
        description: 'Learning and educational content',
      },
    }),
  ])

  console.log(`✅ Created ${categories.length} categories`)

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
      role: Role.ADMIN,
      emailVerified: new Date(),
    },
  })

  // Create regular users
  const users = [adminUser]

  for (let i = 0; i < 10; i++) {
    const password = await bcrypt.hash('password123', 12)
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password,
        role: faker.helpers.arrayElement([Role.USER, Role.MODERATOR]),
        image: faker.image.avatar(),
        emailVerified: faker.date.past(),
      },
    })
    users.push(user)
  }

  console.log(`✅ Created ${users.length} users (including admin)`)

  // Create posts
  const posts = []
  for (let i = 0; i < 50; i++) {
    const post = await prisma.post.create({
      data: {
        title: faker.lorem.sentence({ min: 3, max: 8 }),
        content: faker.lorem.paragraphs({ min: 2, max: 5 }, '\n\n'),
        published: faker.datatype.boolean({ probability: 0.7 }),
        authorId: faker.helpers.arrayElement(users).id,
        createdAt: faker.date.between({
          from: new Date('2023-01-01'),
          to: new Date(),
        }),
      },
    })
    posts.push(post)
  }

  console.log(`✅ Created ${posts.length} posts`)

  // Create some OAuth users (simulated)
  const oauthUsers = []
  for (let i = 0; i < 5; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        emailVerified: new Date(),
        role: Role.USER,
      },
    })

    // Create associated account (simulating OAuth)
    await prisma.account.create({
      data: {
        userId: user.id,
        type: 'oauth',
        provider: faker.helpers.arrayElement(['google', 'github']),
        providerAccountId: faker.string.uuid(),
        access_token: faker.string.alphanumeric(40),
        token_type: 'Bearer',
        scope: 'read:user user:email',
      },
    })

    oauthUsers.push(user)
  }

  console.log(`✅ Created ${oauthUsers.length} OAuth users`)

  console.log('🎉 Seed completed successfully!')
  console.log('\n📊 Summary:')
  console.log(`- Users: ${users.length + oauthUsers.length}`)
  console.log(`- Categories: ${categories.length}`)
  console.log(`- Posts: ${posts.length}`)
  console.log('\n🔐 Test Accounts:')
  console.log('Admin: admin@example.com / admin123')
  console.log('Regular users: password123')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
