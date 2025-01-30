// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const ChatIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_1_59400)'>
      <path
        d='M3.75 3.75V3C3.33579 3 3 3.33579 3 3.75H3.75ZM20.25 3.75H21C21 3.33579 20.6642 3 20.25 3V3.75ZM3.75 17.25H3C3 17.6642 3.33579 18 3.75 18V17.25ZM9.6 17.25L10.1857 16.7815C10.0433 16.6036 9.82784 16.5 9.6 16.5V17.25ZM12 20.25L11.4143 20.7185C11.5567 20.8964 11.7722 21 12 21C12.2278 21 12.4433 20.8964 12.5857 20.7185L12 20.25ZM14.4 17.25V16.5C14.1722 16.5 13.9567 16.6036 13.8143 16.7815L14.4 17.25ZM20.25 17.25V18C20.6642 18 21 17.6642 21 17.25H20.25ZM3.75 4.5H20.25V3H3.75V4.5ZM4.5 17.25V3.75H3V17.25H4.5ZM9.6 16.5H3.75V18H9.6V16.5ZM12.5857 19.7815L10.1857 16.7815L9.01435 17.7185L11.4143 20.7185L12.5857 19.7815ZM13.8143 16.7815L11.4143 19.7815L12.5857 20.7185L14.9857 17.7185L13.8143 16.7815ZM20.25 16.5H14.4V18H20.25V16.5ZM19.5 3.75V17.25H21V3.75H19.5Z'
        fill='currentColor'
      />
      <path
        d='M8.25 7.5H15.75'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M8.25 10.5H15.75'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_59400'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
