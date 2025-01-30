// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const SalesIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.75 3.75V20.25H20.25'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 12V19.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M13.5 9L13.5 19.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M18 6L18 19.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);
