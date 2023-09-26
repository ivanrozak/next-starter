'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import React from 'react';

const SwitchLocale = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  return (
    <>
      <button onClick={() => changeLocale('id')}>ID</button>
      <button onClick={() => changeLocale('en')}>EN</button>
    </>
  );
};

export default SwitchLocale;
