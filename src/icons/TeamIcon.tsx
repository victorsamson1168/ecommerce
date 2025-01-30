// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const TeamIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      cx='8.97831'
      cy='9.2913'
      r='1.79129'
      stroke='currentColor'
      strokeWidth='1.5'
    />
    <path
      d='M16.4565 11.0826C17.4458 11.0826 18.2478 10.2806 18.2478 9.29129C18.2478 8.30199 17.4458 7.5 16.4565 7.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M13.5 18V13.5H9H4.5V18'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21 18V13.5H16.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
