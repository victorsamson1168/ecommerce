// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const CodeIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M6 12L2 8L6 4'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 4L14 8L10 12'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
