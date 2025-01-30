// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const UnderlineIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.11035 13V11.8889H11.8881V13H4.11035ZM7.99924 10.7778C7.06406 10.7778 6.3372 10.4861 5.81868 9.90278C5.30017 9.31944 5.04091 8.5463 5.04091 7.58333V3H6.47146V7.66667C6.47146 8.18519 6.60109 8.60648 6.86035 8.93056C7.11961 9.25463 7.49924 9.41667 7.99924 9.41667C8.49924 9.41667 8.87887 9.25463 9.13813 8.93056C9.39739 8.60648 9.52702 8.18519 9.52702 7.66667V3H10.9576V7.58333C10.9576 8.5463 10.6983 9.31944 10.1798 9.90278C9.66128 10.4861 8.93443 10.7778 7.99924 10.7778Z'
      fill='black'
    />
  </svg>
);
