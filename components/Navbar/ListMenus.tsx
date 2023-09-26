import React from 'react';
import { getI18n, getScopedI18n } from '@/locales/server';
import Link from 'next/link';

const ListMenus = async () => {
  const t = await getI18n();
  const tMenu = await getScopedI18n('header.menus');
  const menus = [
    {
      name: 'profile',
      link: '/profile',
    },
    {
      name: 'doctorService',
      link: '/doctors',
    },
    {
      name: 'checkupService',
      link: '/checkup',
    },
    {
      name: 'store',
      link: '/store',
    },
    {
      name: 'article',
      link: '/article',
    },
  ];

  return (
    <div className="flex gap-4">
      {menus.map((menu) => (
        <Link key={menu.name} href={menu.link}>
          {/* @ts-ignore */}
          {tMenu(menu.name)}
        </Link>
      ))}
    </div>
  );
};

export default ListMenus;
