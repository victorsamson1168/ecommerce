// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const AlignRightIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M3 4H13' stroke='currentColor' strokeLinecap='round' />
    <path d='M7 8L13 8' stroke='currentColor' strokeLinecap='round' />
    <path d='M5 12L13 12' stroke='currentColor' strokeLinecap='round' />
  </svg>
);
