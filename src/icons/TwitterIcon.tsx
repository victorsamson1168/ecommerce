// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const TwitterIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_575_15155)'>
      <rect width='16' height='16' rx='2' fill='white' />
      <path
        d='M-3.99951 8C-3.99951 3.58172 3.58221 -3.5 8.00049 -3.5C12.4188 -3.5 20.5005 0.5 20.5005 9C20.5005 13.4183 12.4188 20.5 8.00049 20.5C3.58221 20.5 -3.99951 12.4183 -3.99951 8Z'
        fill='black'
      />
      <g clipPath='url(#clip1_575_15155)'>
        <path
          d='M10.4602 4.07617H11.7721L8.90595 7.35197L12.2777 11.8096H9.63765L7.56985 9.10608L5.20381 11.8096H3.89111L6.95673 8.30577L3.72217 4.07617H6.42927L8.29838 6.5473L10.4602 4.07617ZM9.99973 11.0244H10.7267L6.03427 4.82017H5.25418L9.99973 11.0244Z'
          fill='white'
        />
      </g>
    </g>
    <defs>
      <clipPath id='clip0_575_15155'>
        <rect width='16' height='16' rx='2' fill='white' />
      </clipPath>
      <clipPath id='clip1_575_15155'>
        <rect
          width='9.33333'
          height='9.33333'
          fill='white'
          transform='translate(3.3335 3.33594)'
        />
      </clipPath>
    </defs>
  </svg>
);
