// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const CandidatesIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M3.75195 17.9981C3.33774 17.9981 3.00195 17.6623 3.00195 17.2481V3.75195C3.00195 3.33774 3.33774 3.00195 3.75195 3.00195H17.2478C17.662 3.00195 17.9978 3.33774 17.9978 3.75195V7.50008H16.4978V4.50195H4.50195V16.4981H7.49982V17.9981H3.75195Z'
      fill='currentColor'
    />
    <rect
      width='13.4959'
      height='13.4962'
      transform='matrix(1 0 0 -1 6.75 20.2461)'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinejoin='round'
    />
    <circle cx='13.5' cy='12' r='1.5' stroke='currentColor' strokeWidth='1.5' />
    <path
      d='M17.25 21V15.75H13.5H9.75V21'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinejoin='round'
    />
  </svg>
);
