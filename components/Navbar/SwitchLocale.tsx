'use client';
import React from 'react';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import ArrowDown from '@/icons/ArrowDown';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';

const SwitchLocale = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button isIconOnly className="bg-transparent px-1 ml-3">
          <span className="uppercase">{currentLocale}</span>{' '}
          <ArrowDown className="w-4 h-4" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="id" onClick={() => changeLocale('id')}>
          Bahasa Indonesia
        </DropdownItem>
        <DropdownItem key="en" onClick={() => changeLocale('en')}>
          English
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SwitchLocale;
