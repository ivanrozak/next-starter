import React from 'react';
import { getScopedI18n } from '@/locales/server';
import Link from 'next/link';

const ListMenus = async () => {
  const tMenu = await getScopedI18n('header.menus');
  const menus = [
    {
      name: 'profile',
      link: '/company',
    },
    {
      name: 'doctorService',
      link: '/doctor/list',
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
    <>
      {menus.map((menu) => (
        <Link
          key={menu.name}
          href={menu.link}
          className="border-b border-transparent hover:border-black"
        >
          {/* @ts-ignore */}
          {tMenu(menu.name)}
        </Link>
      ))}
    </>
  );
};

export default ListMenus;
