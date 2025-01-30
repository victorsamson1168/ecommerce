// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const FacebookIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M15.1172 0H0.882805C0.395245 0 0 0.395245 0 0.882805V15.1172C0 15.6048 0.395245 16 0.882805 16H15.1172C15.6048 16 16 15.6048 16 15.1172V0.882805C16 0.395245 15.6048 0 15.1172 0Z'
      fill='#3D5A98'
    />
    <path
      d='M11.039 15.998V9.80217H13.1183L13.4292 7.38763H11.039V5.84644C11.039 5.1475 11.2337 4.67027 12.2355 4.67027H13.5144V2.50719C12.8951 2.44277 12.2727 2.41208 11.6501 2.41526C9.80879 2.41526 8.54068 3.53736 8.54068 5.60715V7.38763H6.46143V9.80217H8.54068V15.998H11.039Z'
      fill='white'
    />
  </svg>
);
