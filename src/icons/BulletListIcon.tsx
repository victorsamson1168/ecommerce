// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const BulletListIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M5.6001 4H12.8001' stroke='currentColor' strokeLinecap='round' />
    <path d='M5.6001 8H12.8001' stroke='currentColor' strokeLinecap='round' />
    <path d='M5.6001 12H12.8001' stroke='currentColor' strokeLinecap='round' />
    <circle cx='2.9999' cy='4.00002' r='0.6' fill='currentColor' />
    <circle cx='2.9999' cy='8.00002' r='0.6' fill='currentColor' />
    <circle cx='2.9999' cy='12' r='0.6' fill='currentColor' />
  </svg>
);
