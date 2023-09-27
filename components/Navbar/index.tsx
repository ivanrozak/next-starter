import React from 'react';

import { Button } from '@nextui-org/button';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';
import Link from 'next/link';
import Image from 'next/image';
import Brand from '@/public/static/images/brand.png';
import ListMenus from './ListMenus';
import SwitchLocale from './SwitchLocale';

export default function NavigationBar() {
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="xl"
      height={'5rem'}
      className="shadow-[4px_4px_44px_0px_rgba(0,0,0,0.05)]"
    >
      <NavbarBrand>
        <Link href="/">
          <Image
            src={Brand}
            width={153}
            height={40.8}
            alt="YesDok, Konsultasi Dokter Online 24 Jam, Tanya Dokter, Konsultasi Online, Dokter Online, Konsultasi Dokter"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <ListMenus />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="flex items-center">
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="flat"
            radius="full"
          >
            Masuk/Daftar
          </Button>
          <SwitchLocale />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
