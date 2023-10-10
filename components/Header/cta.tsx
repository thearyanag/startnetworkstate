'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Text } from '@/utils/chakra';

export const CTALinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link href={'https://thenetworkstate.com'}>
        <Text color={pathname === 'https://thenetworkstate.com' ? 'white' : '#C5C5C5'}>TNS Book</Text>
      </Link>
      <Link href={''}>
        <Text color={pathname === 'https://twitter.com/startnetworkst' ? 'white' : '#C5C5C5'}>Twitter</Text>
      </Link>
      <Link href={'/start'}>
        <Text color={pathname === '/start' ? 'white' : '#FFF'}>
          Start Building
        </Text>
      </Link>
    </>
  );
};