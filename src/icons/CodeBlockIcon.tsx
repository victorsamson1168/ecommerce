// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const CodeBlockIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.89478 6L1.00004 4L2.89478 2'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.10522 2L6.99996 4L5.10522 6'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.50073 7.99335L2.50073 13.4929L13.4995 13.4929L13.4995 2.49372L8.00011 2.49372'
      stroke='currentColor'
      strokeWidth='0.999764'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
