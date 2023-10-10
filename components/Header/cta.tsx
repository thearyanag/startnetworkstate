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
        <Text color={pathname === 'https://thenetworkstate.com' ? 'white' : '#C5C5C5'} fontSize={"larger"}>TNS Book</Text>
      </Link>
      <Link href={'https://twitter.com/startnetworkst'}>
        <Text color={pathname === 'https://twitter.com/startnetworkst' ? 'white' : '#C5C5C5'} fontSize={"larger"}>Twitter</Text>
      </Link>
      <Link href={'/start'}>
        <Text color={pathname === '/start' ? 'white' : '#FFF'} fontSize={"2xl"} fontWeight={"extrabold"} border={"3px solid #4931F5"} padding={"0.5rem 1rem"} display="inline-block" >
          Start Building
        </Text>
      </Link>
    </>
  );
};