import Link from 'next/link';
import React from 'react';
import ListMenus from './ListMenus';
import Wrapper from './Wrapper';
import SwitchLocale from './SwitchLocale';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="container h-full mx-auto my-auto flex justify-between items-center">
        <Link href="/">HOME</Link>
        <div className="flex items-center">
          <ListMenus />
          <div className="ml-8">
            <SwitchLocale />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
