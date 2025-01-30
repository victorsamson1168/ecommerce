// Standard packages
import { FC } from 'react';

// Custom packages
import { IconsProps } from '.';

export const ImageIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.50061 1.99396C2.22454 1.99396 2.00073 2.21776 2.00073 2.49384V10.7394V10.748V13.4926C2.00073 13.7687 2.22454 13.9925 2.50061 13.9925H4.31214C4.32657 13.9931 4.34102 13.9931 4.35546 13.9925H13.4998C13.7758 13.9925 13.9996 13.7687 13.9996 13.4926V2.49384C13.9996 2.21776 13.7758 1.99396 13.4998 1.99396H2.50061ZM3.0005 12.9927V10.9836L4.79264 9.5498L6.44029 10.868L4.13872 12.9927H3.0005ZM5.10493 8.51929L7.1833 10.1821L9.95247 7.62576C10.1449 7.44815 10.4417 7.4491 10.633 7.62795L12.9999 9.84132V2.99372H3.0005V9.70327L4.48036 8.51929C4.66293 8.37322 4.92236 8.37322 5.10493 8.51929ZM5.61263 12.9927H12.9999V11.2101L10.2893 8.67541L5.61263 12.9927ZM9.72222 5.55021C9.72222 5.15128 10.0456 4.82788 10.4445 4.82788C10.8435 4.82788 11.1669 5.15128 11.1669 5.55021C11.1669 5.94914 10.8435 6.27253 10.4445 6.27253C10.0456 6.27253 9.72222 5.94914 9.72222 5.55021ZM10.4445 3.82812C9.49346 3.82812 8.72245 4.59913 8.72245 5.55021C8.72245 6.50129 9.49346 7.27229 10.4445 7.27229C11.3956 7.27229 12.1666 6.50129 12.1666 5.55021C12.1666 4.59913 11.3956 3.82812 10.4445 3.82812Z'
      fill='currentColor'
    />
  </svg>
);
