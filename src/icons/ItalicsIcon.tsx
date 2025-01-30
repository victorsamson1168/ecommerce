// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const ItalicsIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.308 5.008L8.036 11.392H9.656L9.464 12.4H5L5.192 11.392H6.836L8.12 5.008H6.488L6.68 4H11.144L10.952 5.008H9.308Z'
      fill='currentColor'
    />
  </svg>
);
