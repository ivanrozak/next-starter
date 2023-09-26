'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);
  const [lastYPos, setYPos] = useState(0);
  const [transparent, setTransparent] = useState(false);
  const pathname = usePathname();

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastYPos) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setYPos(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastYPos]);
  return (
    <header
      className={
        'fixed h-[90px] w-full bg-slate-300 transition-[top] ease-in-out duration-300 shadow-md ' +
        (show ? 'top-0' : 'top-[-90px] shadow-none')
      }
    >
      {children}
    </header>
  );
};

export default Wrapper;
