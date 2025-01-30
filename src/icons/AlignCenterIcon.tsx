// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const AlignCenterIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M3 4H13' stroke='currentColor' strokeLinecap='round' />
    <path d='M5 8L11 8' stroke='currentColor' strokeLinecap='round' />
    <path d='M4 12H12' stroke='currentColor' strokeLinecap='round' />
  </svg>
);
