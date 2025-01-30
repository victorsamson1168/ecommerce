// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const WalletIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3 7.5H21V19.5H3V4.5H21'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21 12H16.5V15H21'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
