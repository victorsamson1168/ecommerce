// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const StarIcon: FC<IconsProps> = (props: IconsProps) => (
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
      d='M12.0024 3C12.0894 7.93035 16.0698 11.911 21 11.9984V12.0015C16.0697 12.0889 12.0894 16.0696 12.0024 21H12.0001C11.9131 16.0688 7.93143 12.0876 3 12.0014V11.9985C7.9314 11.9123 11.9131 7.93119 12.0001 3H12.0024Z'
      fill='currentColor'
    />
  </svg>
);
