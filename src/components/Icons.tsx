// Standard packages
import { FC } from 'react';

// PropTypes
export type IconsProps = {
  /** If present, apply additional classNames to the root */
  className?: string;
  // /** Callback triggered onClick */
  onClick?: (...params: any) => void;
};

export const InfoIconGray: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1423 2.5 17.5 5.85775 17.5 10C17.5 14.1423 14.1423 17.5 10 17.5ZM10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16ZM10 8.5C10.1989 8.5 10.3897 8.57902 10.5303 8.71967C10.671 8.86032 10.75 9.05109 10.75 9.25V13C10.75 13.1989 10.671 13.3897 10.5303 13.5303C10.3897 13.671 10.1989 13.75 10 13.75C9.80109 13.75 9.61032 13.671 9.46967 13.5303C9.32902 13.3897 9.25 13.1989 9.25 13V9.25C9.25 9.05109 9.32902 8.86032 9.46967 8.71967C9.61032 8.57902 9.80109 8.5 10 8.5ZM10 7.75C9.80109 7.75 9.61032 7.67098 9.46967 7.53033C9.32902 7.38968 9.25 7.19891 9.25 7C9.25 6.80109 9.32902 6.61032 9.46967 6.46967C9.61032 6.32902 9.80109 6.25 10 6.25C10.1989 6.25 10.3897 6.32902 10.5303 6.46967C10.671 6.61032 10.75 6.80109 10.75 7C10.75 7.19891 10.671 7.38968 10.5303 7.53033C10.3897 7.67098 10.1989 7.75 10 7.75Z'
        fill='inherit'
      />
    </svg>
  );
};
export const PlaneIcon: FC<IconsProps & { height?: number; width?: number }> = (
  props: IconsProps & { height?: number; width?: number }
) => {
  const { height, width } = props;
  return (
    <svg
      width={height ?? 21}
      height={width ?? 20}
      viewBox='0 0 21 20'
      fill='none'
      stroke='inherit'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.09863 2.49988L5.59863 9.99988L3.09863 17.4999L18.932 9.99988L3.09863 2.49988Z'
        stroke='inherit'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.59863 9.99988H18.932'
        stroke='inherit'
        strokeWidth='1.66667'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const HandBookIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 4.5L6 19.5L19.5 19.5L19.5 4.5L6 4.5Z'
        fill='#F3F8FB'
        stroke='#217BBB'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <circle
        cx='13.1491'
        cy='9.85714'
        r='0.857143'
        stroke='#217BBB'
        strokeWidth='0.857143'
      />
      <path
        d='M15.2886 15V12H13.1458H11.0029V15'
        stroke='#217BBB'
        strokeWidth='0.857143'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 9H7.5'
        stroke='#217BBB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 15H7.5'
        stroke='#217BBB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const BriefcaseIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_15957_112736)'>
        <path
          d='M15.1816 12.5V9.375C15.1816 8.33947 16.0211 7.5 17.0566 7.5H23.3066C24.3422 7.5 25.1816 8.33947 25.1816 9.375V12.5'
          stroke='#217BBB'
          strokeWidth='1.875'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.18164 13.75C5.18164 13.0596 5.74128 12.5 6.43164 12.5H33.9316C34.622 12.5 35.1816 13.0596 35.1816 13.75V31.25C35.1816 31.9404 34.622 32.5 33.9316 32.5H6.43164C5.74129 32.5 5.18164 31.9404 5.18164 31.25V13.75Z'
          fill='#217BBB'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.78101 13.3305L13.5588 22.0805C13.796 22.3473 14.136 22.5 14.4931 22.5H20.1817H25.8704C26.2274 22.5 26.5674 22.3473 26.8046 22.0805L34.5824 13.3305C34.7035 13.1943 34.7878 13.0447 34.839 12.8902C34.6112 12.6499 34.289 12.5 33.9317 12.5H6.43172C6.07447 12.5 5.75222 12.6499 5.52441 12.8902C5.57567 13.0447 5.65995 13.1943 5.78101 13.3305Z'
          fill='#E3EFF6'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_112736'>
          <rect
            width='40'
            height='40'
            fill='white'
            transform='translate(0.181641)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PoliciesIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='4.5'
        y='4.5'
        width='16.5'
        height='16.5'
        rx='1.25'
        fill='#F3F8FB'
      />
      <path
        d='M9.75049 9.74976H15.7505'
        stroke='#217BBB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.75049 12.7502H15.7505'
        stroke='#217BBB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.75049 15.7505H12.7505'
        stroke='#217BBB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.4406 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H20.25C20.4489 4.5 20.6397 4.57902 20.7803 4.71967C20.921 4.86032 21 5.05109 21 5.25V15.4406C21.0003 15.538 20.9815 15.6345 20.9445 15.7246C20.9075 15.8147 20.8531 15.8966 20.7844 15.9656L15.9656 20.7844C15.8966 20.8531 15.8147 20.9075 15.7246 20.9445C15.6345 20.9815 15.538 21.0003 15.4406 21V21Z'
        stroke='#217BBB'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.9353 15.7505H15.751V20.9349'
        stroke='#217BBB'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CreateDocIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='7.5'
        y='5'
        width='5.625'
        height='1.25'
        rx='0.625'
        fill='currentColor'
      />
      <rect x='5' y='5' width='1.25' height='1.25' rx='0.625' fill='#526277' />
      <rect
        x='7.5'
        y='7.5'
        width='5.625'
        height='1.25'
        rx='0.625'
        fill='currentColor'
      />
      <rect
        x='5'
        y='7.5'
        width='1.25'
        height='1.25'
        rx='0.625'
        fill='currentColor'
      />
      <path
        d='M11.25 15.4342L16.6842 10L18.4955 11.8114L13.2425 17.2455H11.25V15.4342Z'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.125 2.5C2.95924 2.5 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95924 2.5 3.125V16.875C2.5 17.2202 2.77982 17.5 3.125 17.5H16.875C17.2202 17.5 17.5 17.2202 17.5 16.875V12.8413L16.25 14.1344V16.25H14.2049L13.2425 17.2455H11.25V16.25H3.75V3.75H16.25V10.4342L16.6842 10L17.5 10.8158V3.125C17.5 2.95924 17.4342 2.80027 17.3169 2.68306C17.1997 2.56585 17.0408 2.5 16.875 2.5H3.125Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const QuestionIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */

  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 15.3125C10.6904 15.3125 11.25 14.7529 11.25 14.0625C11.25 13.3721 10.6904 12.8125 10 12.8125C9.30964 12.8125 8.75 13.3721 8.75 14.0625C8.75 14.7529 9.30964 15.3125 10 15.3125Z'
        fill='inherit'
      />
      <path
        d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
        stroke='inherit'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 10.9375V10.3125C11.3805 10.3125 12.5 9.33281 12.5 8.125C12.5 6.91719 11.3805 5.9375 10 5.9375C8.61953 5.9375 7.5 6.91719 7.5 8.125V8.4375'
        stroke='inherit'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const LogoIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18.5461 1.94066L18.5461 11.9651C18.5271 8.36627 15.6038 5.45473 12.0005 5.45473C8.38546 5.45473 5.45487 8.38533 5.45487 12.0004L5.4547 24.0008L0 24.0008L6.17529e-07 12.0004C1.6811e-05 5.37275 5.37292 0 12.0005 0C14.4154 0 16.6636 0.713283 18.5461 1.94066Z'
        fill='#0C151D'
      />
      <path
        d='M18.5463 12.0004L18.5461 0L24.0009 0V12.0004C24.0009 18.628 18.6283 24.0008 12.0007 24.0008C9.58581 24.0008 7.33755 23.2875 5.45508 22.0601L5.45508 12.0271C5.46946 15.6299 8.39451 18.5461 12.0007 18.5461C15.6157 18.5461 18.5463 15.6155 18.5463 12.0004Z'
        fill='#69A3CC'
      />
    </svg>
  );
};

export const VectorIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='9'
      height='26'
      viewBox='0 0 9 26'
      fill='none'
      className={className}
      {...props}
    >
      <path opacity='0.1' d='M7.56104 0.68457L0.96115 25.3157' stroke='white' />
    </svg>
  );
};

export const HomeIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      className={className}
      {...props}
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 9L12 3L21 9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 9V19.5C4.5 20.3284 5.17157 21 6 21H18C18.8284 21 19.5 20.3284 19.5 19.5V9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='square'
      />
      <rect
        x='6.75'
        y='14.25'
        width='10.5'
        height='4.5'
        rx='2.25'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export const PersonIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='8' cy='5' r='2.5' stroke='#217BBB' />
      <path
        d='M8 9C5.23858 9 3 10.7386 3 13.5H13C13 10.7386 10.7614 9 8 9Z'
        stroke='currentColor'
      />
    </svg>
  );
};

export const PersonFillIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      className={className}
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <circle cx='8' cy='5.5' r='3' fill='#217BBB' />
      <path
        d='M8 9.5C5.57879 9.5 3.55953 11.221 3.09873 13.5064C2.98957 14.0478 3.44772 14.5 4 14.5H12C12.5523 14.5 13.0104 14.0478 12.9013 13.5064C12.4405 11.221 10.4212 9.5 8 9.5Z'
        fill='#217BBB'
      />
    </svg>
  );
};

export const SearchIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <circle
        cx='11.25'
        cy='11.25'
        r='6'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M17.0303 15.9697L16.5 15.4393L15.4393 16.5L15.9697 17.0303L17.0303 15.9697ZM18.9697 20.0303C19.2626 20.3232 19.7374 20.3232 20.0303 20.0303C20.3232 19.7374 20.3232 19.2626 20.0303 18.9697L18.9697 20.0303ZM15.9697 17.0303L18.9697 20.0303L20.0303 18.9697L17.0303 15.9697L15.9697 17.0303Z'
        fill='currentColor'
      />
    </svg>
  );
};
export const SearchWhiteIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <circle cx='9.375' cy='9.875' r='5' stroke='white' strokeWidth='1.25' />
      <path
        d='M14.1919 13.8081L13.75 13.3661L12.8661 14.25L13.3081 14.6919L14.1919 13.8081ZM15.8081 17.1919C16.0521 17.436 16.4479 17.436 16.6919 17.1919C16.936 16.9479 16.936 16.5521 16.6919 16.3081L15.8081 17.1919ZM13.3081 14.6919L15.8081 17.1919L16.6919 16.3081L14.1919 13.8081L13.3081 14.6919Z'
        fill='white'
      />
    </svg>
  );
};

export const DoubleCaretIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M12 18L6 12L12 6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 18L12 12L18 6'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const HamburgerIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      {...props}
    >
      <path
        d='M4.5 6H19.5'
        stroke='#FEFEFE'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M4.5 12H19.5'
        stroke='#FEFEFE'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M4.5 18H19.5'
        stroke='#FEFEFE'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const CrossWhiteIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.69629 6.69678L17.3029 17.3034'
        stroke='#FEFEFE'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M6.69629 17.3032L17.3029 6.69662'
        stroke='#FEFEFE'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const NewChatIconSVG: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='23'
      viewBox='0 0 24 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12.1982 22.0991C9.90132 22.098 7.66812 21.3438 5.84088 19.9521C4.01364 18.5603 2.69318 16.6078 2.08185 14.3937C1.47052 12.1796 1.60206 9.8262 2.45632 7.69404C3.31057 5.56189 4.8404 3.76867 6.81135 2.5892C8.78231 1.40973 11.0856 0.909089 13.3684 1.16399C15.6511 1.4189 17.7873 2.41529 19.4495 4.00046C21.1117 5.58564 22.2083 7.67215 22.5712 9.94021C22.9341 12.2083 22.5433 14.5328 21.4586 16.5575L22.6486 20.6058C22.7077 20.8068 22.7115 21.02 22.6597 21.223C22.6079 21.426 22.5024 21.6113 22.3542 21.7595C22.2061 21.9076 22.0208 22.0131 21.8178 22.0649C21.6148 22.1168 21.4015 22.1129 21.2005 22.0539L17.1566 20.8595C15.6317 21.6762 13.9281 22.1021 12.1982 22.0991Z'
        stroke='#FEFEFE'
        strokeWidth='1.56265'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.82422 11.5996H16.5751'
        stroke='#FEFEFE'
        strokeWidth='1.82309'
        strokeLinecap='round'
      />
      <path
        d='M12.2002 15.9751L12.2002 7.22424'
        stroke='#FEFEFE'
        strokeWidth='1.82309'
        strokeLinecap='round'
      />
    </svg>
  );
};
export const LawyerChatIconSVG: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_20183_44689)'>
        <path
          d='M15.0006 21C13.524 20.9993 12.0884 20.5145 10.9137 19.6198C9.73906 18.7251 8.89018 17.4699 8.49719 16.0465C8.10419 14.6232 8.18876 13.1103 8.73792 11.7396C9.28708 10.3689 10.2705 9.21614 11.5376 8.45791C12.8046 7.69968 14.2854 7.37784 15.7528 7.5417C17.2203 7.70557 18.5935 8.34611 19.6621 9.36515C20.7307 10.3842 21.4357 11.7255 21.6689 13.1836C21.9022 14.6416 21.651 16.1359 20.9537 17.4375L21.7187 20.04C21.7567 20.1692 21.7591 20.3063 21.7258 20.4368C21.6925 20.5673 21.6247 20.6864 21.5294 20.7817C21.4342 20.8769 21.3151 20.9447 21.1846 20.978C21.0541 21.0113 20.917 21.0089 20.7878 20.9709L18.1881 20.2031C17.2078 20.7282 16.1126 21.0019 15.0006 21Z'
          stroke='#526277'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.63005 16.4902C7.64615 16.4379 6.68588 16.1693 5.81755 15.7037L3.21505 16.4687C3.08582 16.5066 2.94876 16.5091 2.81826 16.4758C2.68775 16.4425 2.56863 16.3746 2.47339 16.2794C2.37816 16.1842 2.31032 16.065 2.27702 15.9345C2.24371 15.804 2.24616 15.667 2.28411 15.5377L3.0463 12.9381C2.61209 12.1184 2.35145 11.2182 2.28064 10.2933C2.20984 9.36853 2.3304 8.43905 2.63478 7.5629C2.93917 6.68675 3.42086 5.88273 4.04979 5.20102C4.67873 4.51931 5.44141 3.97453 6.29024 3.60068C7.13908 3.22682 8.05586 3.03192 8.98337 3.02813C9.91088 3.02434 10.8292 3.21175 11.6811 3.57865C12.5329 3.94555 13.3001 4.48408 13.9345 5.16063C14.569 5.83718 15.0573 6.63723 15.3688 7.51086'
          stroke='#526277'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_20183_44689'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(-0.000976562)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowDownIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='20px'
      viewBox='0 -960 960 960'
      width='20px'
      fill='currentColor'
      className={className}
    >
      <path d='M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z' />
    </svg>
  );
};
export const UpdatedArrowDownIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
      {...props}
    >
      <path
        d='M3.75 6.875L10 13.125L16.25 6.875'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CloseIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M6.69653 6.69672L17.3031 17.3033'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M6.69653 17.3033L17.3031 6.69668'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const CloseIconPrimary: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M4.46436 4.96484L11.5354 12.0359'
        stroke='#217BBB'
        strokeLinecap='round'
      />
      <path
        d='M4.46436 12.0352L11.5354 4.96409'
        stroke='#217BBB'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const ChipCloseIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M4.46448 4.46484L11.5355 11.5359'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M4.46448 11.5352L11.5355 4.46409'
        stroke='currentColor'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const StarIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.00166 2C8.05965 5.2869 10.7132 7.94065 14 7.99899V8.001C10.7132 8.05933 8.05964 10.7131 8.00166 14H7.99977C7.94178 10.7126 5.28748 8.05857 2 8.00097V7.999C5.28749 7.94142 7.9418 5.28738 7.99981 2H8.00166Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const StarOutlined: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <g id='Small / Star Rate-Outlined'>
        <path
          id='Star 1'
          d='M8 3L9.48328 6.38124L13 6.81966L10.4 9.3478L11.0902 13L8 11.1812L4.90983 13L5.6 9.3478L3 6.81966L6.51672 6.38124L8 3Z'
          stroke='#526277'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};
export const StarFilled: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <g id='Small / Star Rate-Filled'>
        <path
          id='Star 1'
          d='M8 3L9.48328 6.38124L13 6.81966L10.4 9.3478L11.0902 13L8 11.1812L4.90983 13L5.6 9.3478L3 6.81966L6.51672 6.38124L8 3Z'
          fill='#526277'
          stroke='#526277'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export const BookmarkOutlined: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.5 2.5H3.5V13.5L8 10L12.5 13.5V2.5Z'
        stroke='#526277'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CircleFiled: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M8 3L9.48328 6.38124L13 6.81966L10.4 9.3478L11.0902 13L8 11.1812L4.90983 13L5.6 9.3478L3 6.81966L6.51672 6.38124L8 3Z'
      fill='#00AB44'
      stroke='#00AB44'
      strokeLinejoin='round'
    />
  </svg>
);

export const BookmarkOutlinedNew: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18.75 3.75H5.25V20.25L12 15L18.75 20.25V3.75Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const InstitutionOutline: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M3.125 3.125H10V16.875H3.125V3.125Z'

        stroke='#677990'
        strokeWidth='1.2497'
        strokeLinejoin='round'
      />
      <path
        d='M10 8.125H16.875V16.875H10V8.125Z'
        stroke='#677990'
        strokeWidth='1.2497'
        strokeLinejoin='round'

      />
      <mask id='path-3-inside-1_1337_22138' fill='white'>
        <path d='M5 6.25L8.125 6.25V7.5H5V6.25Z' />
      </mask>
      <path
        d='M5 6.25V5H3.75V6.25H5ZM8.125 6.25H9.375V5L8.125 5V6.25ZM8.125 7.5V8.75H9.375V7.5L8.125 7.5ZM5 7.5H3.75L3.75 8.75H5V7.5ZM5 7.5H8.125V5H5V7.5ZM6.875 6.25V7.5L9.375 7.5V6.25L6.875 6.25ZM8.125 6.25L5 6.25V8.75H8.125V6.25ZM6.25 7.5V6.25H3.75V7.5H6.25Z'
        fill='currentColor'
        mask='url(#path-3-inside-1_1337_22138)'
      />
      <mask id='path-5-inside-2_1337_22138' fill='white'>
        <path d='M5 8.75H8.125V10H5V8.75Z' />
      </mask>
      <path
        d='M5 8.75V7.5H3.75V8.75H5ZM8.125 8.75H9.375V7.5L8.125 7.5V8.75ZM8.125 10V11.25H9.375V10H8.125ZM5 10H3.75L3.75 11.25H5V10ZM5 10H8.125V7.5H5V10ZM6.875 8.75V10H9.375V8.75H6.875ZM8.125 8.75H5V11.25H8.125V8.75ZM6.25 10V8.75H3.75V10H6.25Z'
        fill='currentColor'
        mask='url(#path-5-inside-2_1337_22138)'
      />
      <mask id='path-7-inside-3_1337_22138' fill='white'>
        <path d='M5 11.25H8.125V12.5H5V11.25Z' />
      </mask>
      <path
        d='M5 11.25V10H3.75V11.25H5ZM8.125 11.25H9.375V10H8.125V11.25ZM8.125 12.5V13.75H9.375V12.5H8.125ZM5 12.5H3.75L3.75 13.75H5V12.5ZM5 12.5H8.125V10H5V12.5ZM6.875 11.25V12.5H9.375V11.25H6.875ZM8.125 11.25H5V13.75H8.125V11.25ZM6.25 12.5V11.25H3.75V12.5H6.25Z'
        fill='currentColor'
        mask='url(#path-7-inside-3_1337_22138)'
      />
      <mask id='path-9-inside-4_1337_22138' fill='white'>
        <path d='M11.875 11.25H15V12.5H11.875V11.25Z' />
      </mask>
      <path
        d='M11.875 11.25V10H10.625V11.25H11.875ZM15 11.25H16.25V10H15V11.25ZM15 12.5V13.75H16.25V12.5H15ZM11.875 12.5H10.625V13.75H11.875V12.5ZM11.875 12.5H15V10H11.875V12.5ZM13.75 11.25V12.5H16.25V11.25H13.75ZM15 11.25H11.875V13.75H15V11.25ZM13.125 12.5V11.25H10.625V12.5H13.125Z'
        fill='currentColor'
        mask='url(#path-9-inside-4_1337_22138)'
      />
      <mask id='path-11-inside-5_1337_22138' fill='white'>
        <path d='M11.875 13.75H15V15H11.875V13.75Z' />
      </mask>
      <path
        d='M11.875 13.75V12.5H10.625V13.75H11.875ZM15 13.75H16.25V12.5H15V13.75ZM15 15V16.25H16.25V15H15ZM11.875 15H10.625V16.25H11.875V15ZM11.875 15H15V12.5H11.875V15ZM13.75 13.75V15H16.25V13.75H13.75ZM15 13.75H11.875V16.25H15V13.75ZM13.125 15V13.75H10.625V15H13.125Z'
        fill='currentColor'
        mask='url(#path-11-inside-5_1337_22138)'
      />
      <mask id='path-13-inside-6_1337_22138' fill='white'>
        <path d='M5 13.75H8.125V15H5V13.75Z' />
      </mask>
      <path
        d='M5 13.75V12.5H3.75V13.75H5ZM8.125 13.75H9.375V12.5H8.125V13.75ZM8.125 15V16.25H9.375V15H8.125ZM5 15H3.75L3.75 16.25H5V15ZM5 15H8.125V12.5H5V15ZM6.875 13.75V15H9.375V13.75H6.875ZM8.125 13.75H5V16.25H8.125V13.75ZM6.25 15V13.75H3.75V15H6.25Z'
        fill='currentColor'
        mask='url(#path-13-inside-6_1337_22138)'
      />
    </svg>
  );
};

export const SmallBookmarkOutlinedNew: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18 4.5H6V19.5L12 15L18 19.5V4.5Z'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const BookmarkFilled: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 4.5H6V19.5L12 15L18 19.5V4.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path d='M18 4.5H6V19.5L12 15L18 19.5V4.5Z' fill='currentColor' />
    </svg>
  );
};

// remove these two in the code cleanup. keeping it here to avoid design QA again.
export const BookmarkFilledBorder: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='34'
      height='34'
      viewBox='0 0 34 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x='0.5' y='0.5' width='33' height='33' rx='3.5' stroke='#D5DBE2' />
      <path
        d='M21 12H13V22L17 19L21 22V12Z'
        stroke='#677990'
        strokeLinejoin='round'
      />
      <path d='M21 12H13V22L17 19L21 22V12Z' fill='#677990' />
    </svg>
  );
};

export const NewBookMarkOutlined: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='34'
      height='34'
      viewBox='0 0 34 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect x='0.5' y='0.5' width='33' height='33' rx='3.5' stroke='#D5DBE2' />
      <path
        d='M21 12H13V22L17 19L21 22V12Z'
        stroke='#677990'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const SmallBookmarkFilled: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.5 2.5H3.5V13.5L8 10L12.5 13.5V2.5Z'
        fill='#526277'
        stroke='#526277'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const LiveTestCircleIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <circle
        cx='8'
        cy='8'
        r='5.5'
        fill='#EB3E28'
        stroke='#FECACA'
        strokeWidth='3'
      />
    </svg>
  );
};
// export const FilterIcon: FC<IconsProps> = (props: IconsProps) => {
//   /** props */
//   const { className } = props;

//   return (
//     <svg
//       width='24'
//       height='24'
//       viewBox='0 0 24 24'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//       className={className}
//     >
//       <rect
//         x='0.5'
//         y='0.492188'
//         width='23'
//         height='23'
//         rx='11.5'
//         stroke='#EB3E28'
//       />
//       <circle cx='12' cy='11.9922' r='9' fill='#EB3E28' />
//     </svg>
//   );
// };

// export const SettingIcon: FC<IconsProps> = (props: IconsProps) => {
//   /** props */
//   const { className } = props;

//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       width='16'
//       height='16'
//       viewBox='0 0 16 16'
//       fill='none'
//     >
//       <path d='M3 4.5H13' stroke='#22272F' strokeLinecap='round' />
//       <path d='M3 11.5H13' stroke='#22272F' strokeLinecap='round' />
//       <circle cx='5.5' cy='4.5' r='1.5' fill='#22272F' />
//       <circle cx='10.5' cy='11.5' r='1.5' fill='#22272F' />
//     </svg>
//   );
// };
export const ReadCvIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='inherit'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_15957_109263)'>
        <path
          d='M19.6353 4.42086L7.42411 2.26331C7.01621 2.19124 6.62712 2.46348 6.55505 2.87137L3.75612 18.7126C3.68405 19.1205 3.95629 19.5096 4.36419 19.5816L16.5754 21.7392C16.9833 21.8112 17.3723 21.539 17.4444 21.1311L20.2433 5.28992C20.3154 4.88202 20.0432 4.49293 19.6353 4.42086Z'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9.11523 5.60742L16.8946 6.9818'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.3741 9.93594L8.59375 8.5625'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.9639 12.2038L8.07422 11.5166'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_109263'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
export const BrainIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='inherit'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_15957_109250)'>
        <path
          d='M8.25 12.75C8.99168 12.75 9.7167 12.9699 10.3334 13.382C10.9501 13.794 11.4307 14.3797 11.7145 15.0649C11.9984 15.7502 12.0726 16.5042 11.9279 17.2316C11.7833 17.959 11.4261 18.6272 10.9017 19.1517C10.3772 19.6761 9.70902 20.0333 8.98159 20.1779C8.25416 20.3226 7.50016 20.2484 6.81494 19.9645C6.12971 19.6807 5.54404 19.2001 5.13199 18.5834C4.71993 17.9667 4.5 17.2417 4.5 16.5V15.8691'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.75 12.75C15.0083 12.75 14.2833 12.9699 13.6666 13.382C13.0499 13.794 12.5693 14.3797 12.2855 15.0649C12.0016 15.7502 11.9274 16.5042 12.0721 17.2316C12.2168 17.959 12.5739 18.6272 13.0984 19.1517C13.6228 19.6761 14.291 20.0333 15.0184 20.1779C15.7458 20.3226 16.4998 20.2484 17.1851 19.9645C17.8703 19.6807 18.456 19.2001 18.868 18.5834C19.2801 17.9667 19.5 17.2417 19.5 16.5V15.8691'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.75014 16.125H6.00014C4.93789 16.126 3.90956 15.7511 3.09711 15.0668C2.28466 14.3825 1.74049 13.4328 1.56089 12.3858C1.38129 11.3389 1.57784 10.2622 2.11577 9.34618C2.65369 8.43021 3.49831 7.73407 4.50014 7.38094V6.75C4.50014 5.75544 4.89522 4.80161 5.59849 4.09835C6.30175 3.39509 7.25557 3 8.25014 3C9.2447 3 10.1985 3.39509 10.9018 4.09835C11.605 4.80161 12.0001 5.75544 12.0001 6.75V16.5'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M17.25 16.125H18C19.0622 16.126 20.0906 15.7511 20.903 15.0668C21.7155 14.3825 22.2596 13.4328 22.4392 12.3858C22.6188 11.3389 22.4223 10.2622 21.8844 9.34618C21.3464 8.43021 20.5018 7.73407 19.5 7.38094V6.75C19.5 5.75544 19.1049 4.80161 18.4017 4.09835C17.6984 3.39509 16.7446 3 15.75 3C14.7554 3 13.8016 3.39509 13.0983 4.09835C12.3951 4.80161 12 5.75544 12 6.75'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M18.75 10.5H18.375C17.6788 10.5 17.0111 10.2234 16.5188 9.73116C16.0266 9.23887 15.75 8.57119 15.75 7.875V7.5'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.25 10.5H5.625C6.32119 10.5 6.98887 10.2234 7.48116 9.73116C7.97344 9.23887 8.25 8.57119 8.25 7.875V7.5'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_109250'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
export const StarDoubleIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.8019 7.2002C13.8656 10.8159 16.7846 13.7352 20.4002 13.7993V13.8025C16.7851 13.8666 13.8664 16.7851 13.802 20.4002H13.8005C13.7365 16.784 10.8166 13.8646 7.2002 13.8015V13.7993C10.8168 13.7363 13.7369 10.8166 13.8006 7.2002H13.8019Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8001 7.20148V7.1996C8.82817 7.16456 7.23618 5.57252 7.20119 3.60059H7.20068C7.16588 5.57326 5.57292 7.16584 3.6001 7.20002V7.20043C5.57307 7.23472 7.16608 8.82764 7.2005 10.8006H7.20119C7.23613 8.82861 8.82814 7.23653 10.8001 7.20148Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const StarDoubleIconBlue: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='inherit'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.8019 7.2002C13.8656 10.8159 16.7846 13.7352 20.4002 13.7993V13.8025C16.7851 13.8666 13.8664 16.7851 13.802 20.4002H13.8005C13.7365 16.784 10.8166 13.8646 7.2002 13.8015V13.7993C10.8168 13.7363 13.7369 10.8166 13.8006 7.2002H13.8019Z'
        fill='inherit'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.8001 7.20148V7.1996C8.82817 7.16456 7.23618 5.57252 7.20119 3.60059H7.20068C7.16588 5.57326 5.57292 7.16584 3.6001 7.20002V7.20043C5.57307 7.23472 7.16608 8.82764 7.2005 10.8006H7.20119C7.23613 8.82861 8.82814 7.23653 10.8001 7.20148Z'
        fill='inherit'
      />
    </svg>
  );
};

export const StarIconBlue: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0017 2.5C10.0742 6.60877 13.3913 9.92606 17.5 9.99878V10.0013C13.3913 10.074 10.0742 13.3912 10.0017 17.5H9.99947C9.92697 13.3909 6.60923 10.0734 2.5 10.0012V9.99876C6.60929 9.9267 9.92709 6.60918 9.99959 2.5H10.0017Z'
        fill='#EC8114'
      />
    </svg>
  );
};

export const ResumeDescriptiveBlue: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      className={className}
      {...props}
    >
      <circle
        cx='11'
        cy='11'
        r='8.5'
        fill='#69A3CC'
        stroke='#E3EFF6'
        strokeWidth='5'
      />
    </svg>
  );
};

export const PrevIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='9'
      height='14'
      viewBox='0 0 9 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M7.5 13.25L1.25 7L7.5 0.75'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const NextIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='9'
      height='14'
      viewBox='0 0 9 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M1.5 0.75L7.75 7L1.5 13.25'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CsvIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M7.5 10.5H3.75V20.25H20.2487V10.5H16.5'
        stroke='#565B61'
        strokeWidth='1.49965'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 4.5V13.5'
        stroke='#565B61'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9 6.75L12 3.75L15 6.75'
        stroke='#565B61'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const MoveRightIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M16.8745 3.1251L16.8745 16.874'
        stroke='#565B61'
        strokeWidth='1.2497'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.4995 9.99902L3.12451 9.99902'
        stroke='#565B61'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.37451 5.62402L13.7495 9.99902L9.37451 14.374'
        stroke='#565B61'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const MoveRightIconBlue: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.874 3.12608L16.874 16.875'
        stroke='#217BBB'
        strokeWidth='1.2497'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.499 10L3.12402 10'
        stroke='#217BBB'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.37402 5.625L13.749 10L9.37402 14.375'
        stroke='#217BBB'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const MoveColumnIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <circle cx='12.5' cy='10' r='1.25' fill='#565B61' />
      <circle cx='7.5' cy='10' r='1.25' fill='#565B61' />
      <circle cx='12.5' cy='15' r='1.25' fill='#565B61' />
      <circle cx='7.5' cy='15' r='1.25' fill='#565B61' />
      <circle cx='12.5' cy='5' r='1.25' fill='#565B61' />
      <circle cx='7.5' cy='5' r='1.25' fill='#565B61' />
    </svg>
  );
};

export const InfoIcon: FC<IconsProps & { colorCode?: string }> = (
  props: IconsProps & { colorCode?: string }
) => {
  /** props */
  const { className, colorCode } = props;

  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25ZM10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
        fill={colorCode ?? 'currentColor'}
      />
      <circle cx={10} cy='6.875' r='0.625' fill={colorCode ?? 'currentColor'} />
      <rect
        x='9.375'
        y='8.75'
        width='1.25'
        height={5}
        fill={colorCode ?? 'currentColor'}
      />
    </svg>
  );
};

export const CalenderIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      className={className}
      {...props}
    >
      <rect
        x='2.5'
        y='3.5'
        width='11'
        height='10'
        rx='0.5'
        stroke='#565B61'
        strokeLinejoin='round'
      />
      <path d='M2 6H14' stroke='#565B61' />
      <rect x='5' y='2' width='1' height='3' rx='0.5' fill='#565B61' />
      <rect x='10' y='2' width='1' height='3' rx='0.5' fill='#565B61' />
    </svg>
  );
};

export const NotAttached: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width={20}
      height={20}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.75 3.75L16.25 16.25'
        stroke='#677990'
        strokeWidth='1.25'
        strokeMiterlimit={16}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.5476 11.049C13.5735 11.0245 13.5992 10.9995 13.6246 10.9741L15.3923 9.20634C16.8568 7.74187 16.8568 5.3675 15.3923 3.90304C13.9279 2.43857 11.5535 2.43857 10.089 3.90304L8.76322 5.22886C8.51914 5.47294 8.51914 5.86867 8.76322 6.11275C9.0073 6.35682 9.40303 6.35682 9.6471 6.11275L10.9729 4.78692C11.9492 3.81061 13.5322 3.81061 14.5085 4.78692C15.4848 5.76323 15.4848 7.34614 14.5085 8.32245L12.7407 10.0902C12.7153 10.1157 12.6894 10.1404 12.6632 10.1646L13.5476 11.049ZM10.4272 10.7625L11.6213 12.0163C10.653 12.1854 9.63101 11.9726 8.79772 11.3778C8.51677 11.1773 8.51914 10.7762 8.76322 10.5322C9.0073 10.2881 9.40043 10.2968 9.69718 10.4731C9.92674 10.6095 10.1734 10.706 10.4272 10.7625ZM8.24896 8.47531C7.63354 8.49305 7.02342 8.73678 6.55371 9.20649L4.78594 10.9743C3.80963 11.9506 3.80963 13.5335 4.78594 14.5098C5.76225 15.4861 7.34517 15.4861 8.32148 14.5098L9.6473 13.184C9.89138 12.9399 10.2871 12.9399 10.5312 13.184L10.9712 13.624C10.9723 13.6251 10.974 13.6251 10.975 13.624L10.9731 13.6259L9.20536 15.3937C7.74089 16.8581 5.36653 16.8581 3.90206 15.3937C2.43759 13.9292 2.43759 11.5548 3.90206 10.0904L5.66983 8.32261C6.1174 7.87503 6.64997 7.56425 7.21558 7.39025L8.24896 8.47531Z'
        fill='#677990'
      />
    </svg>
  );
};

export const TrashIconWithStroke: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    stroke='inherit'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.5 6.25H17.5'
      stroke='inherit'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.5 6.25V5C7.5 4.30964 8.05964 3.75 8.75 3.75H11.25C11.9404 3.75 12.5 4.30964 12.5 5V6.25'
      stroke='inherit'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 6.25L5.27466 15.039C5.29575 15.7139 5.84889 16.25 6.52405 16.25H13.476C14.1511 16.25 14.7043 15.7139 14.7253 15.039L15 6.25'
      stroke='inherit'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 8.75V13.75'
      stroke='inherit'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.5 8.75V13.75'
      stroke='inherit'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.5 8.75V13.75'
      stroke='inherit'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const TrashIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M4.5 8.25H19.5'
      stroke='#677990'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.5 8.25V7C9.5 6.30964 10.0596 5.75 10.75 5.75H13.25C13.9404 5.75 14.5 6.30964 14.5 7V8.25'
      stroke='#677990'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 8.25L7.3125 18.25H16.6875L17 8.25'
      stroke='#677990'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 10.75V15.75'
      stroke='#677990'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.5 10.75V15.75'
      stroke='#677990'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.5 10.75V15.75'
      stroke='#677990'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const MenuIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <circle cx='10' cy='10' r='1.25' fill='#565B61' />
      <circle cx='10' cy='15' r='1.25' fill='#565B61' />
      <circle cx='10' cy='5' r='1.25' fill='#565B61' />
    </svg>
  );
};

export const MainLogoIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='103'
      height='22'
      viewBox='0 0 103 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M42.1999 15.5002C43.3301 15.5002 44.3316 14.9487 44.9498 14.1002H48.2812C47.4414 16.6553 45.0361 18.5002 42.1999 18.5002C38.6653 18.5002 35.7999 15.6348 35.7999 12.1002C35.7999 8.56557 38.6653 5.7002 42.1999 5.7002C45.7345 5.7002 48.5999 8.56557 48.5999 12.1002C48.5999 12.2345 48.5958 12.3679 48.5876 12.5002H38.8232C39.0212 14.1895 40.4575 15.5002 42.1999 15.5002ZM39.0177 10.9002C39.5028 9.61458 40.7446 8.70019 42.1999 8.70019C43.6553 8.70019 44.8971 9.61458 45.3821 10.9002H39.0177Z'
        fill='#0C151D'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M63.0001 3.5H60.0001V6.67682C59.015 6.05793 57.8493 5.7 56.6001 5.7C53.0654 5.7 50.2001 8.56537 50.2001 12.1C50.2001 15.6346 53.0654 18.5 56.6001 18.5C57.8493 18.5 59.015 18.1421 60.0001 17.5232V18.5H63.0001V3.5ZM60.0001 12.1C60.0001 10.2222 58.4778 8.7 56.6001 8.7C54.7223 8.7 53.2001 10.2222 53.2001 12.1C53.2001 13.9778 54.7223 15.5 56.6001 15.5C58.4778 15.5 60.0001 13.9778 60.0001 12.1Z'
        fill='#0C151D'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M90.2001 3.5H93.2001V6.67682C94.1852 6.05793 95.3508 5.7 96.6001 5.7C100.135 5.7 103 8.56537 103 12.1C103 15.6346 100.135 18.5 96.6001 18.5C95.3508 18.5 94.1852 18.1421 93.2001 17.5232V18.5H90.2001V3.5ZM93.2001 12.1C93.2001 13.9778 94.7223 15.5 96.6001 15.5C98.4778 15.5 100 13.9778 100 12.1C100 10.2222 98.4778 8.7 96.6001 8.7C94.7223 8.7 93.2001 10.2222 93.2001 12.1Z'
        fill='#0C151D'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M81.8001 15.5002C83.6779 15.5002 85.2001 13.978 85.2001 12.1002C85.2001 10.2224 83.6779 8.70019 81.8001 8.70019C79.9224 8.70019 78.4001 10.2224 78.4001 12.1002C78.4001 13.978 79.9224 15.5002 81.8001 15.5002ZM81.8001 18.5002C85.3348 18.5002 88.2001 15.6348 88.2001 12.1002C88.2001 8.56557 85.3348 5.7002 81.8001 5.7002C78.2655 5.7002 75.4001 8.56557 75.4001 12.1002C75.4001 15.6348 78.2655 18.5002 81.8001 18.5002Z'
        fill='#0C151D'
      />
      <path
        d='M30.0001 12.1002C30.0001 12.1002 30.0001 12.1002 30.0001 12.1002V18.5002H27.0001L27.0001 12.1002C27.0001 12.1002 27.0001 12.1002 27.0001 12.1002C27.0001 8.56557 29.8655 5.7002 33.4001 5.7002C33.671 5.7002 33.938 5.71703 34.2001 5.74971V8.79485C33.9436 8.73297 33.6757 8.70019 33.4001 8.70019C31.5224 8.70019 30.0001 10.2224 30.0001 12.1002Z'
        fill='#0C151D'
      />
      <path
        d='M69.2001 12.1002C69.2001 12.1002 69.2001 12.1002 69.2001 12.1002L69.2001 18.5002H66.2001L66.2001 12.1002C66.2001 12.1002 66.2001 12.1002 66.2001 12.1002C66.2001 8.56557 69.0655 5.7002 72.6001 5.7002C72.871 5.7002 73.138 5.71703 73.4001 5.74971V8.79485C73.1435 8.73297 72.8756 8.70019 72.6001 8.70019C70.7223 8.70019 69.2001 10.2224 69.2001 12.1002Z'
        fill='#0C151D'
      />
      <path
        d='M16.2273 2.19798L16.2273 10.9596C16.2056 7.81509 13.6498 5.27273 10.5002 5.27273C7.33711 5.27273 4.77292 7.83692 4.77292 11L4.77273 21.5H0L1.13711e-06 11C2.26528e-05 5.20099 4.70122 0.5 10.5002 0.5C12.6131 0.5 14.5802 1.12409 16.2273 2.19798Z'
        fill='#0C151D'
      />
      <path
        d='M16.2272 11C16.2272 14.1631 13.6631 16.7273 10.5001 16.7273C7.34443 16.7273 4.78488 14.1752 4.77283 11.0224L4.77283 19.802C6.41994 20.8759 8.38712 21.5 10.5001 21.5C16.2991 21.5 21.0001 16.799 21.0001 11L20.9999 0.5L16.2272 0.5L16.2272 11Z'
        fill='#69A3CC'
      />
    </svg>
  );
};

export const FloatingPlusIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <rect width='32' height='32' rx='16' fill='#EB896A' />
      <path d='M11 16H21' stroke='white' strokeLinecap='round' />
      <path d='M16 21L16 11' stroke='white' strokeLinecap='round' />
    </svg>
  );
};

export const ErrorIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
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
        d='M13 8C13 10.7614 10.7614 13 8 13C6.79937 13 5.69757 12.5768 4.83563 11.8715L11.8715 4.83563C12.5768 5.69757 13 6.79937 13 8ZM4.12853 11.1644L11.1644 4.12853C10.3024 3.42318 9.20064 3 8 3C5.23858 3 3 5.23858 3 8C3 9.20064 3.42318 10.3024 4.12853 11.1644ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z'
        fill='#E75252'
      />
    </svg>
  );
};

export const EditIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */

  return (
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
        clipRule='evenodd'
        d='M15.845 4.68306C15.7278 4.56585 15.5688 4.5 15.4031 4.5C15.2373 4.5 15.0783 4.56585 14.9611 4.68306L12.9263 6.71793C12.9191 6.72447 12.912 6.7312 12.9051 6.73813C12.8982 6.74506 12.8914 6.75211 12.8849 6.75928L4.68306 14.9611C4.56585 15.0783 4.5 15.2373 4.5 15.4031V18.8291C4.5 19.1743 4.77982 19.4541 5.125 19.4541H8.89363C9.06306 19.4541 9.22523 19.3853 9.34299 19.2635L19.2785 8.98541C19.5155 8.7402 19.5122 8.35024 19.271 8.10908L15.845 4.68306ZM13.3475 8.06443L5.75 15.662V18.2041H8.62851L15.9319 10.6488L13.3475 8.06443ZM16.8008 9.74997L17.9526 8.55845L15.4031 6.00888L14.2314 7.18055L16.8008 9.74997Z'
        fill='#677990'
      />
    </svg>
  );
};
export const EditIconWhite: FC<IconsProps> = (props: IconsProps) => {
  /** props */

  return (
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
        clipRule='evenodd'
        d='M15.845 4.68306C15.7278 4.56585 15.5688 4.5 15.4031 4.5C15.2373 4.5 15.0783 4.56585 14.9611 4.68306L12.9263 6.71793C12.9191 6.72447 12.912 6.7312 12.9051 6.73813C12.8982 6.74506 12.8914 6.75211 12.8849 6.75928L4.68306 14.9611C4.56585 15.0783 4.5 15.2373 4.5 15.4031V18.8291C4.5 19.1743 4.77982 19.4541 5.125 19.4541H8.89363C9.06306 19.4541 9.22523 19.3853 9.34299 19.2635L19.2785 8.98541C19.5155 8.7402 19.5122 8.35024 19.271 8.10908L15.845 4.68306ZM13.3475 8.06443L5.75 15.662V18.2041H8.62851L15.9319 10.6488L13.3475 8.06443ZM16.8008 9.74997L17.9526 8.55845L15.4031 6.00888L14.2314 7.18055L16.8008 9.74997Z'
        fill='#FFFFFF'
      />
    </svg>
  );
};

export const CheckIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M5.75 11.25L10.4375 15.75L18.25 8.25'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const CheckBlueIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5ZM14.1828 8.20081C14.4318 7.96176 14.4399 7.56611 14.2009 7.31711C13.9618 7.0681 13.5662 7.06003 13.3172 7.29907L9.0625 11.3836L6.68283 9.09907C6.43383 8.86003 6.03818 8.8681 5.79913 9.11711C5.56009 9.36611 5.56816 9.76176 5.81717 10.0008L8.62967 12.7008C8.87152 12.933 9.25348 12.933 9.49533 12.7008L14.1828 8.20081Z'
        fill='#217BBB'
      />
    </svg>
  );
};

export const ArrowRight: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9 5L16 12L9 19'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const ArrowDoen: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
    >
      <mask
        id='mask0_24986_55878'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='12'
        height='12'
      >
        <rect width='12' height='12' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_24986_55878)'>
        <path d='M6 7.7L3 4.7L3.7 4L6 6.3L8.3 4L9 4.7L6 7.7Z' fill='#526277' />
      </g>
    </svg>
  );
};

export const ArrowLeft: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        d='M15 19.5L7.5 12L15 4.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const ArrowLeftLong: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <g clipPath='url(#clip0_15957_108620)'>
        <path
          d='M13.5 8H2.5'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7 3.5L2.5 8L7 12.5'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_108620'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PlusIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      {...props}
    >
      <path
        d='M5 12H19'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M12 19L12 5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const CopyIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.125 5.625H14.375V16.875H3.125V5.625Z'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M16.8711 14.9968C17.2163 14.9968 17.4961 14.717 17.4961 14.3718V3.125C17.4961 2.77982 17.2163 2.5 16.8711 2.5H5.62454C5.27936 2.5 4.99954 2.77982 4.99954 3.125V6.24843H6.24954V3.75H16.2461V13.7468H13.7479V14.9968H16.8711Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const DoubleStarGradientIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.8016 7.20054V7.20271C8.8298 7.23787 7.23796 8.82978 7.20289 10.8016H7.20249C7.16793 8.82857 5.57469 7.23567 3.60156 7.20167V7.20114C5.57459 7.16713 7.16776 5.57441 7.20249 3.60156H7.20288C7.23789 5.57341 8.82975 7.16538 10.8016 7.20054ZM13.802 7.20171H13.8042C13.8681 10.8171 16.7868 13.7361 20.4021 13.8004V13.805C16.7875 13.8693 13.8691 16.7872 13.8042 20.4017H13.8018C13.7374 16.7861 10.818 13.8673 7.20215 13.8039V13.8005C10.8184 13.7372 13.7381 10.8178 13.802 7.20171Z'
        fill='url(#paint0_linear_27966_89488)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_27966_89488'
          x1='3.60156'
          y1='36.82'
          x2='24.5432'
          y2='34.7435'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#C684F5' />
          <stop offset='1' stop-color='#217BBB' />
        </linearGradient>
      </defs>
    </svg>
  );
};

<svg
  width='24'
  height='24'
  viewBox='0 0 24 24'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M10.8016 7.20054V7.20271C8.8298 7.23787 7.23796 8.82978 7.20289 10.8016H7.20249C7.16793 8.82857 5.57469 7.23567 3.60156 7.20167V7.20114C5.57459 7.16713 7.16776 5.57441 7.20249 3.60156H7.20288C7.23789 5.57341 8.82975 7.16538 10.8016 7.20054ZM13.802 7.20171H13.8042C13.8681 10.8171 16.7868 13.7361 20.4021 13.8004V13.805C16.7875 13.8693 13.8691 16.7872 13.8042 20.4017H13.8018C13.7374 16.7861 10.818 13.8673 7.20215 13.8039V13.8005C10.8184 13.7372 13.7381 10.8178 13.802 7.20171Z'
    fill='url(#paint0_linear_27966_89488)'
  />
  <defs>
    <linearGradient
      id='paint0_linear_27966_89488'
      x1='3.60156'
      y1='36.82'
      x2='24.5432'
      y2='34.7435'
      gradientUnits='userSpaceOnUse'
    >
      <stop stop-color='#C684F5' />
      <stop offset='1' stop-color='#217BBB' />
    </linearGradient>
  </defs>
</svg>;

export const AscIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='10'
      viewBox='0 0 20 10'
      fill='none'
      className={className}
      {...props}
    >
      <path d='M10 2.5L5 7.5H15L10 2.5Z' fill='currentColor' />
    </svg>
  );
};

export const AscMIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='6'
      viewBox='0 0 14 6'
      fill='none'
      className={className}
      {...props}
    >
      <path d='M7 0L0 6H14L7 0Z' fill='#565B61' />
    </svg>
  );
};

export const DescIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='10'
      viewBox='0 0 20 10'
      fill='none'
      className={className}
      {...props}
    >
      <path d='M10 7.5L15 2.5L5 2.5L10 7.5Z' fill='currentColor' />
    </svg>
  );
};

export const DescMIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='6'
      viewBox='0 0 14 6'
      fill='none'
      className={className}
      {...props}
    >
      <path
        d='M7 6L14 9.53674e-07L-3.41715e-07 -9.53992e-08L7 6Z'
        fill='#565B61'
      />
    </svg>
  );
};

export const ResetIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    {...props}
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M13.75 3.4375C16.0131 4.72844 17.5 7.20812 17.5 10C17.5 11.4834 17.0601 12.9334 16.236 14.1668C15.4119 15.4001 14.2406 16.3614 12.8701 16.9291C11.4997 17.4967 9.99168 17.6453 8.53682 17.3559C7.08197 17.0665 5.74559 16.3522 4.6967 15.3033C3.64781 14.2544 2.9335 12.918 2.64411 11.4632C2.35472 10.0083 2.50325 8.50032 3.07091 7.12987C3.63856 5.75943 4.59986 4.58809 5.83322 3.76398C7.06659 2.93987 8.51664 2.5 10 2.5'
      stroke='currentColor'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.75 7.1875V3.4375H17.5'
      stroke='currentColor'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const BlueStarIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.00166 2C8.05965 5.2869 10.7132 7.94065 14 7.99899V8.001C10.7132 8.05933 8.05964 10.7131 8.00166 14H7.99977C7.94178 10.7126 5.28748 8.05857 2 8.00097V7.999C5.28749 7.94142 7.9418 5.28738 7.99981 2H8.00166Z'
        fill='#9333EA'
      />
    </svg>
  );
};

export const SettingIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={className}
    >
      <path
        d='M13.5 3L14.1708 2.66459C14.0438 2.4105 13.7841 2.25 13.5 2.25V3ZM10.5 3V2.25C10.2159 2.25 9.95622 2.4105 9.82918 2.66459L10.5 3ZM14.4556 4.91123L13.7848 5.24664C13.8724 5.42184 14.0251 5.55582 14.2102 5.61993L14.4556 4.91123ZM15.2767 5.25177L14.9487 5.9262C15.125 6.01198 15.3279 6.0253 15.5139 5.96329L15.2767 5.25177ZM17.3032 4.57629L17.8335 4.04596C17.6327 3.84508 17.3355 3.77494 17.066 3.86477L17.3032 4.57629ZM19.4245 6.69761L20.136 6.93478C20.2259 6.66528 20.1557 6.36815 19.9549 6.16728L19.4245 6.69761ZM18.7489 8.72459L18.0374 8.48742C17.9754 8.67339 17.9887 8.87625 18.0744 9.05255L18.7489 8.72459ZM19.0888 9.54438L18.3801 9.78984C18.4442 9.97494 18.5782 10.1276 18.7534 10.2152L19.0888 9.54438ZM21 10.5H21.75C21.75 10.2159 21.5895 9.95622 21.3354 9.82918L21 10.5ZM21 13.5L21.3354 14.1708C21.5895 14.0438 21.75 13.7841 21.75 13.5H21ZM19.0888 14.4556L18.7534 13.7848C18.5782 13.8724 18.4442 14.0251 18.3801 14.2102L19.0888 14.4556ZM18.7483 15.2766L18.0739 14.9485C17.9881 15.1248 17.9748 15.3277 18.0368 15.5138L18.7483 15.2766ZM19.4237 17.3028L19.954 17.8332C20.1549 17.6323 20.2251 17.3352 20.1352 17.0657L19.4237 17.3028ZM17.3024 19.4242L17.0652 20.1357C17.3347 20.2255 17.6318 20.1554 17.8327 19.9545L17.3024 19.4242ZM15.2759 18.7487L15.513 18.0371C15.327 17.9751 15.1242 17.9884 14.9479 18.0742L15.2759 18.7487ZM14.4556 19.0888L14.2102 18.3801C14.0251 18.4442 13.8724 18.5782 13.7848 18.7534L14.4556 19.0888ZM13.5 21V21.75C13.7841 21.75 14.0438 21.5895 14.1708 21.3354L13.5 21ZM10.5 21L9.82918 21.3354C9.95622 21.5895 10.2159 21.75 10.5 21.75V21ZM9.54438 19.0888L10.2152 18.7534C10.1276 18.5782 9.97494 18.4442 9.78985 18.3801L9.54438 19.0888ZM8.72384 18.7485L9.05188 18.0741C8.87556 17.9883 8.67267 17.975 8.48667 18.037L8.72384 18.7485ZM6.69687 19.4242L6.16654 19.9545C6.36742 20.1554 6.66454 20.2255 6.93404 20.1357L6.69687 19.4242ZM4.57555 17.3028L3.86404 17.0657C3.77421 17.3352 3.84435 17.6323 4.04522 17.8332L4.57555 17.3028ZM5.25127 15.2757L5.96278 15.5129C6.02478 15.3269 6.01148 15.124 5.92575 14.9477L5.25127 15.2757ZM4.91123 14.4556L5.61993 14.2102C5.55582 14.0251 5.42185 13.8724 5.24664 13.7848L4.91123 14.4556ZM3 13.5H2.25C2.25 13.7841 2.4105 14.0438 2.66459 14.1708L3 13.5ZM3 10.5L2.66459 9.82918C2.4105 9.95622 2.25 10.2159 2.25 10.5H3ZM4.91123 9.54438L5.24664 10.2152C5.42185 10.1276 5.55582 9.97494 5.61993 9.78984L4.91123 9.54438ZM5.25134 8.72414L5.92582 9.05215C6.01156 8.87584 6.02485 8.67296 5.96286 8.48697L5.25134 8.72414ZM4.57583 6.69761L4.0455 6.16727C3.84463 6.36815 3.77449 6.66527 3.86432 6.93478L4.57583 6.69761ZM6.69715 4.57629L6.93432 3.86477C6.66482 3.77494 6.3677 3.84508 6.16682 4.04595L6.69715 4.57629ZM8.7234 5.2517L8.48623 5.96322C8.67225 6.02522 8.87516 6.01191 9.05148 5.92614L8.7234 5.2517ZM9.54438 4.91123L9.78984 5.61993C9.97494 5.55582 10.1276 5.42185 10.2152 5.24664L9.54438 4.91123ZM13.5 2.25H10.5V3.75H13.5V2.25ZM15.1264 4.57582L14.1708 2.66459L12.8292 3.33541L13.7848 5.24664L15.1264 4.57582ZM15.6048 4.57735C15.3129 4.4353 15.0112 4.30995 14.7011 4.20254L14.2102 5.61993C14.4635 5.70767 14.71 5.81009 14.9487 5.9262L15.6048 4.57735ZM17.066 3.86477L15.0396 4.54026L15.5139 5.96329L17.5404 5.2878L17.066 3.86477ZM19.9549 6.16728L17.8335 4.04596L16.7729 5.10662L18.8942 7.22794L19.9549 6.16728ZM19.4604 8.96176L20.136 6.93478L18.713 6.46043L18.0374 8.48742L19.4604 8.96176ZM19.7975 9.29892C19.6902 8.98934 19.5651 8.68816 19.4234 8.39663L18.0744 9.05255C18.1903 9.29086 18.2925 9.53696 18.3801 9.78984L19.7975 9.29892ZM21.3354 9.82918L19.4242 8.87356L18.7534 10.2152L20.6646 11.1708L21.3354 9.82918ZM21.75 13.5V10.5H20.25V13.5H21.75ZM19.4242 15.1264L21.3354 14.1708L20.6646 12.8292L18.7534 13.7848L19.4242 15.1264ZM19.4227 15.6047C19.5647 15.3127 19.6901 15.0111 19.7975 14.7011L18.3801 14.2102C18.2923 14.4634 18.1899 14.7099 18.0739 14.9485L19.4227 15.6047ZM20.1352 17.0657L19.4598 15.0394L18.0368 15.5138L18.7122 17.54L20.1352 17.0657ZM17.8327 19.9545L19.954 17.8332L18.8934 16.7725L16.7721 18.8938L17.8327 19.9545ZM15.0387 19.4602L17.0652 20.1357L17.5396 18.7127L15.513 18.0371L15.0387 19.4602ZM14.7011 19.7975C15.0108 19.6902 15.3122 19.565 15.6039 19.4231L14.9479 18.0742C14.7094 18.1901 14.4632 18.2924 14.2102 18.3801L14.7011 19.7975ZM14.1708 21.3354L15.1264 19.4242L13.7848 18.7534L12.8292 20.6646L14.1708 21.3354ZM10.5 21.75H13.5V20.25H10.5V21.75ZM8.87356 19.4242L9.82918 21.3354L11.1708 20.6646L10.2152 18.7534L8.87356 19.4242ZM8.39581 19.423C8.68759 19.5649 8.98904 19.6901 9.29892 19.7975L9.78985 18.3801C9.53672 18.2924 9.2904 18.1901 9.05188 18.0741L8.39581 19.423ZM6.93404 20.1357L8.96101 19.46L8.48667 18.037L6.4597 18.7127L6.93404 20.1357ZM4.04522 17.8332L6.16654 19.9545L7.2272 18.8938L5.10588 16.7725L4.04522 17.8332ZM4.53976 15.0385L3.86404 17.0657L5.28707 17.54L5.96278 15.5129L4.53976 15.0385ZM4.20254 14.7011C4.30981 15.0108 4.43497 15.3121 4.57679 15.6037L5.92575 14.9477C5.80982 14.7093 5.70755 14.4631 5.61993 14.2102L4.20254 14.7011ZM2.66459 14.1708L4.57582 15.1264L5.24664 13.7848L3.33541 12.8292L2.66459 14.1708ZM2.25 10.5V13.5H3.75V10.5H2.25ZM4.57582 8.87356L2.66459 9.82918L3.33541 11.1708L5.24664 10.2152L4.57582 8.87356ZM4.57687 8.39614C4.43502 8.68782 4.30983 8.98916 4.20254 9.29892L5.61993 9.78984C5.70757 9.53682 5.80986 9.29058 5.92582 9.05215L4.57687 8.39614ZM3.86432 6.93478L4.53983 8.96131L5.96286 8.48697L5.28734 6.46043L3.86432 6.93478ZM6.16682 4.04595L4.0455 6.16727L5.10616 7.22794L7.22748 5.10662L6.16682 4.04595ZM8.96057 4.54019L6.93432 3.86477L6.45998 5.2878L8.48623 5.96322L8.96057 4.54019ZM9.29892 4.20254C8.98887 4.30993 8.68726 4.43526 8.39533 4.57727L9.05148 5.92614C9.29012 5.81005 9.53658 5.70765 9.78984 5.61993L9.29892 4.20254ZM9.82918 2.66459L8.87356 4.57582L10.2152 5.24664L11.1708 3.33541L9.82918 2.66459Z'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='3.75'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export const NewTabIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.5 2.49988C8.5 2.2238 8.2762 2 8.00012 2H3.49965C2.67141 2 2 2.67142 2 3.49965V12.4989C2 13.3271 2.67141 13.9985 3.49964 13.9985H12.4993C13.3275 13.9985 13.9989 13.3271 13.9989 12.4989V7.49988C13.9989 7.2238 13.7751 7 13.499 7C13.2229 7 12.9991 7.2238 12.9991 7.49988V12.4989C12.9991 12.775 12.7753 12.9988 12.4993 12.9988H3.49964C3.22357 12.9988 2.99976 12.775 2.99976 12.4989V3.49965C2.99976 3.22357 3.22357 2.99976 3.49965 2.99976H8.00012C8.2762 2.99976 8.5 2.77596 8.5 2.49988Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 2.5C10 2.22386 10.2239 2 10.5 2H13.5C13.7761 2 14 2.22386 14 2.5V5.5C14 5.77614 13.7761 6 13.5 6C13.2239 6 13 5.77614 13 5.5V3H10.5C10.2239 3 10 2.77614 10 2.5Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.3536 2.64645C13.5488 2.84171 13.5488 3.15829 13.3536 3.35355L7.35355 9.35355C7.15829 9.54882 6.84171 9.54882 6.64645 9.35355C6.45118 9.15829 6.45118 8.84171 6.64645 8.64645L12.6464 2.64645C12.8417 2.45118 13.1583 2.45118 13.3536 2.64645Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const LoadingIcon: FC<IconsProps> = (props: IconsProps) => {
  const { className } = props;
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      {...props}
      className={className}
    >
      <circle
        cx='50'
        cy='50'
        r='40'
        fill='none'
        stroke='#ECEFF2'
        strokeWidth='20'
      />

      <circle
        cx='50'
        cy='50'
        r='40'
        fill='none'
        stroke='#22272F'
        strokeWidth='20'
      >
        <animate
          attributeName='stroke-dashoffset'
          dur='2s'
          from='0'
          to='502'
          repeatCount='indefinite'
        />
        <animate
          attributeName='stroke-dasharray'
          dur='2s'
          values='150.6 100.4;1 250;150.6 100.4'
          keyTimes='0;0.5;1'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  );
};

export const NewtabIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.2498 3.74982C13.2498 3.33571 12.914 3 12.4999 3H5.74922C4.50688 3 3.49976 4.00712 3.49976 5.24947V18.7483C3.49976 19.9907 4.50688 20.9978 5.74922 20.9978H19.2486C20.491 20.9978 21.4981 19.9907 21.4981 18.7483V11.2498C21.4981 10.8357 21.1624 10.5 20.7483 10.5C20.3342 10.5 19.9985 10.8357 19.9985 11.2498V18.7483C19.9985 19.1624 19.6628 19.4981 19.2486 19.4981H5.74922C5.33511 19.4981 4.9994 19.1624 4.9994 18.7483V5.24947C4.9994 4.83535 5.33511 4.49965 5.74922 4.49965H12.4999C12.914 4.49965 13.2498 4.16394 13.2498 3.74982Z'
        fill='#565B61'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.4998 3.75C15.4998 3.33579 15.8355 3 16.2498 3H20.7498C21.164 3 21.4998 3.33579 21.4998 3.75V8.25C21.4998 8.66421 21.164 9 20.7498 9C20.3355 9 19.9998 8.66421 19.9998 8.25V4.5H16.2498C15.8355 4.5 15.4998 4.16421 15.4998 3.75Z'
        fill='#565B61'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.5301 3.96967C20.823 4.26256 20.823 4.73744 20.5301 5.03033L11.5301 14.0303C11.2372 14.3232 10.7623 14.3232 10.4694 14.0303C10.1765 13.7374 10.1765 13.2626 10.4694 12.9697L19.4694 3.96967C19.7623 3.67678 20.2372 3.67678 20.5301 3.96967Z'
        fill='#565B61'
      />
    </svg>
  );
};

export const SalesIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      {...props}
    >
      <path
        d='M3.78882 2.5V16.25H17.5388'
        stroke='#9DA0A4'
        strokeWidth='1.25'
        strokeLinecap='round'
      />
      <path
        d='M7.53882 10V16.25'
        stroke='#9DA0A4'
        strokeWidth='1.25'
        strokeLinecap='round'
      />
      <path
        d='M11.2888 7.5L11.2888 16.25'
        stroke='#9DA0A4'
        strokeWidth='1.25'
        strokeLinecap='round'
      />
      <path
        d='M15.0388 5L15.0388 16.25'
        stroke='#9DA0A4'
        strokeWidth='1.25'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const RecruitIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      {...props}
    >
      <circle
        cx='10.0388'
        cy='10'
        r='7.375'
        stroke='white'
        strokeWidth='1.25'
      />
      <path
        d='M5.99976 10.625C6.34493 10.625 6.62476 10.3452 6.62476 10C6.62476 9.65482 6.34493 9.375 5.99976 9.375V10.625ZM2.99976 10.625H5.99976V9.375H2.99976V10.625Z'
        fill='white'
      />
      <path
        d='M13.9998 9.375C13.6546 9.375 13.3748 9.65482 13.3748 10C13.3748 10.3452 13.6546 10.625 13.9998 10.625V9.375ZM16.9998 9.375H13.9998V10.625H16.9998V9.375Z'
        fill='white'
      />
      <path
        d='M9.41387 6.00814C9.41837 6.35329 9.70181 6.62944 10.047 6.62495C10.3921 6.62045 10.6683 6.33701 10.6638 5.99186L9.41387 6.00814ZM9.37481 3.00814L9.41387 6.00814L10.6638 5.99186L10.6247 2.99186L9.37481 3.00814Z'
        fill='white'
      />
      <path
        d='M10.6638 14.0081C10.6683 13.663 10.3921 13.3795 10.047 13.3751C9.70181 13.3706 9.41837 13.6467 9.41387 13.9919L10.6638 14.0081ZM10.6247 17.0081L10.6638 14.0081L9.41387 13.9919L9.37481 16.9919L10.6247 17.0081Z'
        fill='white'
      />
    </svg>
  );
};

export const VendorIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
      {...props}
    >
      <path
        d='M4.41382 9.375V13.125M15.6638 9.375V13.125M15.6638 13.125V15.625C15.6638 16.3154 15.1042 16.875 14.4138 16.875H5.66382C4.97346 16.875 4.41382 16.3154 4.41382 15.625V13.125M15.6638 13.125H4.41382'
        stroke='#9DA0A4'
        strokeWidth='1.25'
      />
      <mask id='path-2-inside-1_2802_1863' fill='white'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.78882 2.5C3.09846 2.5 2.53882 3.05964 2.53882 3.75V7.5C2.53882 8.88071 3.65811 10 5.03882 10C6.41953 10 7.53882 8.88071 7.53882 7.5C7.53882 8.88071 8.65811 10 10.0388 10C11.4195 10 12.5388 8.88071 12.5388 7.5C12.5388 8.88071 13.6581 10 15.0388 10C16.4195 10 17.5388 8.88071 17.5388 7.5V3.75C17.5388 3.05964 16.9792 2.5 16.2888 2.5H3.78882Z'
        />
      </mask>
      <path
        d='M3.78882 3.75V1.25C2.40811 1.25 1.28882 2.36929 1.28882 3.75H3.78882ZM3.78882 7.5V3.75H1.28882V7.5H3.78882ZM5.03882 8.75C4.34846 8.75 3.78882 8.19036 3.78882 7.5H1.28882C1.28882 9.57107 2.96775 11.25 5.03882 11.25V8.75ZM6.28882 7.5C6.28882 8.19036 5.72917 8.75 5.03882 8.75V11.25C7.10989 11.25 8.78882 9.57107 8.78882 7.5H6.28882ZM6.28882 7.5C6.28882 9.57107 7.96775 11.25 10.0388 11.25V8.75C9.34846 8.75 8.78882 8.19036 8.78882 7.5H6.28882ZM10.0388 11.25C12.1099 11.25 13.7888 9.57107 13.7888 7.5H11.2888C11.2888 8.19036 10.7292 8.75 10.0388 8.75V11.25ZM15.0388 8.75C14.3485 8.75 13.7888 8.19036 13.7888 7.5H11.2888C11.2888 9.57107 12.9678 11.25 15.0388 11.25V8.75ZM16.2888 7.5C16.2888 8.19036 15.7292 8.75 15.0388 8.75V11.25C17.1099 11.25 18.7888 9.57107 18.7888 7.5H16.2888ZM16.2888 3.75V7.5H18.7888V3.75H16.2888ZM16.2888 3.75H18.7888C18.7888 2.36929 17.6695 1.25 16.2888 1.25V3.75ZM3.78882 3.75H16.2888V1.25H3.78882V3.75Z'
        fill='#9DA0A4'
        mask='url(#path-2-inside-1_2802_1863)'
      />
      <path d='M3.16382 7.5H16.9138' stroke='#9DA0A4' strokeWidth='1.25' />
    </svg>
  );
};

export const EORIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      {...props}
    >
      <mask id='path-1-inside-1_2802_1917' fill='white'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3 3C2.44772 3 2 3.44772 2 4V12C2 12.5523 2.44772 13 3 13H12L13.9231 8.38462C14.1975 7.72593 13.7136 7 13 7H12.5H12V5.11111C12 4.55883 11.5523 4.11111 11 4.11111H8L7.29793 3.33104C7.10829 3.12032 6.83812 3 6.55464 3H3Z'
        />
      </mask>
      <path
        d='M12 13V14H12.6667L12.9231 13.3846L12 13ZM13.9231 8.38462L13 8L13.9231 8.38462ZM12 7H11V8H12V7ZM8 4.11111L7.25671 4.78008L7.55464 5.11111H8V4.11111ZM7.29793 3.33104L6.55464 4V4L7.29793 3.33104ZM3 4V4V2C1.89543 2 1 2.89543 1 4H3ZM3 12V4H1V12H3ZM3 12L3 12H1C1 13.1046 1.89543 14 3 14V12ZM12 12H3V14H12V12ZM12.9231 13.3846L14.8462 8.76923L13 8L11.0769 12.6154L12.9231 13.3846ZM14.8462 8.76923C15.3951 7.45186 14.4272 6 13 6V8L14.8462 8.76923ZM13 6H12.5V8H13V6ZM12.5 6H12V8H12.5V6ZM11 5.11111V7H13V5.11111H11ZM11 5.11111H13C13 4.00654 12.1046 3.11111 11 3.11111V5.11111ZM8 5.11111H11V3.11111H8V5.11111ZM6.55464 4L7.25671 4.78008L8.74329 3.44215L8.04123 2.66207L6.55464 4ZM6.55464 4V4L8.04123 2.66207C7.66194 2.24064 7.12161 2 6.55464 2V4ZM3 4H6.55464V2H3V4Z'
        fill='currentColor'
        mask='url(#path-1-inside-1_2802_1917)'
      />
      <path d='M11.5 7V12' stroke='currentColor' />
      <rect x='4' y='10' width='5' height='1' rx='0.5' fill='currentColor' />
      <rect x='4' y='8' width='3' height='1' rx='0.5' fill='currentColor' />
    </svg>
  );
};

export const CheckWithGreenBG: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width={16} height={16} rx={8} fill='#6BBE79' />
      <g clipPath='url(#clip0_16997_78518)'>
        <path
          d='M5.25 8.5L7 10.25L11 6.25'
          stroke='white'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_16997_78518'>
          <rect width={8} height={8} fill='white' transform='translate(4 4)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const BusinessIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      {...props}
    >
      <g clipPath='url(#clip0_9687_91504)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 5.49988C2 5.2238 2.2238 5 2.49988 5H13.499C13.7751 5 13.9989 5.2238 13.9989 5.49988V13.4999C13.9989 13.776 13.7751 13.9998 13.499 13.9998H2.49988C2.2238 13.9998 2 13.776 2 13.4999V5.49988ZM2.99976 5.99976V13H12.9991V5.99976H2.99976Z'
          fill='currentColor'
        />
        <path
          d='M6 5V4C6 3.44772 6.44772 3 7 3H9C9.55228 3 10 3.44772 10 4V5'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3 6L6 8.5H8H10L13 6'
          stroke='currentColor'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_9687_91504'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
export const NewBusinessIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_20183_44697)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.99902 5.49988C1.99902 5.2238 2.22283 5 2.49891 5H13.498C13.7741 5 13.9979 5.2238 13.9979 5.49988V13.4999C13.9979 13.776 13.7741 13.9998 13.498 13.9998H2.49891C2.22283 13.9998 1.99902 13.776 1.99902 13.4999V5.49988ZM2.99879 5.99976V13H12.9982V5.99976H2.99879Z'
          fill='#8696AA'
        />
        <path
          d='M5.99902 5V4C5.99902 3.44772 6.44674 3 6.99902 3H8.99902C9.55131 3 9.99902 3.44772 9.99902 4V5'
          stroke='#8696AA'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M2.99902 6L5.99902 8.5H7.99902H9.99902L12.999 6'
          stroke='#8696AA'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_20183_44697'>
          <rect
            width='16'
            height='16'
            fill='white'
            transform='translate(-0.000976562)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PersonalIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <circle cx='12' cy='7.5' r='3.75' stroke='white' strokeWidth='1.5' />
      <path
        d='M12 13.5C8.36818 13.5 5.33929 16.0814 4.64809 19.5096C4.48435 20.3217 5.17157 21 6 21H18C18.8284 21 19.5156 20.3217 19.3519 19.5096C18.6607 16.0814 15.6318 13.5 12 13.5Z'
        stroke='white'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export const AssessmentIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='17'
    height='16'
    viewBox='0 0 17 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect
      x='6.03906'
      y='4'
      width='4.5'
      height='1'
      rx='0.5'
      fill='currentColor'
    />
    <rect x='4.03906' y='4' width='1' height='1' rx='0.5' fill='currentColor' />
    <rect
      x='6.03906'
      y='6'
      width='4.5'
      height='1'
      rx='0.5'
      fill='currentColor'
    />
    <rect x='4.03906' y='6' width='1' height='1' rx='0.5' fill='currentColor' />
    <path
      d='M9.03906 12.3473L13.3864 8L14.8355 9.44911L10.6331 13.7964H9.03906V12.3473Z'
      stroke='currentColor'
      strokeLinejoin='round'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.53906 2C2.40645 2 2.27928 2.05268 2.18551 2.14645C2.09174 2.24021 2.03906 2.36739 2.03906 2.5V13.5C2.03906 13.7761 2.26292 14 2.53906 14H13.5391C13.8152 14 14.0391 13.7761 14.0391 13.5V10.273L13.0391 11.3075V13H11.403L10.6331 13.7964H9.03906V13H3.03906V3H13.0391V8.34732L13.3864 8L14.0391 8.65268V2.5C14.0391 2.36739 13.9864 2.24021 13.8926 2.14645C13.7988 2.05268 13.6717 2 13.5391 2H2.53906Z'
      fill='currentColor'
    />
  </svg>
);

export const AssessmentWhiteIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x='7.5'
        y='5.5'
        width='5.625'
        height='1.25'
        rx='0.625'
        fill='white'
      />
      <rect x='5' y='5.5' width='1.25' height='1.25' rx='0.625' fill='white' />
      <rect x='7.5' y='8' width='5.625' height='1.25' rx='0.625' fill='white' />
      <rect x='5' y='8' width='1.25' height='1.25' rx='0.625' fill='white' />
      <path
        d='M11.25 15.9342L16.6842 10.5L18.4955 12.3114L13.2425 17.7455H11.25V15.9342Z'
        stroke='white'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.125 3C2.95924 3 2.80027 3.06585 2.68306 3.18306C2.56585 3.30027 2.5 3.45924 2.5 3.625V17.375C2.5 17.7202 2.77982 18 3.125 18H16.875C17.2202 18 17.5 17.7202 17.5 17.375V13.3413L16.25 14.6344V16.75H14.2049L13.2425 17.7455H11.25V16.75H3.75V4.25H16.25V10.9342L16.6842 10.5L17.5 11.3158V3.625C17.5 3.45924 17.4342 3.30027 17.3169 3.18306C17.1997 3.06585 17.0408 3 16.875 3H3.125Z'
        fill='white'
      />
    </svg>
  );
};

export const JobPostIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M11.667 5.41732V3.75065H8.33366V5.41732H11.667ZM3.33366 7.08398V16.2507H16.667V7.08398H3.33366ZM16.667 5.41732C17.592 5.41732 18.3337 6.15898 18.3337 7.08398V16.2507C18.3337 17.1757 17.592 17.9173 16.667 17.9173H3.33366C2.40866 17.9173 1.66699 17.1757 1.66699 16.2507L1.67533 7.08398C1.67533 6.15898 2.40866 5.41732 3.33366 5.41732H6.66699V3.75065C6.66699 2.82565 7.40866 2.08398 8.33366 2.08398H11.667C12.592 2.08398 13.3337 2.82565 13.3337 3.75065V5.41732H16.667Z'
      fill='currentColor'
    />
  </svg>
);

export const EmploymentLaw: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width={17}
    height={16}
    viewBox='0 0 17 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='8.56055' cy={5} r='2.5' stroke='#FEFEFE' />
    <path
      d='M8.56055 9C6.13933 9 4.12007 10.721 3.65927 13.0064C3.55012 13.5478 4.00826 14 4.56055 14H12.5605C13.1128 14 13.571 13.5478 13.4618 13.0064C13.001 10.721 10.9818 9 8.56055 9Z'
      stroke='#FEFEFE'
    />
  </svg>
);

export const ShieldIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='12'
    height='14'
    viewBox='0 0 12 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      id='Vector'
      d='M5.92415 12.8922L5.9242 12.8921L5.91283 12.8882C4.61459 12.4398 3.46924 11.8419 2.65217 11.0051C1.84872 10.1822 1.34082 9.10713 1.34082 7.63916V3.15916C1.34082 3.12203 1.35557 3.08643 1.38183 3.06017C1.40808 3.03391 1.44369 3.01916 1.48082 3.01916C2.92153 3.01916 4.63241 2.17683 5.8007 1.15725C5.84552 1.11956 5.90222 1.09888 5.96082 1.09888C6.01939 1.09888 6.07606 1.11954 6.12087 1.15719C7.29603 2.18359 9.0005 3.01916 10.4408 3.01916C10.478 3.01916 10.5136 3.03392 10.5398 3.06017C10.5661 3.08642 10.5808 3.12203 10.5808 3.15916V7.63916C10.5808 9.1071 10.0729 10.1823 9.26996 11.0062C8.45397 11.8434 7.31093 12.4426 6.01661 12.8941C5.98649 12.9039 5.95389 12.9033 5.92415 12.8922Z'
      stroke='#FEFEFE'
    />
  </svg>
);

export const JopPostWhiteIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.12695 15.4988C2.78178 15.4988 2.50195 15.2189 2.50195 14.8738V3.62695C2.50195 3.28178 2.78178 3.00195 3.12695 3.00195H14.3735C14.7187 3.00195 14.9985 3.28178 14.9985 3.62695V6.75038H13.7485V4.25195H3.75195V14.2488H6.25012V15.4988H3.12695Z'
        fill='white'
      />
      <rect
        width='11.2466'
        height='11.2468'
        transform='matrix(1 0 0 -1 5.625 17.3711)'
        stroke='white'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
      <circle cx='11.25' cy='10.5' r='1.25' stroke='white' strokeWidth='1.25' />
      <path
        d='M14.375 18V13.625H11.25H8.125V18'
        stroke='white'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ChatIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M9.85714 16.2856L12 19.5L14.1429 16.2856H18.4286C18.7127 16.2856 18.9853 16.1726 19.1862 15.9715C19.3871 15.7704 19.5 15.4977 19.5 15.2134V5.57112C19.5 5.43037 19.4723 5.291 19.4184 5.16097C19.3646 5.03095 19.2856 4.91282 19.1861 4.81335C19.0866 4.71387 18.9685 4.63499 18.8385 4.58123C18.7085 4.52746 18.5692 4.49986 18.4286 4.5H5.57143C5.28727 4.5 5.01475 4.61296 4.81381 4.81404C4.61288 5.01511 4.5 5.28783 4.5 5.57219V15.2155C4.5 15.8074 4.97893 16.2866 5.57143 16.2866L9.85714 16.2856Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='square'
        strokeLinejoin='round'
      />
      <rect
        x='7.5'
        y='7.5'
        width='9'
        height='1.5'
        rx='0.75'
        fill='currentColor'
      />
      <rect
        x='7.5'
        y='10.5'
        width='9'
        height='1.5'
        rx='0.75'
        fill='currentColor'
      />
      {/* <circle cx='19.5' cy='4.5' r='2.5' fill='#EB3E28' /> */}
    </svg>
  );
};

export const NewChatIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_19997_85048)'>
        <path
          d='M15.0017 21C13.5252 20.9993 12.0895 20.5145 10.9149 19.6198C9.74022 18.7251 8.89134 17.4699 8.49835 16.0465C8.10535 14.6232 8.18992 13.1103 8.73908 11.7396C9.28824 10.3689 10.2717 9.21614 11.5387 8.45791C12.8058 7.69968 14.2865 7.37784 15.754 7.5417C17.2214 7.70557 18.5947 8.34611 19.6633 9.36515C20.7319 10.3842 21.4368 11.7255 21.6701 13.1836C21.9034 14.6416 21.6522 16.1359 20.9549 17.4375L21.7199 20.04C21.7578 20.1692 21.7603 20.3063 21.727 20.4368C21.6937 20.5673 21.6258 20.6864 21.5306 20.7817C21.4354 20.8769 21.3162 20.9447 21.1857 20.978C21.0552 21.0113 20.9182 21.0089 20.7889 20.9709L18.1892 20.2031C17.209 20.7282 16.1138 21.0019 15.0017 21Z'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.63121 16.4905C7.64731 16.4381 6.68704 16.1695 5.81871 15.7039L3.21621 16.4689C3.08698 16.5069 2.94992 16.5093 2.81942 16.476C2.68891 16.4427 2.56979 16.3749 2.47455 16.2796C2.37932 16.1844 2.31148 16.0653 2.27818 15.9348C2.24487 15.8043 2.24732 15.6672 2.28527 15.538L3.04746 12.9383C2.61325 12.1187 2.35261 11.2184 2.2818 10.2936C2.211 9.36877 2.33156 8.43929 2.63594 7.56314C2.94033 6.687 3.42202 5.88298 4.05095 5.20127C4.67989 4.51955 5.44257 3.97477 6.2914 3.60092C7.14024 3.22707 8.05702 3.03217 8.98453 3.02838C9.91204 3.02459 10.8304 3.21199 11.6822 3.57889C12.5341 3.94579 13.3012 4.48432 13.9357 5.16087C14.5702 5.83742 15.0584 6.63748 15.37 7.51111'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_19997_85048'>
          <rect width='24' height='24' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MapIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M9.99992 1.6748C6.78659 1.6748 4.1731 4.28992 4.1731 7.50326C4.1731 11.2391 9.14535 17.3076 9.35702 17.5635L9.99992 18.3431L10.6428 17.5635C10.8545 17.3068 15.8267 11.2391 15.8267 7.50326C15.8267 4.28909 13.2133 1.6748 9.99992 1.6748ZM9.99992 3.34147C12.2941 3.34147 14.1601 5.20909 14.1601 7.50326C14.1601 9.75742 11.5649 13.6343 9.99992 15.6885C8.43492 13.636 5.83976 9.76076 5.83976 7.50326C5.83976 5.20909 7.70575 3.34147 9.99992 3.34147ZM9.99992 5.41667C8.84909 5.41667 7.91659 6.34917 7.91659 7.5C7.91659 8.65083 8.84909 9.58333 9.99992 9.58333C11.1508 9.58333 12.0833 8.65083 12.0833 7.5C12.0833 6.34917 11.1508 5.41667 9.99992 5.41667Z'
        fill='#69A3CC'
      />
    </svg>
  );
};

export const EmailIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.125 5L10 10L16.875 5'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.125 4.375H16.875V15.625H3.125L3.125 4.375Z'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const EmailPlusIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.5 4L8 8L13.5 4'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.5 8V3.5H2.5L2.5 12.5H8H10.4M11.5 11H13M14.5 11H13M13 11V12.5998M13 11V9.5998'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const TalentEmailIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.75 6L12 12L20.25 6'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.75 5.25H20.25V18.75H3.75L3.75 5.25Z'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const PhoneIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M16.6858 12.9067C16.1608 12.8942 15.5 12.8633 15.0825 12.79C14.6308 12.71 14.0875 12.555 13.705 12.4358C13.405 12.3425 13.0783 12.425 12.8558 12.6467L11.0083 14.4833C9.73167 13.8108 8.70917 13.0275 7.84333 12.1567C6.9725 11.2908 6.18917 10.2683 5.51667 8.99167L7.35333 7.14333C7.575 6.92083 7.6575 6.59417 7.56417 6.29417C7.44583 5.9125 7.29 5.36917 7.21083 4.9175C7.13667 4.5 7.10667 3.83917 7.09333 3.31417C7.0825 2.86 6.7125 2.5 6.25833 2.5H3.33333C2.96833 2.5 2.5 2.77333 2.5 3.33333C2.5 7.11583 4.03333 10.7283 6.63833 13.3617C9.27167 15.9667 12.8842 17.5 16.6667 17.5C17.2267 17.5 17.5 17.0317 17.5 16.6667V13.7417C17.5 13.2875 17.14 12.9175 16.6858 12.9067Z'
        fill='#69A3CC'
      />
    </svg>
  );
};
export const PhoneOutlinedIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14.2608 11.198V13.0475C14.2615 13.2192 14.2263 13.3891 14.1575 13.5465C14.0887 13.7038 13.9878 13.845 13.8613 13.961C13.7348 14.0771 13.5854 14.1655 13.4228 14.2205C13.2602 14.2755 13.0878 14.2959 12.9168 14.2805C11.0198 14.0743 9.19755 13.4261 7.59654 12.3879C6.107 11.4413 4.84413 10.1785 3.89762 8.68894C2.85574 7.08065 2.20736 5.24956 2.005 3.344C1.9896 3.17352 2.00986 3.0017 2.0645 2.83948C2.11913 2.67726 2.20695 2.5282 2.32235 2.40178C2.43775 2.27535 2.57822 2.17435 2.7348 2.10518C2.89137 2.03602 3.06064 2.00022 3.23181 2.00006H5.08127C5.38046 1.99712 5.6705 2.10306 5.89735 2.29815C6.1242 2.49324 6.27237 2.76416 6.31424 3.06042C6.39231 3.65228 6.53707 4.23342 6.74579 4.79274C6.82873 5.0134 6.84668 5.25321 6.79751 5.48375C6.74834 5.7143 6.63412 5.92591 6.46837 6.09353L5.68543 6.87647C6.56303 8.41987 7.84095 9.69778 9.38435 10.5754L10.1673 9.79245C10.3349 9.6267 10.5465 9.51247 10.7771 9.4633C11.0076 9.41414 11.2474 9.43209 11.4681 9.51503C12.0274 9.72374 12.6085 9.86851 13.2004 9.94657C13.4999 9.98882 13.7734 10.1397 13.9689 10.3704C14.1644 10.6011 14.2683 10.8957 14.2608 11.198Z'
        stroke='currentColor'
        stroke-miterlimit='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const MobileIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.5 3C4.5 2.72386 4.72386 2.5 5 2.5H11C11.2761 2.5 11.5 2.72386 11.5 3V13C11.5 13.2761 11.2761 13.5 11 13.5H5C4.72386 13.5 4.5 13.2761 4.5 13V3Z'
        stroke='#217BBB'
      />
      <path d='M4 11H12' stroke='#217BBB' />
      <path
        d='M8.5 4.5C8.5 4.77614 8.27614 5 8 5C7.72386 5 7.5 4.77614 7.5 4.5C7.5 4.22386 7.72386 4 8 4C8.27614 4 8.5 4.22386 8.5 4.5Z'
        fill='#217BBB'
      />
    </svg>
  );
};

export const CandidateExpIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        d='M10 2.5C8.16892 2.5 6.66667 4.00225 6.66667 5.83333C6.66667 7.66441 8.16892 9.16667 10 9.16667C11.8311 9.16667 13.3333 7.66441 13.3333 5.83333C13.3333 4.00225 11.8311 2.5 10 2.5ZM10 4.16667C10.9303 4.16667 11.6667 4.90299 11.6667 5.83333C11.6667 6.76368 10.9303 7.5 10 7.5C9.06966 7.5 8.33333 6.76368 8.33333 5.83333C8.33333 4.90299 9.06966 4.16667 10 4.16667ZM10 11.6667C7.3825 11.6667 2.5 12.9542 2.5 15.4167V17.5H11.8213L10.8073 16.6227L9.89421 15.8333H4.16667V15.4167C4.16667 14.6925 7.25667 13.3333 10 13.3333C11.1717 13.3333 12.4059 13.5825 13.4359 13.9225L14.0853 12.3796C12.6853 11.9079 11.1308 11.6667 10 11.6667ZM15.8431 12.5L14.7363 15.1188L11.8978 15.3613L14.0495 17.2249L13.4033 19.9984L15.8431 18.5286L18.2829 20L17.6367 17.2184L19.7884 15.3564L16.9515 15.1139L15.8431 12.5Z'
        fill='#69A3CC'
      />
    </svg>
  );
};

export const DownloadIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='16'
      viewBox='0 0 15 16'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5 6.125C5 5.77982 4.72018 5.5 4.375 5.5H1.25C0.559644 5.5 0 6.05964 0 6.75V14.25C0 14.9404 0.559644 15.5 1.25 15.5H13.75C14.4404 15.5 15 14.9404 15 14.25V6.75C15 6.05964 14.4404 5.5 13.75 5.5H10.625C10.2798 5.5 10 5.77982 10 6.125C10 6.47018 10.2798 6.75 10.625 6.75H13.75V14.25H1.25V6.75H4.375C4.72018 6.75 5 6.47018 5 6.125Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.5 11.75C7.34125 11.75 7.19008 11.688 7.08461 11.5797L4.1734 8.70113C3.94744 8.4777 3.96562 8.10753 4.21239 7.90732C4.42247 7.73688 4.72686 7.75062 4.92074 7.93929L6.94423 9.9085L6.94423 1.05577C6.94423 0.748826 7.19306 0.5 7.5 0.5C7.80694 0.5 8.05577 0.748826 8.05577 1.05577L8.05577 9.9085L10.0793 7.93929C10.2731 7.75062 10.5775 7.73688 10.7876 7.90732C11.0344 8.10753 11.0526 8.47771 10.8266 8.70113L7.91539 11.5797C7.80992 11.688 7.65875 11.75 7.5 11.75Z'
        fill='currentColor'
      />
    </svg>
  );
};
export const DownloadIconGrey: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18.8739 18.875H5.125'
        stroke='#565B61'
        strokeWidth='1.2497'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 14.5L12 5.125'
        stroke='#565B61'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.375 11.375L12 15.75L7.625 11.375'
        stroke='#565B61'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const EarlyBirdAIIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 7.5L15.8534 11.3534'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.0068 18.0156C19.365 18.0441 18.0386 19.3663 18.0034 21.0064H18.001C17.9618 19.3707 16.6382 18.0531 15 18.0235V18.0226C16.6514 17.9927 17.9832 16.654 18.0018 15H18.0029C18.0257 16.6511 19.357 17.9861 21.0068 18.0148V18.0156Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.00031 8.99998H6.0013C6.03638 7.36203 7.36061 6.04144 9 6.01221V6.01177C7.35479 5.98244 6.02697 4.65255 6.00097 3.00653C5.97907 4.65678 4.64867 5.99123 3 6.01964V6.02006C4.63758 6.04831 5.96115 7.36508 6.00031 8.99998Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.5534 3.21967C15.8462 2.92678 16.3211 2.92678 16.614 3.21967L20.7252 7.3309C21.0146 7.62029 21.0186 8.08824 20.7341 8.38249L8.81159 20.7162C8.52992 21.0076 8.06772 21.0225 7.76785 20.7499L3.2455 16.6386C3.09373 16.5007 3.00509 16.3066 3.00021 16.1015C2.99533 15.8965 3.07464 15.6984 3.21967 15.5534L15.5534 3.21967ZM4.83652 16.0578L8.23865 19.1507L19.1432 7.87014L16.0837 4.81066L4.83652 16.0578Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const SkillRadarIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <circle
        cx='12'
        cy='12'
        r='8.25'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <circle
        cx='12'
        cy='12'
        r='5.25'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <circle
        cx='12'
        cy='12'
        r='2.25'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M13.5 10.5L18.6962 7.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export const SearchTalentsIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.125 14.9968C2.77982 14.9968 2.5 14.717 2.5 14.3718V3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H14.3716C14.7167 2.5 14.9966 2.77982 14.9966 3.125V6.24843H13.7466V3.75H3.75V13.7468H6.24817V14.9968H3.125Z'
        fill='currentColor'
      />
      <rect
        width='11.2466'
        height='11.2468'
        transform='matrix(1 0 0 -1 5.625 16.8711)'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
      <circle
        cx='11.25'
        cy='10'
        r='1.25'
        stroke='currentColor'
        strokeWidth='1.25'
      />
      <path
        d='M14.375 17.5V13.125H11.25H8.125V17.5'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const CurveIllust: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='583'
      height='209'
      viewBox='0 0 583 209'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_617_17729)'>
        <path
          d='M36.6288 348.522L225.634 348.522C157.801 348.055 102.957 293.163 102.957 225.518C102.957 157.583 158.272 102.51 226.506 102.51L723.011 102.506L723.011 -3.16038e-05L226.505 2.71926e-06C101.41 0.000470291 4.41355e-06 100.97 9.85769e-06 225.518C1.18413e-05 270.897 13.4628 313.147 36.6288 348.522Z'
          fill='#CCF88E'
        />
      </g>
      <defs>
        <clipPath id='clip0_617_17729'>
          <rect width='583' height='209' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DotIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      {...props}
    >
      <circle cx='8' cy='8.5' r='3' fill='currentColor' />
    </svg>
  );
};

export const FilterIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path d='M3 4.5H13' stroke='#22272F' strokeLinecap='round' />
      <path d='M3 11.5H13' stroke='#22272F' strokeLinecap='round' />
      <circle cx='5.5' cy='4.5' r='1.5' fill='#22272F' />
      <circle cx='10.5' cy='11.5' r='1.5' fill='#22272F' />
    </svg>
  );
};

export const ManualFilerIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.12509 16.5625H7.50009C7.50009 16.7634 7.59666 16.9521 7.75964 17.0695C7.92262 17.187 8.13214 17.219 8.32273 17.1554L8.12509 16.5625ZM8.12509 11.5108H8.75009C8.75009 11.3777 8.70757 11.248 8.62873 11.1407L8.12509 11.5108ZM11.8751 15.3125L12.0727 15.9054C12.3279 15.8204 12.5001 15.5815 12.5001 15.3125H11.8751ZM11.8751 11.5108L11.3714 11.1407C11.2926 11.248 11.2501 11.3777 11.2501 11.5108H11.8751ZM17.5778 3.75L18.0815 4.12009C18.221 3.93021 18.2419 3.67799 18.1355 3.46776C18.029 3.25752 17.8134 3.125 17.5778 3.125V3.75ZM2.42236 3.75V3.125C2.18673 3.125 1.97113 3.25752 1.86472 3.46776C1.75831 3.67799 1.77919 3.93021 1.91871 4.12009L2.42236 3.75ZM8.75009 16.5625V11.5108H7.50009V16.5625H8.75009ZM11.6774 14.7196L7.92744 15.9696L8.32273 17.1554L12.0727 15.9054L11.6774 14.7196ZM11.2501 11.5108V15.3125H12.5001V11.5108H11.2501ZM12.3787 11.8809L18.0815 4.12009L17.0742 3.37991L11.3714 11.1407L12.3787 11.8809ZM17.5778 3.125H2.42236V4.375H17.5778V3.125ZM1.91871 4.12009L7.62144 11.8809L8.62873 11.1407L2.92601 3.37991L1.91871 4.12009Z'
        fill='currentColor'
      />
    </svg>
  );
};
export const FilterGreyIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        d='M9.75049 19.875H9.00049C9.00049 20.1161 9.11638 20.3425 9.31196 20.4834C9.50754 20.6244 9.75895 20.6628 9.98766 20.5865L9.75049 19.875ZM9.75049 13.813H10.5005C10.5005 13.6532 10.4495 13.4976 10.3549 13.3689L9.75049 13.813ZM14.2505 18.375L14.4877 19.0865C14.7939 18.9844 15.0005 18.6978 15.0005 18.375H14.2505ZM14.2505 13.813L13.6461 13.3689C13.5515 13.4976 13.5005 13.6532 13.5005 13.813H14.2505ZM21.0938 4.5L21.6981 4.9441C21.8656 4.71625 21.8906 4.41359 21.7629 4.16131C21.6352 3.90903 21.3765 3.75 21.0938 3.75V4.5ZM2.90723 4.5V3.75C2.62447 3.75 2.36575 3.90903 2.23806 4.16131C2.11037 4.41359 2.13542 4.71625 2.30285 4.9441L2.90723 4.5ZM10.5005 19.875V13.813H9.00049V19.875H10.5005ZM14.0133 17.6635L9.51332 19.1635L9.98766 20.5865L14.4877 19.0865L14.0133 17.6635ZM13.5005 13.813V18.375H15.0005V13.813H13.5005ZM14.8549 14.2571L21.6981 4.9441L20.4894 4.0559L13.6461 13.3689L14.8549 14.2571ZM21.0938 3.75H2.90723V5.25H21.0938V3.75ZM2.30285 4.9441L9.14611 14.2571L10.3549 13.3689L3.5116 4.0559L2.30285 4.9441Z'
        fill='#565B61'
      />
    </svg>
  );
};
export const NewFilterIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M4.7998 8.6998V7.7998H7.1998V8.6998H4.7998ZM2.9998 6.4498V5.5498H8.9998V6.4498H2.9998ZM1.7998 4.1998V3.2998H10.1998V4.1998H1.7998Z'
        fill='#22272F'
      />
    </svg>
  );
};
export const UploadFileIcon: FC<IconsProps> = (props: IconsProps) => {
  const { className } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      className={className}
      {...props}
    >
      <path
        d='M3 5L1 5V11H11V5L9 5'
        stroke='currentColor'
        strokeWidth='0.999764'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 1.5V7.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 3L6 1L8 3'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const FileIcon: FC<IconsProps> = (props: IconsProps) => {
  const { className } = props;
  return (
    <svg
      width='40'
      height='41'
      viewBox='0 0 40 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <rect x='0.5' y='1' width='39' height='39' rx='3.5' fill='#F6F7F9' />
      <rect x='0.5' y='1' width='39' height='39' rx='3.5' stroke='#ECEFF2' />
      <g clipPath='url(#clip0_1607_21446)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.7493 13.0039C11.3352 13.0039 10.9995 13.3396 10.9995 13.7537V27.2488C10.9995 27.6629 11.3352 27.9986 11.7493 27.9986H25.2221C25.3096 28.0019 25.3953 27.9898 25.4761 27.9642C25.5904 27.9284 25.6956 27.8653 25.7818 27.779C25.8706 27.6902 25.9348 27.5815 25.97 27.4634L28.9548 19.2554C29.0384 19.0255 29.0046 18.7692 28.8642 18.5688C28.7239 18.3684 28.4946 18.2491 28.2499 18.2491H26.0002L25.9999 15.999C25.9998 15.5849 25.6641 15.2493 25.2501 15.2493H20.2496L17.4494 13.1534C17.3197 13.0564 17.1621 13.0039 17.0001 13.0039H11.7493ZM26.0008 22.9895L26.0004 19.7491H27.1791L26.0008 22.9895ZM24.5006 18.9659L24.5003 16.7489H20.0001C19.8381 16.7489 19.6805 16.6965 19.5508 16.5994L16.7505 14.5036H12.4992V26.499H24.4999V18.9991C24.4999 18.988 24.5002 18.9769 24.5006 18.9659Z'
          fill='#B0BBC9'
        />
        <rect
          x='14'
          y='23.5'
          width='7.5'
          height='1.5'
          rx='0.75'
          fill='#B0BBC9'
        />
        <rect
          x='14'
          y='20.5'
          width='4.5'
          height='1.5'
          rx='0.75'
          fill='#B0BBC9'
        />
      </g>
      <defs>
        <clipPath id='clip0_1607_21446'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(8 8.5)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UploadFileIconWithBG: FC<IconsProps> = (props: IconsProps) => {
  const { className } = props;
  return (
    <svg
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <rect
        x='0.5'
        y='0.5'
        width='43'
        height='43'
        rx='3.5'
        fill='#2E3642'
        fillOpacity='0.08'
      />
      <rect x='0.5' y='0.5' width='43' height='43' rx='3.5' stroke='#D5DBE2' />
      <path
        d='M17.5 20.5L14.5 20.5V29.5H29.5V20.5L26.5 20.5'
        stroke='#677990'
        strokeWidth='1.49965'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 15.25V24.25'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19 17.5L22 14.5L25 17.5'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const UploadCloudIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.9995 12.7992C3.11061 12.7992 2.35505 12.4853 1.73283 11.8576C1.11061 11.2298 0.7995 10.4714 0.7995 9.58255C0.7995 8.73811 1.08561 8.00755 1.65783 7.39089C2.23005 6.77422 2.93839 6.44366 3.78283 6.39922C4.04317 5.44644 4.56372 4.67494 5.3445 4.08472C6.12539 3.49439 7.01039 3.19922 7.9995 3.19922C9.18839 3.19922 10.2189 3.57977 11.0912 4.34089C11.9634 5.102 12.3995 6.05477 12.3995 7.19922C13.1773 7.19922 13.8384 7.47144 14.3828 8.01589C14.9273 8.56033 15.1995 9.21589 15.1995 9.98255C15.1995 10.765 14.9273 11.4301 14.3828 11.9777C13.8384 12.5254 13.1773 12.7992 12.3995 12.7992H8.5995C8.2695 12.7992 7.987 12.6817 7.752 12.4467C7.517 12.2117 7.3995 11.9292 7.3995 11.5992V8.69922L6.4495 9.64922L5.5995 8.79922L7.9995 6.39922L10.3995 8.79922L9.5495 9.64922L8.5995 8.69922V11.5992H12.3995C12.8475 11.5992 13.2262 11.4449 13.5355 11.1364C13.8448 10.8277 13.9995 10.4499 13.9995 10.0031C13.9995 9.55605 13.8448 9.177 13.5355 8.86589C13.2262 8.55477 12.8475 8.39922 12.3995 8.39922H11.1995V7.19922C11.1995 6.38811 10.8801 5.71866 10.2412 5.19089C9.60228 4.66311 8.85228 4.39922 7.99117 4.39922C7.13005 4.39922 6.3995 4.71311 5.7995 5.34089C5.1995 5.96866 4.83839 6.72144 4.71617 7.59922H3.9995C3.44717 7.59922 2.97572 7.79477 2.58517 8.18589C2.19472 8.577 1.9995 9.04922 1.9995 9.60255C1.9995 10.1559 2.19472 10.627 2.58517 11.0159C2.97572 11.4048 3.44717 11.5992 3.9995 11.5992H6.1995V12.7992H3.9995Z'
        fill='#526277'
      />
    </svg>
  );
};

export const PinIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      viewBox='0 0 20 21'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.6916 5.38556C10.5652 4.76713 10.7419 4.09906 11.2216 3.61932L16.1714 8.56906C15.6911 9.04931 15.0222 9.22583 14.4032 9.09863L11.256 12.2458C11.6663 13.2926 11.4486 14.5286 10.6027 15.3744L4.41556 9.18722C5.26119 8.34159 6.49689 8.12376 7.54348 8.53373L10.6916 5.38556Z'
        fill='currentColor'
      />
      <path
        d='M11.2216 3.61932L11.6636 3.17737L11.2216 2.73543L10.7797 3.17737L11.2216 3.61932ZM10.6916 5.38556L11.1336 5.8275L11.3713 5.58977L11.304 5.26037L10.6916 5.38556ZM16.1714 8.56906L16.6133 9.011L17.0552 8.56906L16.6133 8.12712L16.1714 8.56906ZM14.4032 9.09863L14.529 8.48643L14.1993 8.41867L13.9613 8.65669L14.4032 9.09863ZM11.256 12.2458L10.814 11.8039L10.5248 12.0931L10.6741 12.4739L11.256 12.2458ZM10.6027 15.3744L10.1608 15.8163L10.6027 16.2583L11.0447 15.8163L10.6027 15.3744ZM4.41556 9.18722L3.97362 8.74528L3.53168 9.18722L3.97362 9.62916L4.41556 9.18722ZM7.54348 8.53373L7.31552 9.11567L7.69627 9.26482L7.98542 8.97567L7.54348 8.53373ZM10.7797 3.17737C10.1453 3.81176 9.91262 4.6954 10.0793 5.51075L11.304 5.26037C11.2178 4.83885 11.3384 4.38637 11.6636 4.06126L10.7797 3.17737ZM16.6133 8.12712L11.6636 3.17737L10.7797 4.06126L15.7294 9.011L16.6133 8.12712ZM14.2774 9.71084C15.0934 9.87854 15.9783 9.64605 16.6133 9.011L15.7294 8.12712C15.404 8.45256 14.9509 8.57312 14.529 8.48643L14.2774 9.71084ZM11.6979 12.6878L14.8451 9.54057L13.9613 8.65669L10.814 11.8039L11.6979 12.6878ZM11.0447 15.8163C12.0724 14.7886 12.3356 13.2874 11.8379 12.0177L10.6741 12.4739C10.997 13.2977 10.8247 14.2686 10.1608 14.9325L11.0447 15.8163ZM3.97362 9.62916L10.1608 15.8163L11.0447 14.9325L4.8575 8.74528L3.97362 9.62916ZM7.77144 7.95178C6.50191 7.45448 5.00114 7.71776 3.97362 8.74528L4.8575 9.62916C5.52125 8.96542 6.49187 8.79303 7.31552 9.11567L7.77144 7.95178ZM10.2497 4.94362L7.10154 8.09178L7.98542 8.97567L11.1336 5.8275L10.2497 4.94362Z'
        fill='currentColor'
      />
      <mask id='path-3-inside-1_6124_102576' fill='white'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.51074 11.3972L8.39451 12.281L4.24051 16.435L4.24086 16.4335L3.09113 16.6996L3.35701 15.5509L7.51074 11.3972Z'
        />
      </mask>
      <path
        d='M8.39451 12.281L9.27839 13.1649L10.1623 12.281L9.27839 11.3971L8.39451 12.281ZM7.51074 11.3972L8.39463 10.5133L7.51074 9.62945L6.62686 10.5133L7.51074 11.3972ZM4.24051 16.435L3.02273 16.153L2.03812 20.4051L5.1244 17.3189L4.24051 16.435ZM4.24086 16.4335L5.45864 16.7155L5.91053 14.7639L3.95897 15.2157L4.24086 16.4335ZM3.09113 16.6996L1.87333 16.4177L1.42163 18.3691L3.37302 17.9174L3.09113 16.6996ZM3.35701 15.5509L2.47313 14.6671L2.21995 14.9202L2.13921 15.2691L3.35701 15.5509ZM9.27839 11.3971L8.39463 10.5133L6.62686 12.2811L7.51063 13.1649L9.27839 11.3971ZM5.1244 17.3189L9.27839 13.1649L7.51063 11.3971L3.35663 15.5511L5.1244 17.3189ZM3.02308 16.1515L3.02273 16.153L5.45829 16.717L5.45864 16.7155L3.02308 16.1515ZM3.37302 17.9174L4.52275 17.6513L3.95897 15.2157L2.80924 15.4818L3.37302 17.9174ZM2.13921 15.2691L1.87333 16.4177L4.30893 16.9815L4.57481 15.8328L2.13921 15.2691ZM6.62686 10.5133L2.47313 14.6671L4.2409 16.4348L8.39463 12.2811L6.62686 10.5133Z'
        fill='currentColor'
        mask='url(#path-3-inside-1_6124_102576)'
      />
    </svg>
  );
};
export const UnpinIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.2234 3.11935L11.6653 2.67741L11.2234 2.23547L10.7814 2.67741L11.2234 3.11935ZM10.6934 4.88584L11.1354 5.32778L11.3732 5.09001L11.3058 4.76057L10.6934 4.88584ZM16.1731 8.0691L16.615 8.51104L17.057 8.0691L16.615 7.62716L16.1731 8.0691ZM14.4052 8.59872L14.5309 7.9865L14.2012 7.91879L13.9632 8.15678L14.4052 8.59872ZM11.2575 11.7464L10.8156 11.3045L10.5264 11.5936L10.6756 11.9744L11.2575 11.7464ZM10.604 14.8743L10.1621 15.3163L10.604 15.7582L11.046 15.3163L10.604 14.8743ZM4.41685 8.68716L3.9749 8.24522L3.53296 8.68716L3.9749 9.1291L4.41685 8.68716ZM7.54538 8.03391L7.31729 8.6158L7.6981 8.76507L7.98732 8.47585L7.54538 8.03391ZM10.7814 2.67741C10.1469 3.31188 9.9143 4.19567 10.0811 5.01111L11.3058 4.76057C11.2195 4.33901 11.3401 3.88645 11.6653 3.5613L10.7814 2.67741ZM16.615 7.62716L11.6653 2.67741L10.7814 3.5613L15.7312 8.51104L16.615 7.62716ZM14.2795 9.21094C15.0954 9.37852 15.9801 9.146 16.615 8.51104L15.7312 7.62716C15.4058 7.95256 14.9527 8.07313 14.5309 7.9865L14.2795 9.21094ZM11.6995 12.1883L14.8471 9.04066L13.9632 8.15678L10.8156 11.3045L11.6995 12.1883ZM11.046 15.3163C12.0735 14.2888 12.3368 12.788 11.8395 11.5184L10.6756 11.9744C10.9982 12.798 10.8258 13.7687 10.1621 14.4324L11.046 15.3163ZM3.9749 9.1291L10.1621 15.3163L11.046 14.4324L4.85879 8.24522L3.9749 9.1291ZM7.77347 7.45201C6.50378 6.95432 5.00263 7.21749 3.9749 8.24522L4.85879 9.1291C5.52266 8.46523 6.49353 8.2929 7.31729 8.6158L7.77347 7.45201ZM10.2515 4.4439L7.10344 7.59196L7.98732 8.47585L11.1354 5.32778L10.2515 4.4439Z'
        fill='#565B61'
      />
      <mask id='path-2-inside-1_2836_4536' fill='white'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.51172 10.8965L8.39549 11.7803L4.24278 15.933L4.24282 15.9328L3.09284 16.199L3.35897 15.0492L7.51172 10.8965Z'
        />
      </mask>
      <path
        d='M8.39549 11.7803L9.27937 12.6641L10.1633 11.7803L9.27937 10.8964L8.39549 11.7803ZM7.51172 10.8965L8.3956 10.0126L7.51172 9.12872L6.62784 10.0126L7.51172 10.8965ZM4.24278 15.933L3.02495 15.6512L2.0414 19.9021L5.12666 16.8168L4.24278 15.933ZM4.24282 15.9328L5.46064 16.2146L5.9121 14.2633L3.96093 14.715L4.24282 15.9328ZM3.09284 16.199L1.87504 15.9171L1.42334 17.8685L3.37473 17.4168L3.09284 16.199ZM3.35897 15.0492L2.47509 14.1653L2.22192 14.4185L2.14117 14.7673L3.35897 15.0492ZM9.27937 10.8964L8.3956 10.0126L6.62784 11.7804L7.5116 12.6641L9.27937 10.8964ZM5.12666 16.8168L9.27937 12.6641L7.5116 10.8964L3.35889 15.0491L5.12666 16.8168ZM3.02499 15.651L3.02495 15.6512L5.4606 16.2147L5.46064 16.2146L3.02499 15.651ZM3.37473 17.4168L4.52471 17.1506L3.96093 14.715L2.81095 14.9812L3.37473 17.4168ZM2.14117 14.7673L1.87504 15.9171L4.31064 16.4809L4.57677 15.3311L2.14117 14.7673ZM6.62784 10.0126L2.47509 14.1653L4.24286 15.9331L8.3956 11.7804L6.62784 10.0126Z'
        fill='#565B61'
        mask='url(#path-2-inside-1_2836_4536)'
      />
    </svg>
  );
};

export const DoubleCheckIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      {...props}
    >
      <path
        d='M2 8L5.375 11L10.5 5.5'
        stroke='#6BBE79'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.375 11L8.04282 11.3737C8.24579 11.5541 8.55567 11.5395 8.7408 11.3409L8.375 11ZM13.8658 5.84086C14.0541 5.63883 14.0429 5.32245 13.8409 5.1342C13.6388 4.94594 13.3224 4.95711 13.1342 5.15914L13.8658 5.84086ZM8.7408 11.3409L13.8658 5.84086L13.1342 5.15914L8.0092 10.6591L8.7408 11.3409ZM7.19907 10.6237L8.04282 11.3737L8.70718 10.6263L7.86343 9.8763L7.19907 10.6237Z'
        fill='#6BBE79'
      />
    </svg>
  );
};

export const ShareAssessmentIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <rect x='9' y='6' width='6.75' height='1.5' rx='0.75' fill='#565B61' />
      <rect x='6' y='6' width='1.5' height='1.5' rx='0.75' fill='#565B61' />
      <rect x='9' y='9' width='6.75' height='1.5' rx='0.75' fill='#565B61' />
      <rect x='6' y='9' width='1.5' height='1.5' rx='0.75' fill='#565B61' />
      <path
        d='M13.5 18.521L20.021 12L22.1946 14.1737L15.891 20.6946H13.5V18.521Z'
        stroke='#565B61'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25V15.4095L19.5 16.9612V19.5H17.0459L15.891 20.6946H13.5V19.5H4.5V4.5H19.5V12.521L20.021 12L21 12.979V3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6397 3.07902 20.4489 3 20.25 3H3.75Z'
        fill='#565B61'
      />
    </svg>
  );
};

export const ImageUploadIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.7508 2.99121C3.33668 2.99121 3.00098 3.32692 3.00098 3.74103V16.1094V16.1223V20.2392C3.00098 20.6533 3.33668 20.989 3.7508 20.989H6.46769C6.48922 20.9899 6.51078 20.9899 6.53232 20.989H20.2495C20.6636 20.989 20.9993 20.6533 20.9993 20.2392V3.74103C20.9993 3.32692 20.6636 2.99121 20.2495 2.99121H3.7508ZM4.50062 19.4893V16.4757L7.18884 14.325L9.66001 16.3021L6.20738 19.4893H4.50062ZM7.65728 12.7792L10.7745 15.2732L14.928 11.4389C15.2166 11.1725 15.6619 11.1739 15.9488 11.4422L19.4997 14.7628V4.49086H4.50062V14.5552L6.72041 12.7792C6.99427 12.5601 7.38342 12.5601 7.65728 12.7792ZM8.41824 19.4893H19.4997V16.816L15.4333 13.0134L8.41824 19.4893ZM14.5827 8.32559C14.5827 7.7272 15.0677 7.24211 15.6661 7.24211C16.2645 7.24211 16.7496 7.7272 16.7496 8.32559C16.7496 8.92398 16.2645 9.40908 15.6661 9.40908C15.0677 9.40908 14.5827 8.92398 14.5827 8.32559ZM15.6661 5.74246C14.2395 5.74246 13.083 6.89897 13.083 8.32559C13.083 9.75222 14.2395 10.9087 15.6661 10.9087C17.0928 10.9087 18.2493 9.75222 18.2493 8.32559C18.2493 6.89897 17.0928 5.74246 15.6661 5.74246Z'
        fill='#565B61'
      />
    </svg>
  );
};

export const BanIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C8.49921 16.25 7.12196 15.721 6.04454 14.8393L14.8393 6.04454C15.721 7.12196 16.25 8.49921 16.25 10ZM5.16066 13.9555L13.9555 5.16066C12.878 4.27898 11.5008 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 11.5008 4.27898 12.878 5.16066 13.9555ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
        fill='white'
      />
    </svg>
  );
};

export const FacebookIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M14.6029 7.49745H11.6654V5.83078C11.6654 4.97078 11.7354 4.42911 12.9679 4.42911H14.5245V1.77911C13.767 1.70078 13.0054 1.66245 12.2429 1.66411C9.98203 1.66411 8.33203 3.04495 8.33203 5.57995V7.49745H5.83203V10.8308L8.33203 10.8299V18.3308H11.6654V10.8283L14.2204 10.8274L14.6029 7.49745Z'
        fill='#565B61'
      />
    </svg>
  );
};

export const InstagramIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M6.66667 2.5C4.36917 2.5 2.5 4.36917 2.5 6.66667V13.3333C2.5 15.6308 4.36917 17.5 6.66667 17.5H13.3333C15.6308 17.5 17.5 15.6308 17.5 13.3333V6.66667C17.5 4.36917 15.6308 2.5 13.3333 2.5H6.66667ZM6.66667 4.16667H13.3333C14.7117 4.16667 15.8333 5.28833 15.8333 6.66667V13.3333C15.8333 14.7117 14.7117 15.8333 13.3333 15.8333H6.66667C5.28833 15.8333 4.16667 14.7117 4.16667 13.3333V6.66667C4.16667 5.28833 5.28833 4.16667 6.66667 4.16667ZM14.1667 5C13.9457 5 13.7337 5.0878 13.5774 5.24408C13.4211 5.40036 13.3333 5.61232 13.3333 5.83333C13.3333 6.05435 13.4211 6.26631 13.5774 6.42259C13.7337 6.57887 13.9457 6.66667 14.1667 6.66667C14.3877 6.66667 14.5996 6.57887 14.7559 6.42259C14.9122 6.26631 15 6.05435 15 5.83333C15 5.61232 14.9122 5.40036 14.7559 5.24408C14.5996 5.0878 14.3877 5 14.1667 5ZM10 5.83333C7.7025 5.83333 5.83333 7.7025 5.83333 10C5.83333 12.2975 7.7025 14.1667 10 14.1667C12.2975 14.1667 14.1667 12.2975 14.1667 10C14.1667 7.7025 12.2975 5.83333 10 5.83333ZM10 7.5C11.3783 7.5 12.5 8.62167 12.5 10C12.5 11.3783 11.3783 12.5 10 12.5C8.62167 12.5 7.5 11.3783 7.5 10C7.5 8.62167 8.62167 7.5 10 7.5Z'
        fill='#565B61'
      />
    </svg>
  );
};
export const LinkedInIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.76172 4C5.78905 4 5 4.80565 5 5.80043C5 6.7952 5.78842 7.6195 6.76042 7.6195C7.73242 7.6195 8.52214 6.7952 8.52214 5.80043C8.52214 4.80634 7.73439 4 6.76172 4ZM15.3568 8.77273C13.8774 8.77273 13.031 9.56395 12.625 10.3508H12.582V8.98446H9.66667V19H12.7044V14.0422C12.7044 12.7358 12.8008 11.4734 14.3815 11.4734C15.9395 11.4734 15.9622 12.9629 15.9622 14.1247V19H18.9961H19V13.4988C19 10.807 18.4341 8.77273 15.3568 8.77273ZM5.24219 8.98446V19H8.28255V8.98446H5.24219Z'
        fill='#526277'
      />
    </svg>
  );
};
export const XIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M1.97266 2.5L7.88574 10.9505L2.28353 17.5H4.48405L8.87044 12.3584L12.4674 17.5H18.2259L12.041 8.64583L17.2835 2.5H15.1172L11.0596 7.23958L7.74902 2.5H1.97266ZM5.17253 4.16667H6.87988L15.0277 15.8333H13.335L5.17253 4.16667Z'
        fill='#565B61'
      />
    </svg>
  );
};
export const LinkIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={className}
    >
      <path
        d='M12.8916 19.1081L19.999 11.9902'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.8231 21.4584L14.7886 24.493C14.3105 24.971 13.743 25.3502 13.1184 25.609C12.4938 25.8677 11.8243 26.0008 11.1482 26.0008C9.78284 26.0008 8.47337 25.4584 7.50788 24.493C6.5424 23.5275 6 22.218 6 20.8526C6 19.4872 6.5424 18.1777 7.50788 17.2123L10.5424 14.1777'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.4575 17.8231L24.492 14.7886C25.4575 13.8231 25.9999 12.5136 25.9999 11.1482C25.9999 9.78284 25.4575 8.47337 24.492 7.50788C23.5265 6.5424 22.217 6 20.8516 6C19.4862 6 18.1768 6.5424 17.2113 7.50788L14.1768 10.5424'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const TableViewIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 3.74982C3 3.33571 3.33571 3 3.74982 3H20.2485C20.6626 3 20.9984 3.33571 20.9984 3.74982V20.248C20.9984 20.6621 20.6626 20.9978 20.2485 20.9978H3.74982C3.33571 20.9978 3 20.6621 3 20.248V3.74982ZM4.49965 4.49965V19.4981H19.4987V4.49965H4.49965Z'
        fill='#565B61'
      />
      <path d='M20.25 9L3.75 9' stroke='#565B61' strokeWidth='1.5' />
      <path d='M12 20.5L12 4' stroke='#565B61' strokeWidth='1.5' />
      <path d='M20.25 15L3.75 15' stroke='#565B61' strokeWidth='1.5' />
    </svg>
  );
};

export const ColumnViewIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 3.74982C3 3.33571 3.33571 3 3.74982 3H20.2485C20.6626 3 20.9984 3.33571 20.9984 3.74982V20.248C20.9984 20.6621 20.6626 20.9978 20.2485 20.9978H3.74982C3.33571 20.9978 3 20.6621 3 20.248V3.74982ZM4.49965 4.49965V19.4981H19.4987V4.49965H4.49965Z'
        fill='#565B61'
      />
      <path d='M9 3.75V20.25' stroke='#565B61' strokeWidth='1.5' />
      <path d='M15 3.75V20.25' stroke='#565B61' strokeWidth='1.5' />
    </svg>
  );
};

export const DoneIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M3 7.9L6.75 11.5L13 5.5'
        stroke='#6BBE79'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const NewDoneIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.75 9.25L8.4375 13.75L16.25 6.25'
        stroke='#217BBB'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const DoneIconGrey: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M3 7.9L6.75 11.5L13 5.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const RejectIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C8.49921 16.25 7.12196 15.721 6.04454 14.8393L14.8393 6.04454C15.721 7.12196 16.25 8.49921 16.25 10ZM5.16066 13.9555L13.9555 5.16066C12.878 4.27898 11.5008 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 11.5008 4.27898 12.878 5.16066 13.9555ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z'
        fill='#EB3E28'
      />
    </svg>
  );
};

export const SwitcherIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={className}
    >
      <rect y='0.00195312' width='24' height='24' rx='12' fill='#F1F1F1' />
      <path
        d='M8 9.90518L10.6667 7.00195V15.7116M16 14.0987L13.3333 17.002V8.29228'
        stroke='#565B61'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const SendIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.8619 14.1404L19.2751 4.11389L3.75073 10.8431L10.8619 14.1404Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinejoin='round'
    />
    <path
      d='M10.8625 14.1411L19.2757 4.11462L15.3445 20.5716L10.8625 14.1411Z'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinejoin='round'
    />
  </svg>
);

export const BulbIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='34'
      viewBox='0 0 34 34'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M17.1278 3.74219C11.9955 3.74219 7.82031 7.91739 7.82031 13.0497C7.82031 16.2654 9.46387 19.2173 12.1553 20.9173V26.6072H22.1003V20.9173C24.7918 19.2173 26.4353 16.2654 26.4353 13.0497C26.4353 7.91739 22.2601 3.74219 17.1278 3.74219ZM20.3548 19.1792L19.7203 19.5141V24.2272H14.5353V19.5144L13.9009 19.1795C11.6185 17.9749 10.2003 15.6262 10.2003 13.05C10.2003 9.23047 13.3083 6.12253 17.1278 6.12253C20.9474 6.12253 24.0553 9.23047 24.0553 13.05C24.0553 15.6259 22.6372 17.9746 20.3548 19.1792ZM14.5353 30.0922H19.7203V27.7122H14.5353V30.0922Z'
        fill='#217BBB'
      />
    </svg>
  );
};
export const TrendUpIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M16 5.68359L10.4615 11.2221L8.15385 8.91436L4 13.0682'
        stroke='#6BBE79'
        strokeWidth='0.923077'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.9999 9.3759V5.68359H12.3076'
        stroke='#6BBE79'
        strokeWidth='0.923077'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const TrendDownIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M4 14.3164L9.53846 8.77794L11.8462 11.0856L16 6.93179'
        stroke='#EB3E28'
        strokeWidth='0.923077'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.00008 10.6241V14.3164H7.69238'
        stroke='#EB3E28'
        strokeWidth='0.923077'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const MediumCheck: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M3.75 9.25L8.4375 13.75L16.25 6.25'
        stroke='#0C151D'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const CheckGreenIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={className}
    >
      <path
        d='M3 7.9L6.75 11.5L13 5.5'
        stroke='#6BBE79'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const CheckGrayIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={className}
    >
      <path
        d='M3 7.9L6.75 11.5L13 5.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const TimerIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={className}
    >
      <g id='Small / Timer'>
        <circle id='Ellipse 777' cx='8' cy='8.5' r='5' stroke='currentColor' />
        <path
          id='Vector 612'
          d='M10.667 2L13.2651 3.5'
          stroke='currentColor'
          strokeLinecap='round'
        />
        <path
          id='Vector 613'
          d='M5.26465 2L2.66657 3.5'
          stroke='currentColor'
          strokeLinecap='round'
        />
        <path
          id='Vector 611'
          d='M8 6V8'
          stroke='currentColor'
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
};

export const RankingBadge: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='28'
      height='33'
      viewBox='0 0 28 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M20.7112 29.1667H17.1559L15.2092 31.5933C14.9159 31.9593 14.3386 31.8807 14.1532 31.4507L10.2959 22.5H18.6092L21.2759 28.2847C21.4659 28.6967 21.1652 29.1667 20.7112 29.1667Z'
        fill='#005C9E'
      />
      <path
        d='M14.4386 22.5L10.5172 31.4587C10.3299 31.8867 9.75456 31.9633 9.46256 31.5987L7.5119 29.1667H3.95656C3.50256 29.1667 3.2019 28.6967 3.3919 28.2847L6.05856 22.5H14.4386Z'
        fill='#217BBB'
      />
      <path
        d='M13.3207 3.51347L14.732 4.3048L16.35 4.3248C17.2907 4.33614 18.158 4.8368 18.638 5.64614L19.464 7.0368L20.8547 7.8628C21.6633 8.34347 22.164 9.21014 22.176 10.1508L22.196 11.7688L22.9873 13.1801C23.4473 14.0008 23.4473 15.0015 22.9873 15.8221L22.196 17.2335L22.176 18.8515C22.1647 19.7921 21.664 20.6595 20.8547 21.1395L19.464 21.9655L18.638 23.3561C18.1573 24.1648 17.2907 24.6655 16.35 24.6775L14.732 24.6975L13.3207 25.4888C12.5 25.9488 11.4993 25.9488 10.6787 25.4888L9.26732 24.6975L7.64932 24.6775C6.70866 24.6661 5.84132 24.1655 5.36132 23.3561L4.53532 21.9655L3.14466 21.1395C2.33599 20.6588 1.83533 19.7921 1.82333 18.8515L1.80333 17.2335L1.01199 15.8221C0.551992 15.0015 0.551992 14.0008 1.01199 13.1801L1.80333 11.7688L1.82333 10.1508C1.83466 9.21014 2.33533 8.3428 3.14466 7.8628L4.53532 7.0368L5.36132 5.64614C5.84199 4.83747 6.70866 4.3368 7.64932 4.3248L9.26732 4.3048L10.6787 3.51347C11.4987 3.0528 12.5 3.0528 13.3207 3.51347Z'
        fill='#69A3CC'
      />
      <path
        d='M12.027 23.2747C16.8135 23.2747 20.6937 19.3945 20.6937 14.6081C20.6937 9.8216 16.8135 5.94141 12.027 5.94141C7.24055 5.94141 3.36035 9.8216 3.36035 14.6081C3.36035 19.3945 7.24055 23.2747 12.027 23.2747Z'
        fill='#D0E3EF'
      />
      <path
        d='M12.5131 18.7419L13.5366 10.4219H14.8543L13.8425 18.7419H12.5131ZM8.16016 16.8402V15.5446H15.7602V16.8402H8.16016ZM9.46604 18.7419L10.4896 10.4219H11.8072L10.7837 18.7419H9.46604ZM8.56016 13.6191V12.3236H16.1484L16.1602 13.6191H8.56016Z'
        fill='#69A3CC'
      />
    </svg>
  );
};

export const EyeHiddenIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='25'
    viewBox='0 0 24 25'
    fill='none'
    {...props}
  >
    <path
      d='M9.87964 10.38C9.58489 10.6547 9.34848 10.9859 9.18451 11.3539C9.02055 11.7218 8.93238 12.1191 8.92527 12.5219C8.91816 12.9247 8.99226 13.3248 9.14315 13.6984C9.29403 14.0719 9.51861 14.4113 9.80348 14.6962C10.0884 14.981 10.4277 15.2056 10.8012 15.3565C11.1748 15.5074 11.5749 15.5815 11.9777 15.5744C12.3805 15.5673 12.7778 15.4791 13.1458 15.3151C13.5138 15.1512 13.845 14.9148 14.1196 14.62'
      stroke='#565B61'
      strokeWidth='1.5'
      strokeMiterlimit='16'
      strokeLinejoin='round'
    />
    <path
      d='M10.5 6.57438C10.8925 6.52558 11.2877 6.50074 11.6832 6.5C18.205 6.5 21 13.0083 21 13.0083C20.5835 13.8982 20.0611 14.7348 19.4441 15.5'
      stroke='#565B61'
      strokeWidth='1.5'
      strokeMiterlimit='16'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.04386 8C5.29934 9.14798 3.9034 10.7248 3 12.5678C3 12.5678 5.63158 18.5 11.7719 18.5C13.4526 18.5043 15.0972 18.0297 16.5 17.1356'
      stroke='#565B61'
      strokeWidth='1.5'
      strokeMiterlimit='16'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.5 5L19.5 20'
      stroke='#565B61'
      strokeWidth='1.5'
      strokeMiterlimit='16'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const EyeIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      d='M3 12C3 12 5.7 6 12 6C18.3 6 21 12 21 12C21 12 18.3 18 12 18C5.7 18 3 12 3 12Z'
      stroke='#565B61'
      strokeWidth='1.5'
      strokeMiterlimit='16'
      strokeLinejoin='round'
    />
    <path
      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
      stroke='#565B61'
      strokeWidth='1.5'
      strokeMiterlimit='16'
      strokeLinejoin='round'
    />
  </svg>
);
export const EyeBlueIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2 8C2 8 3.8 4 8 4C12.2 4 14 8 14 8C14 8 12.2 12 8 12C3.8 12 2 8 2 8Z'
      stroke='#217BBB'
      stroke-miterlimit='16'
      strokeLinejoin='round'
    />
    <path
      d='M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z'
      stroke='#217BBB'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const LocationIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    {...props}
  >
    <path
      d='M13 6.8C13 10.4 8 14 8 14C8 14 3 10.4 3 6.8C3 5.52696 3.52678 4.30606 4.46447 3.40589C5.40215 2.50571 6.67392 2 8 2C9.32608 2 10.5979 2.50571 11.5355 3.40589C12.4732 4.30606 13 5.52696 13 6.8Z'
      stroke='currentColor'
      strokeLinecap='round'
    />
    <path
      d='M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z'
      stroke='currentColor'
      strokeLinecap='round'
    />
  </svg>
);
export const NewLocationIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    {...props}
  >
    <path
      d='M13 6.8C13 10.4 8 14 8 14C8 14 3 10.4 3 6.8C3 5.52696 3.52678 4.30606 4.46447 3.40589C5.40215 2.50571 6.67392 2 8 2C9.32608 2 10.5979 2.50571 11.5355 3.40589C12.4732 4.30606 13 5.52696 13 6.8Z'
      stroke='#8696AA'
      strokeLinecap='round'
    />
    <path
      d='M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z'
      stroke='#8696AA'
      strokeLinecap='round'
    />
  </svg>
);

export const DeleteIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='44'
    height='44'
    viewBox='0 0 44 44'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='0.5' y='0.5' width='43' height='43' rx='3.5' stroke='#D5DBE2' />
    <path
      d='M13 17.5H31'
      stroke='#677990'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 17.5V16C19 15.1716 19.6716 14.5 20.5 14.5H23.5C24.3284 14.5 25 15.1716 25 16V17.5'
      stroke='#677990'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 17.5L16.375 29.5H27.625L28 17.5'
      stroke='#677990'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 20.5V26.5'
      stroke='#677990'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M25 20.5V26.5'
      stroke='#677990'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 20.5V26.5'
      stroke='#677990'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const FilterSalesIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.75 3.75V20.25H20.25'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 12V19.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M13.5 9L13.5 19.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M18 6L18 19.5'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);
export const FilterNewSalesIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='41'
    height='40'
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_15957_112736)'>
      <path
        d='M15.1816 12.5V9.375C15.1816 8.33947 16.0211 7.5 17.0566 7.5H23.3066C24.3422 7.5 25.1816 8.33947 25.1816 9.375V12.5'
        stroke='#217BBB'
        strokeWidth='1.875'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.18164 13.75C5.18164 13.0596 5.74128 12.5 6.43164 12.5H33.9316C34.622 12.5 35.1816 13.0596 35.1816 13.75V31.25C35.1816 31.9404 34.622 32.5 33.9316 32.5H6.43164C5.74129 32.5 5.18164 31.9404 5.18164 31.25V13.75Z'
        fill='#217BBB'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.78101 13.3305L13.5588 22.0805C13.796 22.3473 14.136 22.5 14.4931 22.5H20.1817H25.8704C26.2274 22.5 26.5674 22.3473 26.8046 22.0805L34.5824 13.3305C34.7035 13.1943 34.7878 13.0447 34.839 12.8902C34.6112 12.6499 34.289 12.5 33.9317 12.5H6.43172C6.07447 12.5 5.75222 12.6499 5.52441 12.8902C5.57567 13.0447 5.65995 13.1943 5.78101 13.3305Z'
        fill='#E3EFF6'
      />
    </g>
    <defs>
      <clipPath id='clip0_15957_112736'>
        <rect
          width='40'
          height='40'
          fill='white'
          transform='translate(0.181641)'
        />
      </clipPath>
    </defs>
  </svg>
);
export const FilterAllIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_10066_73087)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.74885 4.50391C3.33473 4.50391 2.99902 4.83961 2.99902 5.25373V18.7488C2.99902 19.1629 3.33473 19.4986 3.74885 19.4986H17.2217C17.3091 19.5019 17.3949 19.4898 17.4757 19.4642C17.5899 19.4284 17.6951 19.3653 17.7813 19.279C17.8701 19.1902 17.9343 19.0815 17.9696 18.9634L20.9543 10.7554C21.0379 10.5255 21.0041 10.2692 20.8637 10.0688C20.7234 9.86844 20.4941 9.74911 20.2494 9.74911H17.9997L17.9994 7.499C17.9993 7.08493 17.6637 6.74928 17.2496 6.74928H12.2491L9.44888 4.65343C9.31919 4.55636 9.16156 4.50391 8.99958 4.50391H3.74885ZM18.0003 14.4895L17.9999 11.2491H19.1787L18.0003 14.4895ZM16.5002 10.4659L16.4999 8.24893H11.9996C11.8376 8.24893 11.68 8.19647 11.5503 8.09941L8.75005 6.00355H4.49867V17.999H16.4994V10.4991C16.4994 10.488 16.4997 10.4769 16.5002 10.4659Z'
        fill='currentColor'
      />
      <rect
        x='6'
        y='15'
        width='7.5'
        height='1.5'
        rx='0.75'
        fill='currentColor'
      />
      <rect
        x='6'
        y='12'
        width='4.5'
        height='1.5'
        rx='0.75'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_10066_73087'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export const FilterNewAllIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='41'
    height='40'
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='6.97754'
      y='6.25'
      width='12.5'
      height='12.5'
      rx='1.25'
      fill='#D0E3EF'
    />
    <rect
      x='21.9775'
      y='6.25'
      width='12.5'
      height='12.5'
      rx='1.25'
      fill='#217BBB'
    />
    <rect
      x='6.97754'
      y='21.25'
      width='12.5'
      height='12.5'
      rx='1.25'
      fill='#217BBB'
    />
    <rect
      x='21.9775'
      y='21.25'
      width='12.5'
      height='12.5'
      rx='1.25'
      fill='#217BBB'
    />
  </svg>
);
export const FilterEngineeringIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.5 3L14.1708 2.66459C14.0438 2.4105 13.7841 2.25 13.5 2.25V3ZM10.5 3V2.25C10.2159 2.25 9.95622 2.4105 9.82918 2.66459L10.5 3ZM14.4556 4.91123L13.7848 5.24664C13.8724 5.42184 14.0251 5.55582 14.2102 5.61993L14.4556 4.91123ZM15.2767 5.25177L14.9487 5.9262C15.125 6.01198 15.3279 6.0253 15.5139 5.96329L15.2767 5.25177ZM17.3032 4.57629L17.8335 4.04596C17.6327 3.84508 17.3355 3.77494 17.066 3.86477L17.3032 4.57629ZM19.4245 6.69761L20.136 6.93478C20.2259 6.66528 20.1557 6.36815 19.9549 6.16728L19.4245 6.69761ZM18.7489 8.72459L18.0374 8.48742C17.9754 8.67339 17.9887 8.87625 18.0744 9.05255L18.7489 8.72459ZM19.0888 9.54438L18.3801 9.78984C18.4442 9.97494 18.5782 10.1276 18.7534 10.2152L19.0888 9.54438ZM21 10.5H21.75C21.75 10.2159 21.5895 9.95622 21.3354 9.82918L21 10.5ZM21 13.5L21.3354 14.1708C21.5895 14.0438 21.75 13.7841 21.75 13.5H21ZM19.0888 14.4556L18.7534 13.7848C18.5782 13.8724 18.4442 14.0251 18.3801 14.2102L19.0888 14.4556ZM18.7483 15.2766L18.0739 14.9485C17.9881 15.1248 17.9748 15.3277 18.0368 15.5138L18.7483 15.2766ZM19.4237 17.3028L19.954 17.8332C20.1549 17.6323 20.2251 17.3352 20.1352 17.0657L19.4237 17.3028ZM17.3024 19.4242L17.0652 20.1357C17.3347 20.2255 17.6318 20.1554 17.8327 19.9545L17.3024 19.4242ZM15.2759 18.7487L15.513 18.0371C15.327 17.9751 15.1242 17.9884 14.9479 18.0742L15.2759 18.7487ZM14.4556 19.0888L14.2102 18.3801C14.0251 18.4442 13.8724 18.5782 13.7848 18.7534L14.4556 19.0888ZM13.5 21V21.75C13.7841 21.75 14.0438 21.5895 14.1708 21.3354L13.5 21ZM10.5 21L9.82918 21.3354C9.95622 21.5895 10.2159 21.75 10.5 21.75V21ZM9.54438 19.0888L10.2152 18.7534C10.1276 18.5782 9.97494 18.4442 9.78985 18.3801L9.54438 19.0888ZM8.72384 18.7485L9.05188 18.0741C8.87556 17.9883 8.67267 17.975 8.48667 18.037L8.72384 18.7485ZM6.69687 19.4242L6.16654 19.9545C6.36742 20.1554 6.66454 20.2255 6.93404 20.1357L6.69687 19.4242ZM4.57555 17.3028L3.86404 17.0657C3.77421 17.3352 3.84435 17.6323 4.04522 17.8332L4.57555 17.3028ZM5.25127 15.2757L5.96278 15.5129C6.02478 15.3269 6.01148 15.124 5.92575 14.9477L5.25127 15.2757ZM4.91123 14.4556L5.61993 14.2102C5.55582 14.0251 5.42185 13.8724 5.24664 13.7848L4.91123 14.4556ZM3 13.5H2.25C2.25 13.7841 2.4105 14.0438 2.66459 14.1708L3 13.5ZM3 10.5L2.66459 9.82918C2.4105 9.95622 2.25 10.2159 2.25 10.5H3ZM4.91123 9.54438L5.24664 10.2152C5.42185 10.1276 5.55582 9.97494 5.61993 9.78984L4.91123 9.54438ZM5.25134 8.72414L5.92582 9.05215C6.01156 8.87584 6.02485 8.67296 5.96286 8.48697L5.25134 8.72414ZM4.57583 6.69761L4.0455 6.16727C3.84463 6.36815 3.77449 6.66527 3.86432 6.93478L4.57583 6.69761ZM6.69715 4.57629L6.93432 3.86477C6.66482 3.77494 6.3677 3.84508 6.16682 4.04595L6.69715 4.57629ZM8.7234 5.2517L8.48623 5.96322C8.67225 6.02522 8.87516 6.01191 9.05148 5.92614L8.7234 5.2517ZM9.54438 4.91123L9.78984 5.61993C9.97494 5.55582 10.1276 5.42185 10.2152 5.24664L9.54438 4.91123ZM13.5 2.25H10.5V3.75H13.5V2.25ZM15.1264 4.57582L14.1708 2.66459L12.8292 3.33541L13.7848 5.24664L15.1264 4.57582ZM15.6048 4.57735C15.3129 4.4353 15.0112 4.30995 14.7011 4.20254L14.2102 5.61993C14.4635 5.70767 14.71 5.81009 14.9487 5.9262L15.6048 4.57735ZM17.066 3.86477L15.0396 4.54026L15.5139 5.96329L17.5404 5.2878L17.066 3.86477ZM19.9549 6.16728L17.8335 4.04596L16.7729 5.10662L18.8942 7.22794L19.9549 6.16728ZM19.4604 8.96176L20.136 6.93478L18.713 6.46043L18.0374 8.48742L19.4604 8.96176ZM19.7975 9.29892C19.6902 8.98934 19.5651 8.68816 19.4234 8.39663L18.0744 9.05255C18.1903 9.29086 18.2925 9.53696 18.3801 9.78984L19.7975 9.29892ZM21.3354 9.82918L19.4242 8.87356L18.7534 10.2152L20.6646 11.1708L21.3354 9.82918ZM21.75 13.5V10.5H20.25V13.5H21.75ZM19.4242 15.1264L21.3354 14.1708L20.6646 12.8292L18.7534 13.7848L19.4242 15.1264ZM19.4227 15.6047C19.5647 15.3127 19.6901 15.0111 19.7975 14.7011L18.3801 14.2102C18.2923 14.4634 18.1899 14.7099 18.0739 14.9485L19.4227 15.6047ZM20.1352 17.0657L19.4598 15.0394L18.0368 15.5138L18.7122 17.54L20.1352 17.0657ZM17.8327 19.9545L19.954 17.8332L18.8934 16.7725L16.7721 18.8938L17.8327 19.9545ZM15.0387 19.4602L17.0652 20.1357L17.5396 18.7127L15.513 18.0371L15.0387 19.4602ZM14.7011 19.7975C15.0108 19.6902 15.3122 19.565 15.6039 19.4231L14.9479 18.0742C14.7094 18.1901 14.4632 18.2924 14.2102 18.3801L14.7011 19.7975ZM14.1708 21.3354L15.1264 19.4242L13.7848 18.7534L12.8292 20.6646L14.1708 21.3354ZM10.5 21.75H13.5V20.25H10.5V21.75ZM8.87356 19.4242L9.82918 21.3354L11.1708 20.6646L10.2152 18.7534L8.87356 19.4242ZM8.39581 19.423C8.68759 19.5649 8.98904 19.6901 9.29892 19.7975L9.78985 18.3801C9.53672 18.2924 9.2904 18.1901 9.05188 18.0741L8.39581 19.423ZM6.93404 20.1357L8.96101 19.46L8.48667 18.037L6.4597 18.7127L6.93404 20.1357ZM4.04522 17.8332L6.16654 19.9545L7.2272 18.8938L5.10588 16.7725L4.04522 17.8332ZM4.53976 15.0385L3.86404 17.0657L5.28707 17.54L5.96278 15.5129L4.53976 15.0385ZM4.20254 14.7011C4.30981 15.0108 4.43497 15.3121 4.57679 15.6037L5.92575 14.9477C5.80982 14.7093 5.70755 14.4631 5.61993 14.2102L4.20254 14.7011ZM2.66459 14.1708L4.57582 15.1264L5.24664 13.7848L3.33541 12.8292L2.66459 14.1708ZM2.25 10.5V13.5H3.75V10.5H2.25ZM4.57582 8.87356L2.66459 9.82918L3.33541 11.1708L5.24664 10.2152L4.57582 8.87356ZM4.57687 8.39614C4.43502 8.68782 4.30983 8.98916 4.20254 9.29892L5.61993 9.78984C5.70757 9.53682 5.80986 9.29058 5.92582 9.05215L4.57687 8.39614ZM3.86432 6.93478L4.53983 8.96131L5.96286 8.48697L5.28734 6.46043L3.86432 6.93478ZM6.16682 4.04595L4.0455 6.16727L5.10616 7.22794L7.22748 5.10662L6.16682 4.04595ZM8.96057 4.54019L6.93432 3.86477L6.45998 5.2878L8.48623 5.96322L8.96057 4.54019ZM9.29892 4.20254C8.98887 4.30993 8.68726 4.43526 8.39533 4.57727L9.05148 5.92614C9.29012 5.81005 9.53658 5.70765 9.78984 5.61993L9.29892 4.20254ZM9.82918 2.66459L8.87356 4.57582L10.2152 5.24664L11.1708 3.33541L9.82918 2.66459Z'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='3.75'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  );
};
export const FilterNewEngineeringIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='41'
      height='40'
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_15957_112739)'>
        <path
          d='M5.63672 11.25H35.6367V32.5C35.6367 33.1904 35.0771 33.75 34.3867 33.75H6.88672C6.19636 33.75 5.63672 33.1904 5.63672 32.5V11.25Z'
          fill='#E3EFF6'
        />
        <path
          d='M15.6367 17.5L10.6367 22.5L15.6367 27.5'
          stroke='#217BBB'
          strokeWidth='1.875'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25.6367 17.5L30.6367 22.5L25.6367 27.5'
          stroke='#217BBB'
          strokeWidth='1.875'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M23.1367 17.5L18.1367 27.5'
          stroke='#217BBB'
          strokeWidth='1.875'
          strokeLinecap='round'
        />
        <path
          d='M5.63672 7.5C5.63672 6.80964 6.19636 6.25 6.88672 6.25H34.3867C35.0771 6.25 35.6367 6.80964 35.6367 7.5V11.25H5.63672V7.5Z'
          fill='#217BBB'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_112739'>
          <rect
            width='40'
            height='40'
            fill='white'
            transform='translate(0.636719)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FilterDesignIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18.8668 2.36682L19.3972 1.83649C19.2565 1.69584 19.0657 1.61682 18.8668 1.61682C18.6679 1.61682 18.4771 1.69584 18.3365 1.83649L18.8668 2.36682ZM21.2308 4.73082L21.7611 5.26115C22.054 4.96825 22.054 4.49338 21.7611 4.20049L21.2308 4.73082ZM11.7773 9.4563L11.247 9.98663C11.3877 10.1273 11.5784 10.2063 11.7773 10.2063C11.9763 10.2063 12.167 10.1273 12.3077 9.98663L11.7773 9.4563ZM9.41052 7.08948L9.94085 6.55915C9.64796 6.26625 9.17309 6.26625 8.88019 6.55915L9.41052 7.08948ZM2.31853 14.1815L1.7882 13.6511C1.49531 13.944 1.49531 14.4189 1.7882 14.7118L2.31853 14.1815ZM9.41052 21.2735L8.88019 21.8038C9.17309 22.0967 9.64796 22.0967 9.94085 21.8038L9.41052 21.2735ZM16.5025 14.1815L17.0328 14.7118C17.3257 14.4189 17.3257 13.944 17.0328 13.6511L16.5025 14.1815ZM14.1413 11.8203L13.611 11.29C13.3181 11.5829 13.3181 12.0577 13.611 12.3506L14.1413 11.8203ZM18.3365 2.89715L20.7005 5.26115L21.7611 4.20049L19.3972 1.83649L18.3365 2.89715ZM12.3077 9.98663L19.3972 2.89715L18.3365 1.83649L11.247 8.92597L12.3077 9.98663ZM8.88019 7.61981L11.247 9.98663L12.3077 8.92597L9.94085 6.55915L8.88019 7.61981ZM2.84886 14.7118L9.94085 7.61981L8.88019 6.55915L1.7882 13.6511L2.84886 14.7118ZM9.94085 20.7431L2.84886 13.6511L1.7882 14.7118L8.88019 21.8038L9.94085 20.7431ZM15.9722 13.6511L8.88019 20.7431L9.94085 21.8038L17.0328 14.7118L15.9722 13.6511ZM13.611 12.3506L15.9722 14.7118L17.0328 13.6511L14.6717 11.29L13.611 12.3506ZM20.7005 4.20049L13.611 11.29L14.6717 12.3506L21.7611 5.26115L20.7005 4.20049Z'
      fill='currentColor'
    />
    <path
      d='M5.86426 10.6406L12.9562 17.7326'
      stroke='currentColor'
      strokeWidth='1.5'
    />
    <path
      d='M4.68208 16.5503L6.45508 14.7773'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M7.04634 18.9175L8.81934 17.1445'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);
export const FilterNewDesignIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='41'
    height='40'
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      width='17.1433'
      height='17.1433'
      rx='1.25'
      transform='matrix(0.882311 0.470666 -0.882311 0.470666 20.2168 18.8633)'
      fill='#E3EFF6'
    />
    <rect
      width='17.1433'
      height='17.1433'
      rx='1.25'
      transform='matrix(0.882311 0.470666 -0.882311 0.470666 20.2168 11.9297)'
      fill='#69A3CC'
    />
    <rect
      width='17.1433'
      height='17.1433'
      rx='1.25'
      transform='matrix(0.882311 0.470666 -0.882311 0.470666 20.2168 5)'
      fill='#217BBB'
    />
  </svg>
);
export const FilterHRIcon: FC<IconsProps> = (props: IconsProps) => (
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
      clipRule='evenodd'
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
export const FilterNewHRIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='41'
    height='40'
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='13.5454' cy='16.5835' r='5.33348' fill='#E3EFF6' />
    <path
      d='M13.5461 23.25C9.5513 23.25 6.24035 26.178 5.64224 30.005C5.53564 30.687 6.10554 31.2502 6.7959 31.2502H20.2963C20.9867 31.2502 21.5566 30.687 21.45 30.005C20.8519 26.178 17.5409 23.25 13.5461 23.25Z'
      fill='#E3EFF6'
    />
    <ellipse
      cx='25.3172'
      cy='14.1666'
      rx='6.81816'
      ry='6.66664'
      fill='#217BBB'
    />
    <path
      d='M25.3181 22.5C20.1017 22.5 15.7975 26.3185 15.1696 31.2526C15.0825 31.9374 15.6505 32.5 16.3408 32.5H34.2953C34.9856 32.5 35.5537 31.9374 35.4665 31.2526C34.8386 26.3185 30.5344 22.5 25.3181 22.5Z'
      fill='#217BBB'
    />
  </svg>
);
export const FilterPersonalityIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle
      cx='8.9788'
      cy='9.2913'
      r='1.79129'
      stroke='currentColor'
      strokeWidth='1.5'
    />
    <path
      d='M16.457 11.0826C17.4463 11.0826 18.2483 10.2806 18.2483 9.29129C18.2483 8.30199 17.4463 7.5 16.457 7.5'
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
export const FilterFinanceIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_10066_73108)'>
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
      <clipPath id='clip0_10066_73108'>
        <rect width='24' height='24' fill='currentColor' />
      </clipPath>
    </defs>
  </svg>
);
export const FilterNewFinanceIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='41'
    height='40'
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M31.7051 21.25C31.7051 23.7223 30.972 26.139 29.5984 28.1946C28.2249 30.2502 26.2727 31.8524 23.9886 32.7985C21.7045 33.7446 19.1912 33.9921 16.7664 33.5098C14.3417 33.0275 12.1144 31.837 10.3662 30.0888C8.61809 28.3407 7.42758 26.1134 6.94526 23.6886C6.46295 21.2639 6.71049 18.7505 7.65658 16.4665C8.60268 14.1824 10.2048 12.2301 12.2605 10.8566C14.3161 9.48311 16.7328 8.75 19.2051 8.75V21.25H31.7051Z'
      fill='#E3EFF6'
    />
    <path
      d='M21.7051 6.25C23.3466 6.25 24.9721 6.57332 26.4886 7.20151C28.0052 7.82969 29.3832 8.75043 30.5439 9.91117C31.7046 11.0719 32.6254 12.4499 33.2536 13.9665C33.8818 15.483 34.2051 17.1085 34.2051 18.75L21.7051 18.75V6.25Z'
      fill='#217BBB'
    />
  </svg>
);
export const FilterCognitiveAbility: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3 7.5H21V19.5H3V4.5H21'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21 12H16.5V15H21'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export const FilterNewCognitiveAbility: FC<IconsProps> = (
  props: IconsProps
) => (
  <svg
    width='41'
    height='40'
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_15957_112760)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.5292 8H22.3185V11.8574C20.7209 11.8574 19.4258 13.1525 19.4258 14.7501C19.4258 16.3477 20.7209 17.6428 22.3185 17.6428V21.4992H26.1756C26.1758 23.0966 27.4708 24.3916 29.0683 24.3916C30.6659 24.3916 31.961 23.0965 31.961 21.4989C31.961 19.9013 30.6659 18.6062 29.0684 18.6062C29.0684 18.6062 29.0684 18.6062 29.0684 18.6062C30.666 18.6062 31.9611 19.9013 31.9611 21.4989V21.4992H35.8176V9.28841C35.8176 8.57684 35.2408 8 34.5292 8Z'
        fill='#217BBB'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.3185 34.998H34.5292C35.2408 34.998 35.8176 34.4212 35.8176 33.7096V21.4989H31.9612V21.4989C31.9612 23.0965 30.6661 24.3916 29.0686 24.3916C27.471 24.3916 26.1759 23.0965 26.1759 21.4989V21.4989H22.3185V25.3551C20.7209 25.3551 19.4258 26.6502 19.4258 28.2478C19.4258 29.8454 20.7209 31.1405 22.3185 31.1405V34.998Z'
        fill='#E3EFF6'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.8129 5.36565L10.0138 4.71551C9.33944 4.55887 8.66579 4.97857 8.50915 5.65293L5.82123 17.2253L18.6146 20.1968L19.4595 16.559C19.2654 16.5554 19.0687 16.5316 18.872 16.4859C17.3579 16.1342 16.4156 14.6217 16.7673 13.1077C17.119 11.5936 18.6314 10.6513 20.1455 11.003C20.3422 11.0487 20.5293 11.114 20.7051 11.1963L21.5861 7.40343L18.0663 6.58588C17.9906 5.37694 17.134 4.30967 15.8935 4.02156C14.6531 3.73344 13.4137 4.31386 12.8129 5.36565Z'
        fill='#E3EFF6'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.81836 33.7096C8.81836 34.4212 9.3952 34.998 10.1068 34.998L22.3175 34.998L22.3175 31.1406C20.7204 31.1401 19.4258 29.8452 19.4258 28.2479C19.4258 26.6507 20.7204 25.3558 22.3175 25.3553L22.3175 21.4989L10.1068 21.4989C9.3952 21.4989 8.81836 22.0757 8.81836 22.7873L8.81836 33.7096Z'
        fill='#217BBB'
      />
    </g>
    <defs>
      <clipPath id='clip0_15957_112760'>
        <rect
          width='40'
          height='40'
          fill='white'
          transform='translate(0.818359)'
        />
      </clipPath>
    </defs>
  </svg>
);
export const FilterAbout: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='41'
    height='40'
    viewBox='0 0 41 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='6.27246' y='9' width='28' height='19' rx='1.25' fill='#E3EFF6' />
    <circle cx='14.7725' cy='18.5' r='1.5' fill='#217BBB' />
    <circle cx='20.7725' cy='18.5' r='1.5' fill='#217BBB' />
    <circle cx='26.7725' cy='18.5' r='1.5' fill='#217BBB' />
    <path
      d='M22.2725 31.2453V27H30.2725L24.3456 32.186C23.5374 32.8932 22.2725 32.3192 22.2725 31.2453Z'
      fill='#E3EFF6'
    />
  </svg>
);

export const FilterMarketingIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_2518_61947)'>
      <mask id='path-1-inside-1_2518_61947' fill='white'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.50002 3C3.67159 3 3.00002 3.67157 3.00002 4.5V8.98948L3 9C3 10.6569 4.34315 12 6 12C7.65685 12 9 10.6569 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 10.6569 16.3431 12 18 12C19.6569 12 21 10.6569 21 9L21 9V4.5C21 3.67157 20.3284 3 19.5 3H4.50002Z'
        />
      </mask>
      <path
        d='M3.00002 8.98948L4.50002 8.99205V8.98948H3.00002ZM3 9L1.5 8.99743V9H3ZM10.5 9C10.5 8.17158 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17158 7.5 9H10.5ZM16.5 9C16.5 8.17158 15.8284 7.5 15 7.5C14.1716 7.5 13.5 8.17158 13.5 9H16.5ZM21 9L20.6362 7.54479C19.9684 7.71173 19.5 8.3117 19.5 9H21ZM21 9L21.3638 10.4552C22.0316 10.2883 22.5 9.6883 22.5 9H21ZM4.50002 4.5L4.50002 4.5V1.5C2.84316 1.5 1.50002 2.84315 1.50002 4.5H4.50002ZM4.50002 8.98948V4.5H1.50002V8.98948H4.50002ZM4.5 9.00258L4.50002 8.99205L1.50002 8.9869L1.5 8.99743L4.5 9.00258ZM6 10.5C5.17157 10.5 4.5 9.82843 4.5 9H1.5C1.5 11.4853 3.51472 13.5 6 13.5V10.5ZM7.5 9C7.5 9.82843 6.82843 10.5 6 10.5V13.5C8.48528 13.5 10.5 11.4853 10.5 9H7.5ZM12 10.5C11.1716 10.5 10.5 9.82843 10.5 9H7.5C7.5 11.4853 9.51472 13.5 12 13.5V10.5ZM13.5 9C13.5 9.82843 12.8284 10.5 12 10.5V13.5C14.4853 13.5 16.5 11.4853 16.5 9H13.5ZM18 10.5C17.1716 10.5 16.5 9.82843 16.5 9H13.5C13.5 11.4853 15.5147 13.5 18 13.5V10.5ZM19.5 9C19.5 9.82843 18.8284 10.5 18 10.5V13.5C20.4853 13.5 22.5 11.4853 22.5 9H19.5ZM20.6362 7.54479L20.6362 7.54479L21.3638 10.4552L21.3638 10.4552L20.6362 7.54479ZM19.5 4.5V9H22.5V4.5H19.5ZM19.5 4.5L19.5 4.5H22.5C22.5 2.84315 21.1569 1.5 19.5 1.5V4.5ZM4.50002 4.5H19.5V1.5H4.50002V4.5Z'
        fill='currentColor'
        mask='url(#path-1-inside-1_2518_61947)'
      />
      <path
        d='M3.75 3.75L20.25 3.75018V8.25018H3.75V3.75Z'
        stroke='currentColor'
        strokeWidth='1.49965'
        strokeLinejoin='round'
      />
      <path
        d='M5.25 16.5H18.75'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.25 11.2496V20.2495H18.75V10.5391'
        stroke='currentColor'
        strokeWidth='1.49965'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_2518_61947'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
export const FilterNewMarketingIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_16679_62165)'>
      <rect
        x='6.25'
        y='16.25'
        width='7.5'
        height='17.5'
        rx='1.25'
        fill='#E3EFF6'
      />
      <rect
        x='16.25'
        y='11.25'
        width='7.5'
        height='22.5'
        rx='1.25'
        fill='#69A3CC'
      />
      <rect
        x='26.25'
        y='6.25'
        width='7.5'
        height='27.5'
        rx='1.25'
        fill='#217BBB'
      />
    </g>
    <defs>
      <clipPath id='clip0_16679_62165'>
        <rect width='40' height='40' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const FilterManagementIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle
        cx='8.9788'
        cy='9.2913'
        r='1.79129'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M16.457 11.0826C17.4463 11.0826 18.2483 10.2806 18.2483 9.29129C18.2483 8.30199 17.4463 7.5 16.457 7.5'
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
};

export const FilterNewManagementIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='41'
      height='40'
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_15957_112754)'>
        <rect
          x='5.90918'
          y='6.25'
          width='18.75'
          height='27.5'
          rx='1.25'
          fill='#217BBB'
        />
        <rect
          x='8.40918'
          y='8.75'
          width='6.25'
          height='5'
          rx='1.25'
          fill='#F5F8FB'
        />
        <rect
          x='8.40918'
          y='15'
          width='6.25'
          height='5'
          rx='1.25'
          fill='#F5F8FB'
        />
        <rect
          x='8.40918'
          y='21.25'
          width='6.25'
          height='5'
          rx='1.25'
          fill='#F5F8FB'
        />
        <rect
          x='15.9092'
          y='8.75'
          width='6.25'
          height='5'
          rx='1.25'
          fill='#F5F8FB'
        />
        <rect
          x='15.9092'
          y='15'
          width='6.25'
          height='5'
          rx='1.25'
          fill='#F5F8FB'
        />
        <rect
          x='15.9092'
          y='21.25'
          width='6.25'
          height='5'
          rx='1.25'
          fill='#F5F8FB'
        />
        <rect
          x='19.6592'
          y='13.75'
          width='16.25'
          height='20'
          rx='1.25'
          fill='#69A3CC'
        />
        <rect
          x='22.1592'
          y='16.25'
          width='11.25'
          height='3.75'
          rx='1.25'
          fill='#F5F8FB'
        />
        <rect
          x='22.1592'
          y='21.25'
          width='11.25'
          height='3.75'
          rx='1.25'
          fill='#F5F8FB'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_112754'>
          <rect
            width='40'
            height='40'
            fill='white'
            transform='translate(0.90918)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HardwareTechIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width={48}
      height={48}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21 6H27L28.9112 9.82247C29.4745 10.0176 30.0226 10.2453 30.5532 10.5034L34.6057 9.15257L38.8483 13.3952L37.4973 17.4483C37.7551 17.9784 37.9826 18.526 38.1775 19.0888L42 21V27L38.1775 28.9112C37.9824 29.4745 37.7547 30.0226 37.4966 30.5532L38.8474 34.6057L34.6048 38.8483L30.5517 37.4973C30.0216 37.7551 29.474 37.9826 28.9112 38.1775L27 42H21L19.0888 38.1775C18.5256 37.9825 17.9777 37.7548 17.4473 37.4969L13.3929 38.8483L9.15023 34.6057L10.502 30.5503C10.2445 30.0206 10.0172 29.4735 9.82247 28.9112L6 27V21L9.82247 19.0888C10.0174 18.526 10.2449 17.9784 10.5027 17.4483L9.15166 13.3952L13.3943 9.15257L17.4468 10.5034C17.9774 10.2453 18.5255 10.0176 19.0888 9.82247L21 6Z'
        fill='#217BBB'
      />
      <circle
        cx={24}
        cy={24}
        r={10}
        fill='#F5F8FB'
        stroke='#F5F8FB'
        strokeWidth={2}
      />
      <path
        d='M22.6116 20.7174C22.7273 20.8354 22.7921 20.9941 22.7921 21.1594C22.7921 21.3246 22.7273 21.4833 22.6116 21.6014L21.6014 22.6116C21.4833 22.7273 21.3246 22.7921 21.1594 22.7921C20.9941 22.7921 20.8354 22.7273 20.7174 22.6116L18.3369 20.2312C18.0195 20.9328 17.9233 21.7145 18.0614 22.4722C18.1994 23.2298 18.5651 23.9274 19.1096 24.4719C19.6542 25.0165 20.3518 25.3822 21.1094 25.5202C21.867 25.6582 22.6488 25.5621 23.3504 25.2446L27.7134 29.6077C27.9646 29.8589 28.3053 30 28.6606 30C29.0158 30 29.3565 29.8589 29.6077 29.6077C29.8589 29.3565 30 29.0158 30 28.6606C30 28.3053 29.8589 27.9646 29.6077 27.7134L25.2446 23.3504C25.5621 22.6488 25.6582 21.867 25.5202 21.1094C25.3822 20.3518 25.0165 19.6542 24.4719 19.1096C23.9274 18.5651 23.2298 18.1994 22.4722 18.0614C21.7145 17.9233 20.9328 18.0195 20.2312 18.3369L22.6116 20.7174Z'
        fill='#217BBB'
      />
    </svg>
  );
};
export const FilterCultureFitIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='41'
      height='40'
      viewBox='0 0 41 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_15957_112757)'>
        <circle cx='13.3643' cy='24' r='3' fill='#E3EFF6' />
        <path
          d='M13.3643 28C10.4761 28 8.06462 30.0406 7.49283 32.7586C7.35071 33.4342 7.9239 34 8.61426 34H18.1143C18.8046 34 19.3778 33.4342 19.2357 32.7586C18.6639 30.0406 16.2524 28 13.3643 28Z'
          fill='#E3EFF6'
        />
        <circle cx='27.3643' cy='24' r='3' fill='#E3EFF6' />
        <path
          d='M27.3643 28C24.4761 28 22.0646 30.0406 21.4928 32.7586C21.3507 33.4342 21.9239 34 22.6143 34H32.1143C32.8046 34 33.3778 33.4342 33.2357 32.7586C32.6639 30.0406 30.2524 28 27.3643 28Z'
          fill='#E3EFF6'
        />
        <circle cx='20.3643' cy='9' r='3' fill='#217BBB' />
        <path
          d='M20.3643 13C17.4761 13 15.0646 15.0406 14.4928 17.7586C14.3507 18.4342 14.9239 19 15.6143 19H25.1143C25.8046 19 26.3778 18.4342 26.2357 17.7586C25.6639 15.0406 23.2524 13 20.3643 13Z'
          fill='#217BBB'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_112757'>
          <rect
            width='40'
            height='40'
            fill='white'
            transform='translate(0.364258)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const PuzzleIcon: FC<IconsProps> = (props: IconsProps) => {
  const { className } = props;
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='inherit'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_15957_109274)'>
        <path
          d='M6.00158 20.2487C5.80266 20.2487 5.6119 20.1696 5.47125 20.029C5.33059 19.8883 5.25158 19.6976 5.25158 19.4987V15.4965C4.85148 15.6858 4.41001 15.7708 3.96822 15.7437C3.52643 15.7166 3.09866 15.5783 2.7247 15.3415C2.35073 15.1047 2.04271 14.7772 1.82927 14.3895C1.61583 14.0017 1.50391 13.5663 1.50391 13.1237C1.50391 12.681 1.61583 12.2456 1.82927 11.8578C2.04271 11.4701 2.35073 11.1426 2.7247 10.9058C3.09866 10.669 3.52643 10.5307 3.96822 10.5036C4.41001 10.4765 4.85148 10.5615 5.25158 10.7508V6.74866C5.25158 6.54975 5.33059 6.35898 5.47125 6.21833C5.6119 6.07768 5.80266 5.99866 6.00158 5.99866H10.3788C10.1893 5.59856 10.104 5.15702 10.131 4.71513C10.1579 4.27324 10.2962 3.84535 10.533 3.47125C10.7697 3.09716 11.0972 2.78902 11.4851 2.57549C11.8729 2.36197 12.3084 2.25 12.7511 2.25C13.1938 2.25 13.6293 2.36197 14.0172 2.57549C14.405 2.78902 14.7325 3.09716 14.9692 3.47125C15.206 3.84535 15.3443 4.27324 15.3712 4.71513C15.3982 5.15702 15.313 5.59856 15.1235 5.99866H19.5016C19.7005 5.99866 19.8913 6.07768 20.0319 6.21833C20.1726 6.35898 20.2516 6.54975 20.2516 6.74866V10.7508C19.8515 10.5615 19.41 10.4765 18.9682 10.5036C18.5264 10.5307 18.0987 10.669 17.7247 10.9058C17.3507 11.1426 17.0427 11.4701 16.8293 11.8578C16.6158 12.2456 16.5039 12.681 16.5039 13.1237C16.5039 13.5663 16.6158 14.0017 16.8293 14.3895C17.0427 14.7772 17.3507 15.1047 17.7247 15.3415C18.0987 15.5783 18.5264 15.7166 18.9682 15.7437C19.41 15.7708 19.8515 15.6858 20.2516 15.4965V19.4987C20.2516 19.6976 20.1726 19.8883 20.0319 20.029C19.8913 20.1696 19.7005 20.2487 19.5016 20.2487H6.00158Z'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_109274'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
export const TranslateIcon: FC<IconsProps> = (props: IconsProps) => {
  const { className } = props;
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='inherit'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_15957_109291)'>
        <path
          d='M22.5 20.25L17.25 9.75L12 20.25'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.5 17.25H21'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M9 3V5.25'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3 5.25H15'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 5.25C12 7.63695 11.0518 9.92613 9.36396 11.614C7.67613 13.3018 5.38695 14.25 3 14.25'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6.51172 8.25C7.13221 10.005 8.28162 11.5245 9.80163 12.599C11.3216 13.6736 13.1374 14.2504 14.9989 14.25'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_15957_109291'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
export const SubtractIcon: FC<IconsProps> = (props: IconsProps) => {
  const { className } = props;
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='inherit'
      stroke='inherit'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M10.0024 1L10.7523 0.986766C10.7451 0.577775 10.4115 0.25 10.0024 0.25V1ZM19 9.99843H19.75C19.75 9.5894 19.4223 9.2558 19.0133 9.24855L19 9.99843ZM19 10.0015L19.0133 10.7514C19.4223 10.7441 19.75 10.4105 19.75 10.0015H19ZM10.0024 19V19.75C10.4115 19.75 10.7451 19.4222 10.7523 19.0132L10.0024 19ZM10.0001 19L9.25021 19.0132C9.25742 19.4222 9.59104 19.75 10.0001 19.75V19ZM1 10.0014H0.25C0.25 10.4105 0.577855 10.7442 0.986898 10.7513L1 10.0014ZM1 9.99847L0.986899 9.24859C0.577855 9.25573 0.25 9.58937 0.25 9.99847H1ZM10.0001 1V0.25C9.59104 0.25 9.25743 0.577775 9.25021 0.986766L10.0001 1ZM9.25255 1.01323C9.34669 6.34741 13.6526 10.6537 18.9867 10.7483L19.0133 9.24855C14.4869 9.16824 10.8322 5.51328 10.7523 0.986766L9.25255 1.01323ZM18.25 9.99843V10.0015H19.75V9.99843H18.25ZM10.7523 19.0132C10.8322 14.4867 14.4869 10.8317 19.0133 10.7514L18.9867 9.25159C13.6526 9.34622 9.34663 13.6525 9.25255 18.9868L10.7523 19.0132ZM10.0024 18.25H10.0001V19.75H10.0024V18.25ZM0.986898 10.7513C5.51442 10.8304 9.17036 14.4859 9.25021 19.0132L10.75 18.9868C10.6559 13.6516 6.34845 9.34476 1.0131 9.25154L0.986898 10.7513ZM1.75 10.0014V9.99847H0.25V10.0014H1.75ZM1.0131 10.7484C6.34841 10.6551 10.6558 6.34832 10.75 1.01323L9.25021 0.986766C9.17031 5.51406 5.51439 9.16949 0.986899 9.24859L1.0131 10.7484ZM10.0001 1.75H10.0024V0.25H10.0001V1.75Z'
        fill='inherit'
        stroke='inherit'
      />
    </svg>
  );
};

export const ActiveRecruiterIcon: FC<IconsProps> = ({
  className,
}: IconsProps) => {
  /** props */

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      className={className}
    >
      <path d='M2 9L9.2 1.5L8.6 7L14 8L6.8 15.5L7.4 10L2 9Z' fill='#6BBE79' />
    </svg>
  );
};

export const PolicyIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='11'
    height='13'
    viewBox='0 0 11 13'
    fill='none'
    {...props}
  >
    <path
      d='M6.96761 1L1.40909 1C1.30059 1 1.19654 1.05268 1.11982 1.14645C1.0431 1.24022 0.999999 1.36739 0.999999 1.5L1 11.5C1 11.6326 1.0431 11.7598 1.11982 11.8536C1.19654 11.9473 1.30059 12 1.40909 12L9.59091 12C9.6994 12 9.80346 11.9473 9.88018 11.8536C9.9569 11.7598 10 11.6326 10 11.5L10 4.70625C10.0002 4.64133 9.98989 4.57699 9.96971 4.51693C9.94953 4.45688 9.91985 4.40227 9.88238 4.35625L7.25398 1.14375C7.21632 1.09796 7.17164 1.06169 7.12251 1.03702C7.07337 1.01235 7.02073 0.999774 6.96761 1V1Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.96456 4.5L7.13672 4.5L7.13672 1.04375'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect
      x='3'
      y='6'
      width='1.25'
      height='1.25'
      rx='0.625'
      fill='currentColor'
    />
    <rect
      x='4.75'
      y='6.125'
      width='3'
      height='1'
      rx='0.5'
      fill='currentColor'
    />
    <rect
      x='3'
      y='8'
      width='1.25'
      height='1.25'
      rx='0.625'
      fill='currentColor'
    />
    <rect
      x='4.75'
      y='8.125'
      width='4'
      height='1'
      rx='0.5'
      fill='currentColor'
    />
  </svg>
);

export const PlusRoundedIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='37'
    height='36'
    viewBox='0 0 37 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_b_16438_38779)'>
      <path
        d='M0.666016 18C0.666016 8.05888 8.72489 0 18.666 0C28.6071 0 36.666 8.05888 36.666 18C36.666 27.9411 28.6071 36 18.666 36C8.72489 36 0.666016 27.9411 0.666016 18Z'
        fill='white'
        fillOpacity='0.32'
      />
      <path
        d='M1.16602 18C1.16602 8.33502 9.00103 0.5 18.666 0.5C28.331 0.5 36.166 8.33502 36.166 18C36.166 27.665 28.331 35.5 18.666 35.5C9.00103 35.5 1.16602 27.665 1.16602 18Z'
        stroke='white'
        stroke-opacity='0.4'
      />
      <path
        d='M11.666 18H25.666'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M18.666 25L18.666 11'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </g>
    <defs>
      <filter
        id='filter0_b_16438_38779'
        x='-39.334'
        y='-40'
        width='116'
        height='116'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='20' />
        <feComposite
          in2='SourceAlpha'
          operator='in'
          result='effect1_backgroundBlur_16438_38779'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_backgroundBlur_16438_38779'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export const ArrowDownRoundedIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='28' height='28' rx='14' fill='#ECEFF2' />
    <path
      d='M20.25 17.125L14 10.875L7.75 17.125'
      stroke='#526277'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export const CheckRoundedIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='36'
    height='36'
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#filter0_b_16886_53504)'>
      <path
        d='M0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18Z'
        fill='white'
      />
      <path
        d='M0.5 18C0.5 8.33502 8.33502 0.5 18 0.5C27.665 0.5 35.5 8.33502 35.5 18C35.5 27.665 27.665 35.5 18 35.5C8.33502 35.5 0.5 27.665 0.5 18Z'
        stroke='white'
        stroke-opacity='0.4'
      />
      <path
        d='M10.5 17.1L16.125 22.5L25.5 13.5'
        stroke='#217BBB'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <filter
        id='filter0_b_16886_53504'
        x='-40'
        y='-40'
        width='116'
        height='116'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation='20' />
        <feComposite
          in2='SourceAlpha'
          operator='in'
          result='effect1_backgroundBlur_16886_53504'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_backgroundBlur_16886_53504'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export const CloseRoundedIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='28' height='28' rx='14' fill='#ECEFF2' />
    <path
      d='M8.69531 8.69629L19.3019 19.3029'
      stroke='#526277'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M8.69531 19.3037L19.3019 8.69711'
      stroke='#526277'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);
export const GlobeIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='0.5' y='0.5' width='39' height='39' rx='19.5' stroke='#E5E5E5' />
    <g clipPath='url(#clip0_16819_20605)'>
      <path
        d='M20.0003 8.92188C13.8876 8.92188 8.92188 13.8876 8.92188 20.0003C8.92188 26.1131 13.8876 31.0788 20.0003 31.0788C26.1131 31.0788 31.0788 26.1131 31.0788 20.0003C31.0788 13.8876 26.1131 8.92188 20.0003 8.92188ZM19.5203 9.93813V14.7063C18.2879 14.6772 17.1162 14.5394 16.0356 14.3134C16.2259 13.737 16.4421 13.2014 16.6825 12.7206C17.4759 11.1338 18.4822 10.168 19.5203 9.93813ZM20.4803 9.93813C21.5184 10.168 22.5247 11.1338 23.3181 12.7206C23.5593 13.2029 23.7762 13.7405 23.9669 14.3191C22.8876 14.5427 21.7143 14.6778 20.4803 14.7063V9.93813ZM17.2028 10.2756C16.6818 10.8214 16.2173 11.5042 15.8238 12.2913C15.5495 12.8397 15.309 13.4448 15.0991 14.0903C14.1568 13.8363 13.3046 13.5166 12.5688 13.1453C13.8071 11.8032 15.3976 10.793 17.2028 10.2756ZM22.7978 10.2756C24.6013 10.7925 26.1903 11.8014 27.4281 13.1416C26.7032 13.5197 25.8519 13.8429 24.9044 14.0978C24.6939 13.4495 24.4522 12.8418 24.1769 12.2913C23.7834 11.5042 23.3188 10.8214 22.7978 10.2756ZM28.0563 13.8916C29.2549 15.4707 30.0081 17.4067 30.1066 19.5203H25.7669C25.7318 17.9088 25.5259 16.3873 25.1734 15.0241C26.2505 14.7327 27.2212 14.3509 28.0563 13.8916ZM11.9388 13.8991C12.7828 14.3472 13.7552 14.7245 14.8291 15.0156C14.4753 16.381 14.2689 17.9055 14.2338 19.5203H9.89406C9.99235 17.41 10.7435 15.4768 11.9388 13.8991ZM15.7647 15.2416C16.9322 15.49 18.1941 15.6379 19.5203 15.6672V19.5203H15.1938C15.2295 17.9782 15.4311 16.5262 15.7647 15.2416ZM24.2378 15.2481C24.5704 16.5312 24.7712 17.9809 24.8069 19.5203H20.4803V15.6672C21.8073 15.6387 23.0706 15.4942 24.2378 15.2481ZM9.89406 20.4803H14.2338C14.2688 22.0918 14.4748 23.6133 14.8272 24.9766C13.7502 25.2679 12.7794 25.6497 11.9444 26.1091C10.7458 24.53 9.99251 22.594 9.89406 20.4803ZM15.1938 20.4803H19.5203V24.3334C18.1934 24.3619 16.93 24.5064 15.7628 24.7525C15.4302 23.4695 15.2294 22.0198 15.1938 20.4803ZM20.4803 20.4803H24.8069C24.7712 22.0224 24.5696 23.4744 24.2359 24.7591C23.0684 24.5106 21.8065 24.3627 20.4803 24.3334V20.4803ZM25.7669 20.4803H30.1066C30.0083 22.5906 29.2572 24.5238 28.0619 26.1016C27.2178 25.6534 26.2454 25.2761 25.1716 24.985C25.5253 23.6197 25.7318 22.0951 25.7669 20.4803ZM19.5203 25.2944V30.0625C18.4822 29.8326 17.4759 28.8668 16.6825 27.28C16.4414 26.7977 16.2245 26.2601 16.0338 25.6816C17.113 25.4579 18.2863 25.3229 19.5203 25.2944ZM20.4803 25.2944C21.7127 25.3235 22.8844 25.4613 23.965 25.6872C23.7747 26.2636 23.5585 26.7992 23.3181 27.28C22.5247 28.8668 21.5184 29.8326 20.4803 30.0625V25.2944ZM15.0963 25.9028C15.3067 26.5512 15.5485 27.1588 15.8238 27.7094C16.2173 28.4964 16.6818 29.1792 17.2028 29.725C15.3994 29.2082 13.8104 28.1992 12.5725 26.8591C13.2975 26.481 14.1487 26.1577 15.0963 25.9028ZM24.9016 25.9103C25.8439 26.1643 26.696 26.484 27.4319 26.8553C26.1935 28.1974 24.603 29.2077 22.7978 29.725C23.3188 29.1792 23.7834 28.4964 24.1769 27.7094C24.4511 27.1609 24.6917 26.5558 24.9016 25.9103Z'
        fill='#565B61'
      />
    </g>
    <defs>
      <clipPath id='clip0_16819_20605'>
        <rect width='24' height='24' fill='white' transform='translate(8 8)' />
      </clipPath>
    </defs>
  </svg>
);
export const TasksIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9.96761 3L4.40909 3C4.30059 3 4.19654 3.05268 4.11982 3.14645C4.0431 3.24022 4 3.36739 4 3.5L4 13.5C4 13.6326 4.0431 13.7598 4.11982 13.8536C4.19654 13.9473 4.30059 14 4.40909 14L12.5909 14C12.6994 14 12.8035 13.9473 12.8802 13.8536C12.9569 13.7598 13 13.6326 13 13.5L13 6.70625C13.0002 6.64133 12.9899 6.57699 12.9697 6.51693C12.9495 6.45688 12.9199 6.40227 12.8824 6.35625L10.254 3.14375C10.2163 3.09796 10.1716 3.06169 10.1225 3.03702C10.0734 3.01235 10.0207 2.99977 9.96761 3V3Z'
      stroke='#526277'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.9646 6.5L10.1367 6.5L10.1367 3.04375'
      stroke='#526277'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect x='6' y='8' width='1.25' height='1.25' rx='0.625' fill='#526277' />
    <rect x='7.75' y='8.125' width='3' height='1' rx='0.5' fill='#526277' />
    <rect x='6' y='10' width='1.25' height='1.25' rx='0.625' fill='#526277' />
    <rect x='7.75' y='10.125' width='4' height='1' rx='0.5' fill='#526277' />
  </svg>
);

export const PaymentIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.7605 8.55234C11.0714 8.14827 10.9959 7.56869 10.5918 7.25781C10.1877 6.94693 9.60814 7.02249 9.29727 7.42656C8.98639 7.83064 9.06194 8.41022 9.46602 8.72109C9.87009 9.03197 10.4497 8.95642 10.7605 8.55234Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.33984 10.1836L8.34266 10.1799M11.7172 5.79375L11.72 5.79009'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.84965 4.47497L6.90014 2.93865L1.04297 10.3711L5.77271 14.0984L7.02689 12.5091'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect
      x='4.64062'
      y='9.93164'
      width='9.46296'
      height='6.02188'
      transform='rotate(-51.759 4.64062 9.93164)'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export const BulbYellowIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='19'
    height='25'
    viewBox='0 0 19 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6.00098 21.5029H13.363C13.363 22.926 12.2094 24.0796 10.7863 24.0796H8.57768C7.15461 24.0796 6.00098 22.926 6.00098 21.5029Z'
      fill='#383C41'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.362 17.4136C16.3544 15.8947 18.405 12.7881 18.405 9.20252C18.405 4.12011 14.2849 0 9.20252 0C4.12011 0 0 4.12011 0 9.20252C0 13.1587 2.49647 16.5318 6 17.8325V20.092H13.362L13.362 17.4136Z'
      fill='#F9DB71'
    />
    <circle cx='13.8452' cy='4.74559' r='1.47802' fill='#FFEFB8' />
    <rect x='6' y='19' width='7.36202' height='2.50309' fill='#565B61' />
  </svg>
);
export const DocumentIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.4595 3.75L5.51136 3.75C5.37574 3.75 5.24567 3.81585 5.14977 3.93306C5.05387 4.05027 5 4.20924 5 4.375L5 16.875C5 17.0408 5.05388 17.1997 5.14977 17.3169C5.24567 17.4342 5.37574 17.5 5.51136 17.5L15.7386 17.5C15.8743 17.5 16.0043 17.4342 16.1002 17.3169C16.1961 17.1997 16.25 17.0408 16.25 16.875L16.25 8.38281C16.2502 8.30166 16.2374 8.22124 16.2121 8.14617C16.1869 8.0711 16.1498 8.00284 16.103 7.94531L12.8175 3.92969C12.7704 3.87245 12.7146 3.82711 12.6531 3.79628C12.5917 3.76544 12.5259 3.74972 12.4595 3.75V3.75Z'
      stroke='currentColor'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.2057 8.12451L12.6709 8.12451L12.6709 3.8042'
      stroke='currentColor'
      strokeWidth='1.25'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect
      x='7.5'
      y='10'
      width='1.5625'
      height='1.5625'
      rx='0.78125'
      fill='currentColor'
    />
    <rect
      x='9.6875'
      y='10.1562'
      width='3.75'
      height='1.25'
      rx='0.625'
      fill='currentColor'
    />
    <rect
      x='7.5'
      y='12.5'
      width='1.5625'
      height='1.5625'
      rx='0.78125'
      fill='currentColor'
    />
    <rect
      x='9.6875'
      y='12.6562'
      width='5'
      height='1.25'
      rx='0.625'
      fill='currentColor'
    />
  </svg>
);
export const ChatSquareIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_20442_12336)'>
      <path
        d='M3.125 3.125V2.5C2.77982 2.5 2.5 2.77982 2.5 3.125H3.125ZM16.875 3.125H17.5C17.5 2.77982 17.2202 2.5 16.875 2.5V3.125ZM3.125 14.375H2.5C2.5 14.7202 2.77982 15 3.125 15V14.375ZM8 14.375L8.48804 13.9846C8.36944 13.8363 8.18987 13.75 8 13.75V14.375ZM10 16.875L9.51196 17.2654C9.63056 17.4137 9.81014 17.5 10 17.5C10.1899 17.5 10.3694 17.4137 10.488 17.2654L10 16.875ZM12 14.375V13.75C11.8101 13.75 11.6306 13.8363 11.512 13.9846L12 14.375ZM16.875 14.375V15C17.2202 15 17.5 14.7202 17.5 14.375H16.875ZM3.125 3.75H16.875V2.5H3.125V3.75ZM3.75 14.375V3.125H2.5V14.375H3.75ZM8 13.75H3.125V15H8V13.75ZM10.488 16.4846L8.48804 13.9846L7.51196 14.7654L9.51196 17.2654L10.488 16.4846ZM11.512 13.9846L9.51196 16.4846L10.488 17.2654L12.488 14.7654L11.512 13.9846ZM16.875 13.75H12V15H16.875V13.75ZM16.25 3.125V14.375H17.5V3.125H16.25Z'
        fill='currentColor'
      />
      <path
        d='M6.875 6.25H13.125'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
      />
      <path
        d='M6.875 8.75H13.125'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_20442_12336'>
        <rect width='20' height='20' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export const QuestionLibraryIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    {...props}
  >
    <path
      d='M11.6666 12.4998C11.9027 12.4998 12.1076 12.413 12.2812 12.2394C12.4548 12.0658 12.5416 11.8609 12.5416 11.6248C12.5416 11.3887 12.4548 11.1839 12.2812 11.0103C12.1076 10.8366 11.9027 10.7498 11.6666 10.7498C11.4305 10.7498 11.2257 10.8366 11.052 11.0103C10.8784 11.1839 10.7916 11.3887 10.7916 11.6248C10.7916 11.8609 10.8784 12.0658 11.052 12.2394C11.2257 12.413 11.4305 12.4998 11.6666 12.4998ZM11.0416 9.83317H12.2916C12.2916 9.43039 12.3333 9.13525 12.4166 8.94775C12.5 8.76025 12.6944 8.51373 13 8.20817C13.4166 7.7915 13.6944 7.4547 13.8333 7.19775C13.9722 6.94081 14.0416 6.63873 14.0416 6.2915C14.0416 5.6665 13.8229 5.15609 13.3854 4.76025C12.9479 4.36442 12.375 4.1665 11.6666 4.1665C11.0972 4.1665 10.6007 4.32623 10.177 4.64567C9.75343 4.96511 9.45829 5.38873 9.29163 5.9165L10.4166 6.37484C10.5416 6.02761 10.7118 5.7672 10.927 5.59359C11.1423 5.41998 11.3888 5.33317 11.6666 5.33317C12 5.33317 12.2708 5.42692 12.4791 5.61442C12.6875 5.80192 12.7916 6.05539 12.7916 6.37484C12.7916 6.56928 12.7361 6.75331 12.625 6.92692C12.5138 7.10053 12.3194 7.31928 12.0416 7.58317C11.5833 7.98595 11.302 8.30192 11.1979 8.53109C11.0937 8.76025 11.0416 9.19428 11.0416 9.83317ZM6.66663 14.9998C6.20829 14.9998 5.81593 14.8366 5.48954 14.5103C5.16315 14.1839 4.99996 13.7915 4.99996 13.3332V3.33317C4.99996 2.87484 5.16315 2.48248 5.48954 2.15609C5.81593 1.8297 6.20829 1.6665 6.66663 1.6665H16.6666C17.125 1.6665 17.5173 1.8297 17.8437 2.15609C18.1701 2.48248 18.3333 2.87484 18.3333 3.33317V13.3332C18.3333 13.7915 18.1701 14.1839 17.8437 14.5103C17.5173 14.8366 17.125 14.9998 16.6666 14.9998H6.66663ZM6.66663 13.3332H16.6666V3.33317H6.66663V13.3332ZM3.33329 18.3332C2.87496 18.3332 2.4826 18.17 2.15621 17.8436C1.82982 17.5172 1.66663 17.1248 1.66663 16.6665V4.99984H3.33329V16.6665H15V18.3332H3.33329Z'
      fill='#526277'
    />
  </svg>
);

export const MyLibraryIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    {...props}
  >
    <path
      d='M10 18.7502C9 17.8057 7.85417 17.0835 6.5625 16.5835C5.27083 16.0835 3.91667 15.8335 2.5 15.8335V6.66683C3.90278 6.66683 5.25 6.9203 6.54167 7.42725C7.83333 7.93419 8.98611 8.66683 10 9.62516C11.0139 8.66683 12.1667 7.93419 13.4583 7.42725C14.75 6.9203 16.0972 6.66683 17.5 6.66683V15.8335C16.0694 15.8335 14.7118 16.0835 13.4271 16.5835C12.1424 17.0835 11 17.8057 10 18.7502ZM10 16.5835C10.875 15.9307 11.8056 15.4099 12.7917 15.021C13.7778 14.6321 14.7917 14.3752 15.8333 14.2502V8.50016C14.8194 8.68072 13.8229 9.0453 12.8438 9.59391C11.8646 10.1425 10.9167 10.8752 10 11.7918C9.08333 10.8752 8.13542 10.1425 7.15625 9.59391C6.17708 9.0453 5.18056 8.68072 4.16667 8.50016V14.2502C5.20833 14.3752 6.22222 14.6321 7.20833 15.021C8.19444 15.4099 9.125 15.9307 10 16.5835ZM10 7.50016C9.08333 7.50016 8.29861 7.17377 7.64583 6.521C6.99306 5.86822 6.66667 5.0835 6.66667 4.16683C6.66667 3.25016 6.99306 2.46544 7.64583 1.81266C8.29861 1.15988 9.08333 0.833496 10 0.833496C10.9167 0.833496 11.7014 1.15988 12.3542 1.81266C13.0069 2.46544 13.3333 3.25016 13.3333 4.16683C13.3333 5.0835 13.0069 5.86822 12.3542 6.521C11.7014 7.17377 10.9167 7.50016 10 7.50016ZM10 5.8335C10.4583 5.8335 10.8507 5.6703 11.1771 5.34391C11.5035 5.01752 11.6667 4.62516 11.6667 4.16683C11.6667 3.7085 11.5035 3.31613 11.1771 2.98975C10.8507 2.66336 10.4583 2.50016 10 2.50016C9.54167 2.50016 9.14931 2.66336 8.82292 2.98975C8.49653 3.31613 8.33333 3.7085 8.33333 4.16683C8.33333 4.62516 8.49653 5.01752 8.82292 5.34391C9.14931 5.6703 9.54167 5.8335 10 5.8335Z'
      fill='#526277'
    />
  </svg>
);

export const DeletePlainIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      d='M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z'
      fill='#526277'
    />
  </svg>
);
export const DeleteGrayIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2 5H14'
      stroke='#677990'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 5V4C6 3.44772 6.44772 3 7 3H9C9.55228 3 10 3.44772 10 4V5'
      stroke='#677990'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 5L4.25 13H11.75L12 5'
      stroke='#677990'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 7V11'
      stroke='#677990'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 7V11'
      stroke='#677990'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 7V11'
      stroke='#677990'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export const ArrowDoubleIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12 6L18 12L12 18'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6 6L12 12L6 18'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export const AttachmentIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <mask
      id='mask0_23616_120525'
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='16'
      height='16'
    >
      <rect width='16' height='16' fill='#D9D9D9' />
    </mask>
    <g mask='url(#mask0_23616_120525)'>
      <path
        d='M12.0001 10.4997C12.0001 11.6552 11.5945 12.6386 10.7834 13.4497C9.9723 14.2608 8.98897 14.6663 7.83341 14.6663C6.67786 14.6663 5.69453 14.2608 4.88341 13.4497C4.0723 12.6386 3.66675 11.6552 3.66675 10.4997V4.33301C3.66675 3.49967 3.95841 2.79134 4.54175 2.20801C5.12508 1.62467 5.83341 1.33301 6.66675 1.33301C7.50008 1.33301 8.20841 1.62467 8.79175 2.20801C9.37508 2.79134 9.66675 3.49967 9.66675 4.33301V10.1663C9.66675 10.6775 9.48897 11.1108 9.13341 11.4663C8.77786 11.8219 8.34453 11.9997 7.83341 11.9997C7.3223 11.9997 6.88897 11.8219 6.53341 11.4663C6.17786 11.1108 6.00008 10.6775 6.00008 10.1663V3.99967H7.33341V10.1663C7.33341 10.3108 7.38064 10.4302 7.47508 10.5247C7.56953 10.6191 7.68897 10.6663 7.83341 10.6663C7.97786 10.6663 8.0973 10.6191 8.19175 10.5247C8.28619 10.4302 8.33341 10.3108 8.33341 10.1663V4.33301C8.3223 3.86634 8.15841 3.4719 7.84175 3.14967C7.52508 2.82745 7.13341 2.66634 6.66675 2.66634C6.20008 2.66634 5.80564 2.82745 5.48341 3.14967C5.16119 3.4719 5.00008 3.86634 5.00008 4.33301V10.4997C4.98897 11.2886 5.26119 11.958 5.81675 12.508C6.3723 13.058 7.04453 13.333 7.83341 13.333C8.61119 13.333 9.2723 13.058 9.81675 12.508C10.3612 11.958 10.6445 11.2886 10.6667 10.4997V3.99967H12.0001V10.4997Z'
        fill='currentColor'
      />
    </g>
  </svg>
);

export const MicroPhoneIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='23'
      viewBox='0 0 22 23'
      fill='none'
      {...props}
    >
      <rect
        x='15.668'
        y='0.460938'
        width='15.1667'
        height='9.33333'
        rx='4.66667'
        transform='rotate(90 15.668 0.460938)'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 11.5469L5.16667 11.5469C5.16667 14.7685 7.77834 17.3802 11 17.3802C14.2217 17.3802 16.8333 14.7685 16.8333 11.5469L18 11.5469C18 15.4129 14.866 18.5469 11 18.5469C7.13401 18.5469 4 15.4129 4 11.5469Z'
        fill='white'
      />
      <rect
        x='10.4141'
        y='17.375'
        width='1.16667'
        height='4.66667'
        fill='white'
      />
    </svg>
  );
};

export const MicroPhoneIcon2: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        d='M12 13.5C11.3013 13.5 10.71 13.258 10.226 12.774C9.742 12.29 9.5 11.6987 9.5 11V5C9.5 4.30133 9.742 3.71 10.226 3.226C10.71 2.742 11.3013 2.5 12 2.5C12.6987 2.5 13.29 2.742 13.774 3.226C14.258 3.71 14.5 4.30133 14.5 5V11C14.5 11.6987 14.258 12.29 13.774 12.774C13.29 13.258 12.6987 13.5 12 13.5ZM11.25 20.75V17.4538C9.6 17.2653 8.22917 16.5576 7.1375 15.3307C6.04583 14.1037 5.5 12.6602 5.5 11H7C7 12.3833 7.4875 13.5625 8.4625 14.5375C9.4375 15.5125 10.6167 16 12 16C13.3833 16 14.5625 15.5125 15.5375 14.5375C16.5125 13.5625 17 12.3833 17 11H18.5C18.5 12.6602 17.9542 14.1037 16.8625 15.3307C15.7708 16.5576 14.4 17.2653 12.75 17.4538V20.75H11.25ZM12 12C12.2833 12 12.5208 11.9042 12.7125 11.7125C12.9042 11.5208 13 11.2833 13 11V5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4C11.7167 4 11.4792 4.09583 11.2875 4.2875C11.0958 4.47917 11 4.71667 11 5V11C11 11.2833 11.0958 11.5208 11.2875 11.7125C11.4792 11.9042 11.7167 12 12 12Z'
        fill='#526277'
      />
    </svg>
  );
};

export const CameraIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='21'
      viewBox='0 0 22 21'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M15.9316 11.4112C15.7105 11.1901 15.7105 10.8317 15.9316 10.6105L20.2265 6.31486C20.5832 5.95814 21.1931 6.21074 21.1931 6.71518L21.1931 15.3051C21.1931 15.8095 20.5833 16.0622 20.2266 15.7055L15.9316 11.4112Z'
        fill='white'
      />
      <rect
        x='0.808594'
        y='4.21875'
        width='16.9856'
        height='13.5885'
        rx='2.26475'
        fill='white'
      />
    </svg>
  );
};

export const CameraIcon2: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M4.54969 19.5C4.04469 19.5 3.61719 19.325 3.26719 18.975C2.91719 18.625 2.74219 18.1974 2.74219 17.6923V6.30775C2.74219 5.80258 2.91719 5.375 3.26719 5.025C3.61719 4.675 4.04469 4.5 4.54969 4.5H15.9344C16.4394 4.5 16.8669 4.675 17.2169 5.025C17.5669 5.375 17.7419 5.80258 17.7419 6.30775V10.8848L21.2612 7.3655V16.6345L17.7419 13.1152V17.6923C17.7419 18.1974 17.5669 18.625 17.2169 18.975C16.8669 19.325 16.4394 19.5 15.9344 19.5H4.54969ZM4.54969 18H15.9344C16.0241 18 16.0978 17.9712 16.1554 17.9135C16.2133 17.8558 16.2422 17.7821 16.2422 17.6923V6.30775C16.2422 6.21792 16.2133 6.14417 16.1554 6.0865C16.0978 6.02883 16.0241 6 15.9344 6H4.54969C4.46002 6 4.38635 6.02883 4.32869 6.0865C4.27102 6.14417 4.24219 6.21792 4.24219 6.30775V17.6923C4.24219 17.7821 4.27102 17.8558 4.32869 17.9135C4.38635 17.9712 4.46002 18 4.54969 18Z'
        fill='#526277'
      />
    </svg>
  );
};

export const MuteCameraIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='22'
      height='25'
      viewBox='0 0 22 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.9316 13.4112C15.7105 13.1901 15.7105 12.8317 15.9316 12.6105L20.2265 8.31486C20.5832 7.95814 21.1931 8.21074 21.1931 8.71518L21.1931 17.3051C21.1931 17.8095 20.5833 18.0622 20.2266 17.7055L15.9316 13.4112Z'
        fill='white'
      />
      <rect
        x='0.808594'
        y='6.21875'
        width='16.9856'
        height='13.5885'
        rx='2.26475'
        fill='white'
      />
      <rect
        x='3.81699'
        y='2.64511'
        width='2.66295'
        height='24.1238'
        transform='rotate(-30 3.81699 2.64511)'
        fill='white'
        stroke='#EB3E28'
      />
    </svg>
  );
};

export const MuteMicrophoneIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='22'
      height='25'
      viewBox='0 0 22 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='15.668'
        y='2.46094'
        width='15.1667'
        height='9.33333'
        rx='4.66667'
        transform='rotate(90 15.668 2.46094)'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 13.5469L5.16667 13.5469C5.16667 16.7685 7.77834 19.3802 11 19.3802C14.2217 19.3802 16.8333 16.7685 16.8333 13.5469L18 13.5469C18 17.4129 14.866 20.5469 11 20.5469C7.13401 20.5469 4 17.4129 4 13.5469Z'
        fill='white'
      />
      <rect
        x='10.4141'
        y='19.375'
        width='1.16667'
        height='4.66667'
        fill='white'
      />
      <rect
        x='3.81699'
        y='2.64511'
        width='2.66295'
        height='24.1238'
        transform='rotate(-30 3.81699 2.64511)'
        fill='white'
        stroke='#EB3E28'
      />
    </svg>
  );
};

export const VideoCallMonitorIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      {...props}
      className={className}
    >
      <path
        d='M5.74693 10.8294C5.91012 10.8294 6.04991 10.7726 6.1663 10.659C6.28283 10.5455 6.34109 10.4072 6.34109 10.244C6.34109 10.0808 6.28429 9.94097 6.17068 9.82458C6.0572 9.70806 5.91887 9.64979 5.75568 9.64979C5.59248 9.64979 5.45269 9.7066 5.3363 9.82021C5.21977 9.93368 5.16151 10.072 5.16151 10.2352C5.16151 10.3984 5.21832 10.5382 5.33193 10.6546C5.4454 10.7711 5.58373 10.8294 5.74693 10.8294ZM5.74693 8.32938C5.91012 8.32938 6.04991 8.27257 6.1663 8.15896C6.28283 8.04549 6.34109 7.90715 6.34109 7.74396C6.34109 7.58077 6.28429 7.44097 6.17068 7.32458C6.0572 7.20806 5.91887 7.14979 5.75568 7.14979C5.59248 7.14979 5.45269 7.2066 5.3363 7.32021C5.21977 7.43368 5.16151 7.57201 5.16151 7.73521C5.16151 7.8984 5.21832 8.0382 5.33193 8.15458C5.4454 8.27111 5.58373 8.32938 5.74693 8.32938ZM8.04943 10.7813H14.793V9.69792H8.04943V10.7813ZM8.04943 8.28125H14.793V7.19792H8.04943V8.28125ZM7.41797 16.5729V14.5729H3.75776C3.38262 14.5729 3.06554 14.4433 2.80651 14.1842C2.54748 13.925 2.41797 13.6077 2.41797 13.2323V4.74021C2.41797 4.36479 2.54748 4.04861 2.80651 3.79167C3.06554 3.53472 3.38262 3.40625 3.75776 3.40625H16.2448C16.62 3.40625 16.9371 3.53583 17.1961 3.795C17.4551 4.05417 17.5846 4.37146 17.5846 4.74687V13.239C17.5846 13.6144 17.4551 13.9306 17.1961 14.1875C16.9371 14.4444 16.62 14.5729 16.2448 14.5729H12.5846V16.5729H7.41797ZM3.75776 13.4896H16.2448C16.309 13.4896 16.3678 13.4628 16.4211 13.4094C16.4746 13.356 16.5013 13.2973 16.5013 13.2331V4.74604C16.5013 4.68188 16.4746 4.62312 16.4211 4.56979C16.3678 4.51632 16.309 4.48958 16.2448 4.48958H3.75776C3.69359 4.48958 3.63484 4.51632 3.58151 4.56979C3.52804 4.62312 3.5013 4.68188 3.5013 4.74604V13.2331C3.5013 13.2973 3.52804 13.356 3.58151 13.4094C3.63484 13.4628 3.69359 13.4896 3.75776 13.4896Z'
        fill='#FEFEFE'
      />
    </svg>
  );
};
export const BrowseQuestionIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.32812 10.0007C9.51701 10.0007 9.6809 9.93121 9.81979 9.79232C9.95868 9.65343 10.0281 9.48954 10.0281 9.30065C10.0281 9.11176 9.95868 8.94787 9.81979 8.80898C9.6809 8.67009 9.51701 8.60065 9.32812 8.60065C9.13924 8.60065 8.97535 8.67009 8.83646 8.80898C8.69757 8.94787 8.62812 9.11176 8.62812 9.30065C8.62812 9.48954 8.69757 9.65343 8.83646 9.79232C8.97535 9.93121 9.13924 10.0007 9.32812 10.0007ZM8.82812 7.86732H9.82812C9.82812 7.54509 9.86146 7.30898 9.92812 7.15898C9.99479 7.00898 10.1503 6.81176 10.3948 6.56732C10.7281 6.23398 10.9503 5.96454 11.0615 5.75898C11.1726 5.55343 11.2281 5.31176 11.2281 5.03398C11.2281 4.53398 11.0531 4.12565 10.7031 3.80898C10.3531 3.49232 9.89479 3.33398 9.32812 3.33398C8.87257 3.33398 8.47535 3.46176 8.13646 3.71732C7.79757 3.97287 7.56146 4.31176 7.42812 4.73398L8.32812 5.10065C8.42812 4.82287 8.56424 4.61454 8.73646 4.47565C8.90868 4.33676 9.1059 4.26732 9.32812 4.26732C9.59479 4.26732 9.81146 4.34232 9.97812 4.49232C10.1448 4.64232 10.2281 4.8451 10.2281 5.10065C10.2281 5.25621 10.1837 5.40343 10.0948 5.54232C10.0059 5.68121 9.85035 5.85621 9.62812 6.06732C9.26146 6.38954 9.03646 6.64232 8.95312 6.82565C8.86979 7.00898 8.82812 7.35621 8.82812 7.86732ZM5.32812 12.0007C4.96146 12.0007 4.64757 11.8701 4.38646 11.609C4.12535 11.3479 3.99479 11.034 3.99479 10.6673V2.66732C3.99479 2.30065 4.12535 1.98676 4.38646 1.72565C4.64757 1.46454 4.96146 1.33398 5.32812 1.33398H13.3281C13.6948 1.33398 14.0087 1.46454 14.2698 1.72565C14.5309 1.98676 14.6615 2.30065 14.6615 2.66732V10.6673C14.6615 11.034 14.5309 11.3479 14.2698 11.609C14.0087 11.8701 13.6948 12.0007 13.3281 12.0007H5.32812ZM5.32812 10.6673H13.3281V2.66732H5.32812V10.6673ZM2.66146 14.6673C2.29479 14.6673 1.9809 14.5368 1.71979 14.2757C1.45868 14.0145 1.32812 13.7007 1.32812 13.334V4.00065H2.66146V13.334H11.9948V14.6673H2.66146Z'
        fill='#FEFEFE'
      />
    </svg>
  );
};
export const ExpandIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='0.5' y='0.5' width='23' height='23' rx='11.5' fill='#F6F7F9' />
      <rect x='0.5' y='0.5' width='23' height='23' rx='11.5' stroke='#ECEFF2' />
      <path
        d='M8 16L4 12L8 8L9.0625 9.0625L6.875 11.25H17.125L14.9375 9.0625L16 8L20 12L16 16L14.9375 14.9375L17.125 12.75H6.875L9.0625 14.9375L8 16Z'
        fill='#526277'
      />
    </svg>
  );
};
export const SkillTestIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 15.5C13.1333 15.5 13.25 15.45 13.35 15.35C13.45 15.25 13.5 15.1333 13.5 15C13.5 14.8667 13.45 14.75 13.35 14.65C13.25 14.55 13.1333 14.5 13 14.5C12.8667 14.5 12.75 14.55 12.65 14.65C12.55 14.75 12.5 14.8667 12.5 15C12.5 15.1333 12.55 15.25 12.65 15.35C12.75 15.45 12.8667 15.5 13 15.5ZM15 15.5C15.1333 15.5 15.25 15.45 15.35 15.35C15.45 15.25 15.5 15.1333 15.5 15C15.5 14.8667 15.45 14.75 15.35 14.65C15.25 14.55 15.1333 14.5 15 14.5C14.8667 14.5 14.75 14.55 14.65 14.65C14.55 14.75 14.5 14.8667 14.5 15C14.5 15.1333 14.55 15.25 14.65 15.35C14.75 15.45 14.8667 15.5 15 15.5ZM17 15.5C17.1333 15.5 17.25 15.45 17.35 15.35C17.45 15.25 17.5 15.1333 17.5 15C17.5 14.8667 17.45 14.75 17.35 14.65C17.25 14.55 17.1333 14.5 17 14.5C16.8667 14.5 16.75 14.55 16.65 14.65C16.55 14.75 16.5 14.8667 16.5 15C16.5 15.1333 16.55 15.25 16.65 15.35C16.75 15.45 16.8667 15.5 17 15.5ZM4.5 17C4.0875 17 3.73437 16.8531 3.44062 16.5594C3.14687 16.2656 3 15.9125 3 15.5V4.5C3 4.0875 3.14687 3.73438 3.44062 3.44063C3.73437 3.14688 4.0875 3 4.5 3H15.5C15.9125 3 16.2656 3.14688 16.5594 3.44063C16.8531 3.73438 17 4.0875 17 4.5V9.875C16.7625 9.795 16.5188 9.72611 16.2688 9.66833C16.0188 9.61056 15.7625 9.56833 15.5 9.54167V4.5H4.5V15.5H9.52083C9.54694 15.7711 9.58819 16.0299 9.64458 16.2763C9.70097 16.5226 9.77083 16.7639 9.85417 17H4.5ZM4.5 15V15.5V4.5V9.54167V9.5V15ZM6 14H9.58333C9.63889 13.7361 9.70965 13.4794 9.79563 13.2298C9.8816 12.9803 9.9775 12.7371 10.0833 12.5H6V14ZM6 10.75H11.5C11.8611 10.4722 12.25 10.2326 12.6667 10.0312C13.0833 9.82986 13.5278 9.6875 14 9.60417V9.25H6V10.75ZM6 7.5H14V6H6V7.5ZM14.9952 19C13.8873 19 12.9444 18.6095 12.1667 17.8285C11.3889 17.0477 11 16.1033 11 14.9952C11 13.8873 11.3905 12.9444 12.1715 12.1667C12.9523 11.3889 13.8967 11 15.0048 11C16.1127 11 17.0556 11.3905 17.8333 12.1715C18.6111 12.9523 19 13.8967 19 15.0048C19 16.1127 18.6095 17.0556 17.8285 17.8333C17.0477 18.6111 16.1033 19 14.9952 19Z'
        fill='#2E3642'
      />
    </svg>
  );
};
export const ComplianceIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.9987 18.3327C8.06814 17.8466 6.47439 16.7389 5.21745 15.0098C3.9605 13.2806 3.33203 11.3605 3.33203 9.24935V4.16602L9.9987 1.66602L16.6654 4.16602V9.24935C16.6654 10.4299 16.464 11.5653 16.0612 12.6556C15.6584 13.7459 15.082 14.7077 14.332 15.541L11.6654 12.8743C11.4154 13.0271 11.148 13.1417 10.8633 13.2181C10.5786 13.2945 10.2904 13.3327 9.9987 13.3327C9.08203 13.3327 8.29731 13.0063 7.64453 12.3535C6.99175 11.7007 6.66536 10.916 6.66536 9.99935C6.66536 9.08268 6.99175 8.29796 7.64453 7.64518C8.29731 6.9924 9.08203 6.66602 9.9987 6.66602C10.9154 6.66602 11.7001 6.9924 12.3529 7.64518C13.0056 8.29796 13.332 9.08268 13.332 9.99935C13.332 10.3049 13.2938 10.6 13.2174 10.8848C13.1411 11.1695 13.0265 11.4438 12.8737 11.7077L14.1237 12.9577C14.4015 12.3882 14.6168 11.791 14.7695 11.166C14.9223 10.541 14.9987 9.90213 14.9987 9.24935V5.31185L9.9987 3.43685L4.9987 5.31185V9.24935C4.9987 10.9299 5.47092 12.4577 6.41536 13.8327C7.35981 15.2077 8.55425 16.1243 9.9987 16.5827C10.3598 16.4716 10.7036 16.3292 11.0299 16.1556C11.3563 15.982 11.6793 15.7771 11.9987 15.541L13.1654 16.7077C12.707 17.0827 12.2105 17.4091 11.6758 17.6868C11.1411 17.9646 10.582 18.1799 9.9987 18.3327ZM9.9987 11.666C10.457 11.666 10.8494 11.5028 11.1758 11.1764C11.5022 10.85 11.6654 10.4577 11.6654 9.99935C11.6654 9.54102 11.5022 9.14865 11.1758 8.82227C10.8494 8.49588 10.457 8.33268 9.9987 8.33268C9.54036 8.33268 9.148 8.49588 8.82161 8.82227C8.49523 9.14865 8.33203 9.54102 8.33203 9.99935C8.33203 10.4577 8.49523 10.85 8.82161 11.1764C9.148 11.5028 9.54036 11.666 9.9987 11.666Z'
        fill='#2E3642'
      />
    </svg>
  );
};
export const AppsIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.09105 3.75391C4.73538 3.75391 4.39428 3.8952 4.14279 4.14669C3.89129 4.39819 3.75 4.73929 3.75 5.09496C3.75 5.45063 3.89129 5.79173 4.14279 6.04323C4.39428 6.29473 4.73538 6.43602 5.09105 6.43602C5.26716 6.43602 5.44155 6.40133 5.60425 6.33393C5.76696 6.26654 5.91479 6.16776 6.03932 6.04323C6.16385 5.9187 6.26263 5.77086 6.33003 5.60816C6.39742 5.44545 6.43211 5.27107 6.43211 5.09496C6.43211 4.91885 6.39742 4.74447 6.33003 4.58176C6.26263 4.41906 6.16385 4.27122 6.03932 4.14669C5.91479 4.02216 5.76696 3.92338 5.60425 3.85599C5.44155 3.78859 5.26716 3.75391 5.09105 3.75391ZM10.0005 3.75391C9.64479 3.75391 9.30369 3.8952 9.05219 4.14669C8.80069 4.39819 8.6594 4.73929 8.6594 5.09496C8.6594 5.45063 8.80069 5.79173 9.05219 6.04323C9.30369 6.29473 9.64479 6.43602 10.0005 6.43602C10.3561 6.43602 10.6972 6.29473 10.9487 6.04323C11.2002 5.79173 11.3415 5.45063 11.3415 5.09496C11.3415 4.73929 11.2002 4.39819 10.9487 4.14669C10.6972 3.8952 10.3561 3.75391 10.0005 3.75391ZM14.9099 3.75391C14.5542 3.75391 14.2131 3.8952 13.9616 4.14669C13.7101 4.39819 13.5688 4.73929 13.5688 5.09496C13.5688 5.45063 13.7101 5.79173 13.9616 6.04323C14.2131 6.29473 14.5542 6.43602 14.9099 6.43602C15.086 6.43602 15.2604 6.40133 15.4231 6.33393C15.5858 6.26654 15.7336 6.16776 15.8581 6.04323C15.9827 5.9187 16.0814 5.77086 16.1488 5.60816C16.2162 5.44546 16.2509 5.27107 16.2509 5.09496C16.2509 4.91885 16.2162 4.74447 16.1488 4.58176C16.0814 4.41906 15.9827 4.27122 15.8581 4.14669C15.7336 4.02216 15.5858 3.92338 15.4231 3.85599C15.2604 3.78859 15.086 3.75391 14.9099 3.75391ZM5.09105 8.6625C4.73539 8.6625 4.39428 8.80379 4.14279 9.05529C3.89129 9.30679 3.75 9.64789 3.75 10.0036C3.75 10.3592 3.89129 10.7003 4.14279 10.9518C4.39428 11.2033 4.73539 11.3446 5.09105 11.3446C5.44672 11.3446 5.78783 11.2033 6.03932 10.9518C6.29082 10.7003 6.43211 10.3592 6.43211 10.0036C6.43211 9.64789 6.29082 9.30679 6.03932 9.05529C5.78783 8.80379 5.44672 8.6625 5.09105 8.6625ZM10.0005 8.6625C9.64479 8.6625 9.30369 8.80379 9.05219 9.05529C8.80069 9.30679 8.6594 9.64789 8.6594 10.0036C8.6594 10.3592 8.80069 10.7003 9.05219 10.9518C9.30369 11.2033 9.64479 11.3446 10.0005 11.3446C10.3561 11.3446 10.6972 11.2033 10.9487 10.9518C11.2002 10.7003 11.3415 10.3592 11.3415 10.0036C11.3415 9.64789 11.2002 9.30679 10.9487 9.05529C10.6972 8.80379 10.3561 8.6625 10.0005 8.6625ZM14.9099 8.6625C14.5542 8.6625 14.2131 8.80379 13.9616 9.05529C13.7101 9.30679 13.5688 9.64789 13.5688 10.0036C13.5688 10.3592 13.7101 10.7003 13.9616 10.9518C14.2131 11.2033 14.5542 11.3446 14.9099 11.3446C15.2655 11.3446 15.6066 11.2033 15.8581 10.9518C16.1096 10.7003 16.2509 10.3592 16.2509 10.0036C16.2509 9.64789 16.1096 9.30679 15.8581 9.05529C15.6066 8.80379 15.2655 8.6625 14.9099 8.6625ZM5.09105 13.5711C4.73538 13.5711 4.39428 13.7124 4.14279 13.9639C3.89129 14.2154 3.75 14.5565 3.75 14.9122C3.75 15.2678 3.89129 15.6089 4.14279 15.8604C4.39428 16.1119 4.73538 16.2532 5.09105 16.2532C5.44673 16.2532 5.78783 16.1119 6.03932 15.8604C6.29082 15.6089 6.43211 15.2678 6.43211 14.9122C6.43211 14.5565 6.29082 14.2154 6.03932 13.9639C5.78783 13.7124 5.44673 13.5711 5.09105 13.5711ZM10.0005 13.5711C9.64479 13.5711 9.30369 13.7124 9.05219 13.9639C8.80069 14.2154 8.6594 14.5565 8.6594 14.9122C8.6594 15.2678 8.80069 15.6089 9.05219 15.8604C9.30369 16.1119 9.64479 16.2532 10.0005 16.2532C10.3561 16.2532 10.6972 16.1119 10.9487 15.8604C11.2002 15.6089 11.3415 15.2678 11.3415 14.9122C11.3415 14.5565 11.2002 14.2154 10.9487 13.9639C10.6972 13.7124 10.3561 13.5711 10.0005 13.5711ZM14.9099 13.5711C14.5542 13.5711 14.2131 13.7124 13.9616 13.9639C13.7101 14.2154 13.5688 14.5565 13.5688 14.9122C13.5688 15.2678 13.7101 15.6089 13.9616 15.8604C14.2131 16.1119 14.5542 16.2532 14.9099 16.2532C15.2655 16.2532 15.6066 16.1119 15.8581 15.8604C16.1096 15.6089 16.2509 15.2678 16.2509 14.9122C16.2509 14.5565 16.1096 14.2154 15.8581 13.9639C15.6066 13.7124 15.2655 13.5711 14.9099 13.5711Z'
        fill='currentColor'
      />
    </svg>
  );
};
export const AiBrushIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8 5.5L10.5689 8.06892' stroke='#217BBB' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.0045 12.5104C12.9099 12.5294 12.0256 13.4109 12.0022 14.5043H12.0008C11.9747 13.4137 11.0922 12.5353 10 12.5156V12.515C11.1009 12.4951 11.9888 11.6027 12.0012 10.5H12.0019C12.0171 11.6008 12.9046 12.4907 14.0045 12.5098V12.5104Z'
        fill='#217BBB'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.00011 6.5H4.00099C4.02437 5.40807 4.90713 4.5277 6 4.50815V4.50784C4.9018 4.4882 4.01576 3.59932 4.00071 2.5H4.00062C3.98831 3.60215 3.10053 4.49408 2 4.5131V4.51337C3.09168 4.53226 3.97401 5.41009 4.00011 6.5Z'
        fill='#217BBB'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.3689 2.64645C10.5642 2.45118 10.8807 2.45118 11.076 2.64645L13.8168 5.38726C14.0098 5.58019 14.0124 5.89216 13.8228 6.08833L5.87439 14.3108C5.68661 14.505 5.37848 14.515 5.17856 14.3332L2.16366 11.5924C2.06249 11.5004 2.00339 11.371 2.00014 11.2343C1.99689 11.0977 2.04976 10.9656 2.14645 10.8689L10.3689 2.64645ZM3.22434 11.2052L5.49243 13.2671L12.7621 5.74676L10.7225 3.70711L3.22434 11.2052Z'
        fill='#217BBB'
      />
    </svg>
  );
};
export const AiBrushIconWhite: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M8 5L10.5689 7.56892' stroke='white' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M14.0045 12.0104C12.9099 12.0294 12.0256 12.9109 12.0022 14.0043H12.0008C11.9747 12.9137 11.0922 12.0353 10 12.0156V12.015C11.1009 11.9951 11.9888 11.1027 12.0012 10H12.0019C12.0171 11.1008 12.9046 11.9907 14.0045 12.0098V12.0104Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M4.00011 6H4.00099C4.02437 4.90807 4.90713 4.0277 6 4.00815V4.00784C4.9018 3.9882 4.01576 3.09932 4.00071 2H4.00062C3.98831 3.10215 3.10053 3.99408 2 4.0131V4.01337C3.09168 4.03226 3.97401 4.91009 4.00011 6Z'
        fill='white'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.3689 2.14645C10.5642 1.95118 10.8807 1.95118 11.076 2.14645L13.8168 4.88726C14.0098 5.08019 14.0124 5.39216 13.8228 5.58833L5.87439 13.8108C5.68661 14.005 5.37848 14.015 5.17856 13.8332L2.16366 11.0924C2.06249 11.0004 2.00339 10.871 2.00014 10.7343C1.99689 10.5977 2.04976 10.4656 2.14645 10.3689L10.3689 2.14645ZM3.22434 10.7052L5.49243 12.7671L12.7621 5.24676L10.7225 3.20711L3.22434 10.7052Z'
        fill='white'
      />
    </svg>
  );
};
export const DashboardIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      {...props}
      fill='none'
    >
      <path
        d='M11.25 11.25H16.25V16.25H11.25V11.25Z'
        stroke='currentColor'
        strokeWidth='1.25'
        stroke-miterlimit='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.75 11.25H8.75V16.25H3.75V11.25Z'
        stroke='currentColor'
        strokeWidth='1.25'
        stroke-miterlimit='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.75 3.75H8.75V8.75H3.75V3.75Z'
        stroke='currentColor'
        strokeWidth='1.25'
        stroke-miterlimit='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.25 3.75H16.25V8.75H11.25V3.75Z'
        stroke='currentColor'
        strokeWidth='1.25'
        stroke-miterlimit='16'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const NotificationIcon: FC<IconsProps> = (props: IconsProps) => {
  /** props */
  const { className } = props;

  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19 18L5 18L6 15L6 12V12C6 8.68629 8.68629 6 12 6V6C15.3137 6 18 8.68629 18 12V12L18 15L19 18Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M9 18C9 18.4596 9.0776 18.4148 9.22836 18.8394C9.37913 19.264 9.6001 19.6499 9.87868 19.9749C10.1573 20.2999 10.488 20.5577 10.8519 20.7336C11.2159 20.9095 11.606 21 12 21C12.394 21 12.7841 20.9095 13.1481 20.7336C13.512 20.5577 13.8427 20.2999 14.1213 19.9749C14.3999 19.6499 14.6209 19.264 14.7716 18.8394C14.9224 18.4148 15 18.4596 15 18L12 18L9 18Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.7324 5.99998C13.9026 5.70581 14 5.36428 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 5.36428 10.0974 5.70581 10.2676 5.99998H13.7324ZM12.0087 6.99998H11.9913C11.9942 6.99999 11.9971 7 12 7C12.0029 7 12.0058 6.99999 12.0087 6.99998Z'
        fill='currentColor'
      />
    </svg>
  );
};

export const EmailWhiteIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='2'
        y='3'
        width='12'
        height='10'
        stroke='#FEFEFE'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 5L8 9L14 5'
        stroke='#FEFEFE'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const ArrowZigZag: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14.5 3.5L8.5 9.5L6 7L1.5 11.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.5 7.5V3.5H10.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const EmailActivityResponseIcon: FC<IconsProps> = (
  props: IconsProps
) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_9690_5659)'>
        <path
          d='M2.5 3V2.5C2.22386 2.5 2 2.72386 2 3H2.5ZM13.5 3H14C14 2.72386 13.7761 2.5 13.5 2.5V3ZM2.5 12H2C2 12.2761 2.22386 12.5 2.5 12.5V12ZM6.8 12L7.19043 11.6877C7.09555 11.569 6.95189 11.5 6.8 11.5V12ZM8 13.5L7.60957 13.8123C7.70445 13.931 7.84811 14 8 14C8.15189 14 8.29555 13.931 8.39043 13.8123L8 13.5ZM9.2 12V11.5C9.04811 11.5 8.90445 11.569 8.80957 11.6877L9.2 12ZM13.5 12V12.5C13.7761 12.5 14 12.2761 14 12H13.5ZM2.5 3.5H13.5V2.5H2.5V3.5ZM3 12V3H2V12H3ZM6.8 11.5H2.5V12.5H6.8V11.5ZM8.39043 13.1877L7.19043 11.6877L6.40957 12.3123L7.60957 13.8123L8.39043 13.1877ZM8.80957 11.6877L7.60957 13.1877L8.39043 13.8123L9.59043 12.3123L8.80957 11.6877ZM13.5 11.5H9.2V12.5H13.5V11.5ZM13 3V12H14V3H13Z'
          fill='#8CC942'
        />
        <path d='M5.5 5H10.5' stroke='#8CC942' strokeLinecap='round' />
        <path d='M5.5 7H10.5' stroke='#8CC942' strokeLinecap='round' />
      </g>
      <defs>
        <clipPath id='clip0_9690_5659'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CloseSidePanel: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      {...props}
    >
      <path
        d='M6 11L11 6L6 1'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 11L6 6L0.999998 1'
        stroke='currentColor'
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const BellIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M19 18L5 18L6 15L6 12V12C6 8.68629 8.68629 6 12 6V6C15.3137 6 18 8.68629 18 12V12L18 15L19 18Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M9 18C9 18.4596 9.0776 18.4148 9.22836 18.8394C9.37913 19.264 9.6001 19.6499 9.87868 19.9749C10.1573 20.2999 10.488 20.5577 10.8519 20.7336C11.2159 20.9095 11.606 21 12 21C12.394 21 12.7841 20.9095 13.1481 20.7336C13.512 20.5577 13.8427 20.2999 14.1213 19.9749C14.3999 19.6499 14.6209 19.264 14.7716 18.8394C14.9224 18.4148 15 18.4596 15 18L12 18L9 18Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.7324 5.99998C13.9026 5.70581 14 5.36428 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 5.36428 10.0974 5.70581 10.2676 5.99998H13.7324ZM12.0087 6.99998H11.9913C11.9942 6.99999 11.9971 7 12 7C12.0029 7 12.0058 6.99999 12.0087 6.99998Z'
        fill='currentColor'
      />
    </svg>
  );
};
export const ScheduleMeetingIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.9995 7.49609C12.4137 7.49609 12.7495 7.83188 12.7495 8.24609V8.99999C12.7495 9.0016 12.7495 9.00321 12.7495 9.00481L14.2656 9.00482C14.6799 9.00482 15.0156 9.34061 15.0156 9.75482C15.0156 10.169 14.6799 10.5048 14.2656 10.5048L10.8887 10.5048C10.6783 10.5048 10.5078 10.6753 10.5078 10.8857C10.5078 11.096 10.6783 11.2665 10.8887 11.2665L13.1348 11.2665C14.1736 11.2665 15.0156 12.1086 15.0156 13.1474C15.0156 14.1861 14.1736 15.0282 13.1348 15.0282H12.7495V15.7539C12.7495 16.1681 12.4137 16.5039 11.9995 16.5039C11.5853 16.5039 11.2495 16.1681 11.2495 15.7539V15.0282H9.75781C9.3436 15.0282 9.00781 14.6924 9.00781 14.2782C9.00781 13.864 9.3436 13.5282 9.75781 13.5282H13.1348C13.3451 13.5282 13.5156 13.3577 13.5156 13.1474C13.5156 12.937 13.3451 12.7665 13.1348 12.7665L10.8887 12.7665C9.8499 12.7665 9.00781 11.9244 9.00781 10.8857C9.00781 9.84689 9.8499 9.00481 10.8887 9.00481L11.2495 9.00481C11.2495 9.00321 11.2495 9.0016 11.2495 8.99999V8.24609C11.2495 7.83188 11.5853 7.49609 11.9995 7.49609Z'
        fill='#677990'
      />
      <path
        d='M8.25 16.25C8.25 16.6642 7.91421 17 7.5 17C7.08579 17 6.75 16.6642 6.75 16.25C6.75 15.8358 7.08579 15.5 7.5 15.5C7.91421 15.5 8.25 15.8358 8.25 16.25Z'
        fill='#677990'
      />
      <path
        d='M18.619 5.13848C18.6859 5.54725 18.4088 5.93287 18 5.99979C17.5912 6.0667 17.2056 5.78957 17.1387 5.3808C17.0718 4.97202 17.3489 4.5864 17.7577 4.51949C18.1665 4.45257 18.5521 4.72971 18.619 5.13848Z'
        fill='#677990'
      />
      <path
        d='M19.6755 7.29793C20.5156 8.66633 21 10.2766 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.3161 3 14.5662 3.2825 15.6931 3.79017'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M9.52769 17.4686C10.3397 17.8365 11.2465 18.0283 12.1978 17.997C15.5097 17.8878 18.106 15.1144 17.9968 11.8025C17.8877 8.49063 15.1143 5.89431 11.8024 6.00348C8.4905 6.11266 5.89417 8.886 6.00335 12.1979C6.02633 12.8949 6.16728 13.5601 6.40641 14.1752'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};
export const VerifiedEmailIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M18.25 22C21.2876 22 23.75 19.5376 23.75 16.5C23.75 13.4624 21.2876 11 18.25 11C15.2124 11 12.75 13.4624 12.75 16.5C12.75 19.5376 15.2124 22 18.25 22ZM21.303 15.1655C21.4773 14.9982 21.4829 14.7212 21.3156 14.5469C21.1483 14.3726 20.8713 14.367 20.697 14.5343L17.5625 17.5435L15.803 15.8543C15.6287 15.687 15.3517 15.6926 15.1844 15.8669C15.0171 16.0412 15.0227 16.3182 15.197 16.4855L17.2595 18.4655C17.4288 18.6281 17.6962 18.6281 17.8655 18.4655L21.303 15.1655Z'
        fill='#217BBB'
      />
      <path
        d='M3 6L11.25 12L19.5 6'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.25 18.75H3L3 5.25H19.5V9'
        stroke='#677990'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export const TrendingArrow: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.16795 4.74808C7.56377 4.15434 8.43623 4.15434 8.83205 4.74808L12.9635 10.9453C13.4066 11.6099 12.9302 12.5 12.1315 12.5H3.86852C3.06982 12.5 2.59343 11.6099 3.03647 10.9453L7.16795 4.74808Z'
        fill='currentColor'
      />
    </svg>
  );
};
export const ThunderIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.5 10.625L11.5 1.25L10.75 8.125L17.5 9.375L8.5 18.75L9.25 11.875L2.5 10.625Z'
        fill='#F97F6F'
      />
    </svg>
  );
};

export const SpinnerIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.0957 3.35742V5.35742'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M8.0957 11.3574V13.3574'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M13.0957 8.35742L11.0957 8.35742'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M5.0957 8.35742L3.0957 8.35742'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M11.6312 11.8926L10.217 10.4784'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M5.97437 6.23633L4.56015 4.82211'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M4.5603 11.8926L5.97452 10.4784'
        stroke='currentColor'
        strokeLinecap='round'
      />
      <path
        d='M10.2172 6.23633L11.6314 4.82211'
        stroke='currentColor'
        strokeLinecap='round'
      />
    </svg>
  );
};

export const BoostIcon: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.5957 11.4824L11.5957 2.10742L10.8457 8.98242L17.5957 10.2324L8.5957 19.6074L9.3457 12.7324L2.5957 11.4824Z'
        fill='currentColor'
      />
    </svg>
  );
};
export const RedrobPay: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      width='42'
      height='14'
      viewBox='0 0 42 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.1204 1.97029L10.1204 6.98235C10.1109 5.18299 8.64928 3.72727 6.84771 3.72727C5.04024 3.72727 3.575 5.19252 3.575 7L3.57491 13L0.847656 13L0.847657 6.99998C0.847665 3.68628 3.53402 1 6.84771 1C8.05508 1 9.17917 1.35663 10.1204 1.97029Z'
        fill='#FBF8F7'
      />
      <path
        d='M10.1196 7L10.1195 1L12.8468 1V6.99999C12.8468 10.3137 10.1606 13 6.8469 13C5.63951 13 4.51542 12.6434 3.57422 12.0297L3.57422 7.01333C3.58141 8.81467 5.04388 10.2727 6.8469 10.2727C8.65436 10.2727 10.1196 8.80747 10.1196 7Z'
        fill='#0C151D'
      />
      <path
        d='M35.6153 13.1455C35.2513 13.1455 34.8873 13.0848 34.5233 12.9635C34.1593 12.8421 33.8559 12.6741 33.6133 12.4595L34.3133 11.1715C34.4906 11.3301 34.6913 11.4561 34.9153 11.5495C35.1393 11.6428 35.3679 11.6895 35.6013 11.6895C35.9186 11.6895 36.1753 11.6101 36.3713 11.4515C36.5673 11.2928 36.7493 11.0268 36.9173 10.6535L37.3513 9.67347L37.4913 9.46347L40.3193 2.85547H41.9993L38.4993 10.9335C38.2659 11.4935 38.0046 11.9368 37.7153 12.2635C37.4353 12.5901 37.1179 12.8188 36.7633 12.9495C36.4179 13.0801 36.0353 13.1455 35.6153 13.1455ZM37.1553 10.5975L33.7813 2.85547H35.6013L38.3453 9.30947L37.1553 10.5975Z'
        fill='white'
      />
      <path
        d='M31.2396 10.4155V8.90347L31.1416 8.58147V5.93547C31.1416 5.42214 30.9876 5.02547 30.6796 4.74547C30.3716 4.45614 29.9049 4.31147 29.2796 4.31147C28.8596 4.31147 28.4442 4.3768 28.0336 4.50747C27.6322 4.63814 27.2916 4.82014 27.0116 5.05347L26.3256 3.77947C26.7269 3.47147 27.2029 3.2428 27.7536 3.09347C28.3136 2.9348 28.8922 2.85547 29.4896 2.85547C30.5722 2.85547 31.4076 3.1168 31.9956 3.63947C32.5929 4.1528 32.8916 4.9508 32.8916 6.03347V10.4155H31.2396ZM28.8876 10.5135C28.3276 10.5135 27.8376 10.4201 27.4176 10.2335C26.9976 10.0375 26.6709 9.77147 26.4376 9.43547C26.2136 9.09014 26.1016 8.7028 26.1016 8.27347C26.1016 7.85347 26.1996 7.47547 26.3956 7.13947C26.6009 6.80347 26.9322 6.53747 27.3896 6.34147C27.8469 6.14547 28.4536 6.04747 29.2096 6.04747H31.3796V7.20947H29.3356C28.7382 7.20947 28.3369 7.30747 28.1316 7.50347C27.9262 7.69014 27.8236 7.92347 27.8236 8.20347C27.8236 8.5208 27.9496 8.7728 28.2016 8.95947C28.4536 9.14614 28.8036 9.23947 29.2516 9.23947C29.6809 9.23947 30.0636 9.14147 30.3996 8.94547C30.7449 8.74947 30.9922 8.46014 31.1416 8.07747L31.4356 9.12747C31.2676 9.56614 30.9642 9.9068 30.5256 10.1495C30.0962 10.3921 29.5502 10.5135 28.8876 10.5135Z'
        fill='white'
      />
      <path
        d='M16.8477 10.6555V0.855469H20.8797C21.7477 0.855469 22.4897 0.995469 23.1057 1.27547C23.731 1.55547 24.2117 1.9568 24.5477 2.47947C24.8837 3.00214 25.0517 3.6228 25.0517 4.34147C25.0517 5.06014 24.8837 5.6808 24.5477 6.20347C24.2117 6.72614 23.731 7.12747 23.1057 7.40747C22.4897 7.68747 21.7477 7.82747 20.8797 7.82747H17.8557L18.6677 6.97347V10.6555H16.8477ZM18.6677 7.16947L17.8557 6.28747H20.7957C21.5983 6.28747 22.2003 6.11947 22.6017 5.78347C23.0123 5.43814 23.2177 4.95747 23.2177 4.34147C23.2177 3.71614 23.0123 3.23547 22.6017 2.89947C22.2003 2.56347 21.5983 2.39547 20.7957 2.39547H17.8557L18.6677 1.49947V7.16947Z'
        fill='white'
      />
    </svg>
  );
};

export const RedrobPayDisabled: FC<IconsProps> = (props: IconsProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='12'
      viewBox='0 0 11 12'
      fill='none'
      {...props}
    >
      <path
        d='M8.50002 1.38942L8.50002 5.97881C8.48863 4.33171 7.14988 3 5.5001 3C3.84325 3 2.5001 4.34314 2.5001 6L2.5 11.5H0L5.95627e-07 5.99998C1.18658e-05 2.96242 2.46254 0.5 5.5001 0.5C6.60685 0.5 7.63726 0.826902 8.50002 1.38942Z'
        fill='#B0BBC9'
      />
      <path
        d='M8.49989 6C8.49989 7.65685 7.15683 9 5.49998 9C3.84703 9 2.50631 7.66318 2.5 6.01171L2.5 10.6105C3.36277 11.1731 4.3932 11.5 5.49998 11.5C8.53754 11.5 11 9.03756 11 6L10.9999 0.5L8.49989 0.5L8.49989 6Z'
        fill='#677990'
      />
    </svg>
  );
};

export const DoubleStarIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.4012 13.8019V13.7991C16.7861 13.7344 13.8677 10.8155 13.8039 7.2002H13.802C13.7383 10.8168 10.818 13.7365 7.20117 13.7993V13.801C10.818 13.8638 13.7383 16.7836 13.802 20.4002H13.8039C13.868 16.7852 16.7863 13.8665 20.4012 13.8019Z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.20045 10.8006C7.16631 8.82725 5.57296 7.23394 3.59961 7.19988V7.19948C5.57245 7.16553 7.16553 5.57315 7.20061 3.60059H7.20176C7.23683 5.5721 8.82823 7.16383 10.7996 7.19942V7.20178C8.82824 7.23738 7.23684 8.82909 7.20176 10.8006H7.20045Z'
      fill='currentColor'
    />
  </svg>
);
export const RetryIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 4C8.27614 4 8.5 3.77614 8.5 3.5C8.5 3.22386 8.27614 3 8 3V4ZM12.5 8.5C12.5 10.9853 10.4853 13 8 13V14C11.0376 14 13.5 11.5376 13.5 8.5H12.5ZM8 13C5.51472 13 3.5 10.9853 3.5 8.5H2.5C2.5 11.5376 4.96243 14 8 14V13ZM3.5 8.5C3.5 6.01472 5.51472 4 8 4V3C4.96243 3 2.5 5.46243 2.5 8.5H3.5ZM10.9764 5.12487C11.9115 5.95016 12.5 7.15604 12.5 8.5H13.5C13.5 6.85723 12.7791 5.3822 11.6381 4.37513L10.9764 5.12487Z'
      fill='#217BBB'
    />
    <path
      d='M11 7.5V4.5H14'
      stroke='#217BBB'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export const AverageTenureIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3 3.5L3 13.5H13'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.5 8.5V13.5' stroke='currentColor' strokeLinecap='round' />
    <path d='M8.5 6.5L8.5 13.5' stroke='currentColor' strokeLinecap='round' />
    <path d='M11.5 4.5L11.5 13.5' stroke='currentColor' strokeLinecap='round' />
  </svg>
);
export const CurrentTenureIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='8' cy='8.5' r='5.5' stroke='currentColor' />
    <path
      d='M11 8C10.7239 8 10.5 8.22386 10.5 8.5C10.5 8.77614 10.7239 9 11 9V8ZM13 8H11V9H13V8Z'
      fill='currentColor'
    />
    <path
      d='M5 8C5.27614 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.27614 9 5 9V8ZM3 8H5V9H3V8Z'
      fill='currentColor'
    />
    <path
      d='M8.5 11.5C8.5 11.2239 8.27614 11 8 11C7.72386 11 7.5 11.2239 7.5 11.5H8.5ZM8.5 13.5V11.5H7.5V13.5H8.5Z'
      fill='currentColor'
    />
    <path
      d='M8.5 5.5C8.5 5.77614 8.27614 6 8 6C7.72386 6 7.5 5.77614 7.5 5.5H8.5ZM8.5 3.50002V5.5H7.5V3.50002H8.5Z'
      fill='currentColor'
    />
  </svg>
);

export const RedrobAvatarIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <rect x='0.25' y='0.25' width='15.5' height='15.5' rx='1.75' fill='white' />
    <rect
      x='0.25'
      y='0.25'
      width='15.5'
      height='15.5'
      rx='1.75'
      stroke='#ECEFF2'
      strokeWidth='0.5'
    />
    <rect x='3' y='3' width='10' height='10' fill='url(#pattern0_230_3364)' />
    <defs>
      <pattern
        id='pattern0_230_3364'
        patternContentUnits='objectBoundingBox'
        width='1'
        height='1'
      >
        <use
          xlinkHref='#image0_230_3364'
          transform='translate(-0.0416667) scale(0.0104167)'
        />
      </pattern>
      <image
        id='image0_230_3364'
        width='104'
        height='96'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABgCAYAAADxTzfMAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAf5SURBVHgB7Z1dbBRVFMcPAsWWslsoAZRtayBUQmExgcR2AROQiC08aABBPtQEAwqJgRhjJCHEaDAEjIRE/Eh4UoxgE3hoCxiFByitCT6wbQlCINKuIg0L3VraUEr0/qcZ0nY/urM75947k/kl88Cy252Z35xzz/2Y2RH/CcgBxGKdFG65TE1NLXQzEqHWNrG1RozXO2IxinV2Dnq/3+ejAr+fiosD5Pf7qLgoQCWBAM2ZU0bBslnGa9mw63gTRe/3kt0c2jBv0L9HkabgxNec/JnOXWig8/WNdLOtzdrnhTBsyT4XnF1Gc2bPokWhcrFVGCJ1RCtBkHLkx5+o5pQQU99AnISbW4wN3wcWLaig9WtWaSdLC0HnLjTSZ/u+YJeSch/Ed5vfv6JqmZC1mlZUvkSqeYIUgWg59M1hKpu3gKpeeU2pnKHU1J2m1998W+xb6HGEqUKJoH4xIfpw18eisbfWtsgEhcg7772vVJRUQUhliBiIGVp16YxKUSNklNkohyGl5uRpcgPr166mnHkrqW/kGLKboWU2ewThigstedk1cgCOKSb6XjJgq+JQBKAy+/Lbw+SROSyCkNIqX12jdQHgFGxPcRiKQUrz5NiDrYKM9ubFSkdVaLpjmyD0bVCKetiLLYIgB2W0h/1kLQhpzZPDR1aCUBB4aY2XjAWhlF771mby4CUjQeiEev0cOWQkCCMEnhw5WBaEosAbvpGHpaEetDt79h0g3Sjw+8jv8w96LdYZo46Y8zvMlgTt2a8+tUHG8splxsqchQsqqASrdnyJV+hgRCPcfFlcWG3GXNR5sd1sdVZqTlsQUpuqWUVIWbcWawSWGatw0gXijPeLDXM4AKJwHLVi+sMJEZa2IBWpDWLe3byJtm3ZlDRKrNK/zKpcZIId9L0Q9cPRaq2jKq0iAVec7NS2VUhp/v0C7fxgh21yBoKFjPjbdceP0lZxEehKWoJkRg/alLoTx2jvJ7tZxAwFovZ+uptaxMVQUlxEujGsIJnRg3ai/swpS+2MXUBU/a8nH7dVujCsIFnR85FIN18f/FxK1CQD67WxD9gXXUgpCAv4ZEQPTshOjU4K9kUXSSkFHTlWTdzoJsdEF0lJBWHUABHECfK9jnJMsG+q26SkgnDbByeo1lA96Q6qSZXVXVJBR47ypre648eUFgTpgsLhq4P7SRUJBSG9cd5tgE4oylqngHuGVHVmEwriTG9Ibds07rknwxjR8MuP+CSCGomLdWtWOyp6TCBHRRQlFNTU3EIc4CA3aNZTtwIiX3YUxQky7qYWcygcYLrAidFjAjm4NVImcYJwqzsXuo1zZcKKKrn3rcYLauJJbygOVAyC2g0qOplpLk4QbvfjYKE4MLeAVC2LeEERHkFuiB6TRRIvtoRFAgfFGk6GZUpw9iySRXwEtfJEEFbhuAWZlWicoI5O+2+ORaOqohfORf/x+EkGUlKcEwZFreL3jSMZKHsUjEd6eII0xxOkOVIE9Tx8RG6D45hyc0bGvSZHUO8j6u51jySu48lTJQjcvf+A3ELbvW7ioHBs/MOZpAm6evtfcgt3GR4mC55UGUGRez3kFq7+w3OxFY7NiXtNmqBLbR3kFq61MwnKVygIDasb0hyOIdrFk+IC4/PiXpPaD3JDFDVejxIXygU13og6utxG5IQjPBdZYEKe2jIbIM2dvXKbnArnBRYoyE34uvShnjNX2h0ZRYiexht3iIvSKYlHx6ULQhTVhf8mp3FWXFhcxQGYMUkTQQBR5KSKDmLOMKbm0snjEpbYQNlo9ncNfzoi1WEfD/zyB3FSPr0w6f8pE4Srsvqi/k/9wD5ypjaQLL0BpfNBqIpqw7dIV7Bv2EdOgkUFSdMbUD5hVysKBh0lYZ9qJRQzoRTpDWgxo6qbJFlyCvPHUDBQkPI92vwCF05ItOsBrZpflLBHLQMUBNUXI6z9nYEsDz417Hu0+ok05HuMFG9f+mzKvMwByn5UltwFgQmip3xa4bDv0+5HBnGCdp1ooiUzJ9HimZPZRXUbHedbrP2cRKQTPUDbX4FEZ/aSGJgsnzbRuNLsFtVtjAu2G2ODsvtj6UYP0FYQQDShbcJJRGOKDh163dmAVIZpj98UjqynGz1Aa0EmOJFon7AhktCxw+DiBDFFjDmUZEUFPofFKtdudxkLPcJCjOrRC0ROutEDHCFoIIiqaFd0UAcSgnJHDz6Unod92g0lIbUtDz5t6TOOE5SIboesu0Nqs9qWekt/JbFYVKVWUpuJJ0gCmaQ2E08QM5CzfWlpxqMjniBmtrwwPas+nCeIkY2hEgpMyKVs8AQxsWp+gCrEKEi2eIIYgJwlYhzRDlzRD9IJpDU7IsfEE2QTeTmjjGot2zZnKJ4gGzBLaY6pEU9QlmCEAJ1QrllgT1CGIKWtnD/V1vYmEVIE4e5ljENxL2GSxVwxN4W1EzKm5eUIGj2S3gg9Y8zhYMUMFoc4EbQ1GytKsp40tILUFGdOVpkLFp0iCumsKjjFtr6NFZS0QU4RhYjB4pXnxb6qWgqmtEgwRWGNAGTpcovkDJHCMLkmM5UlQ4sqbm5RgbFhOhvr4hquR+ma5NtTIOU5sQ8qoyURWpXZqIoK8/ujypSFZxLgGQsRm5/ugad6zJiST6WTxhkL2HWSMhBt+0EDZQGsOYCkv4SsO6LNwtM+jFU7QiQebNTd2zfo82jYUT2ixMffwgqgiaJNmTo+N+VKIN34Hy4IQC89MOYhAAAAAElFTkSuQmCC'
      />
    </defs>
  </svg>
);

export const LockIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='3.75'
      y='7.5'
      width='12.5'
      height='8.75'
      stroke='#677990'
      strokeWidth='1.25'
      strokeLinejoin='round'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M10 1.875C8.27411 1.875 6.875 3.27411 6.875 5V7.5H8.125V5C8.125 3.96447 8.96447 3.125 10 3.125C11.0355 3.125 11.875 3.96447 11.875 5V7.5H13.125V5C13.125 3.27411 11.7259 1.875 10 1.875Z'
      fill='#677990'
    />
    <circle cx='10' cy='11.25' r='1.25' fill='#677990' />
    <path
      d='M9.375 13.75C9.375 14.0952 9.65482 14.375 10 14.375C10.3452 14.375 10.625 14.0952 10.625 13.75H9.375ZM9.375 11.25V13.75H10.625V11.25H9.375Z'
      fill='#677990'
    />
  </svg>
);
export const CompanyIcon: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.5 2.5H8V13.5H2.5V2.5Z'
      stroke='#217BBB'
      strokeWidth='0.999764'
      strokeLinejoin='round'
    />
    <path
      d='M8 6.5H13.5V13.5H8V6.5Z'
      stroke='#217BBB'
      strokeWidth='0.999764'
      strokeLinejoin='round'
    />
    <mask id='path-3-inside-1_1054_52551' fill='white'>
      <path d='M4 5H6.5V6H4V5Z' />
    </mask>
    <path
      d='M4 5V4H3V5H4ZM6.5 5L7.5 5V4L6.5 4V5ZM6.5 6V7H7.5V6L6.5 6ZM4 6H3V7H4L4 6ZM4 6H6.5V4H4V6ZM5.5 5V6L7.5 6V5L5.5 5ZM6.5 5H4L4 7H6.5V5ZM5 6V5H3V6H5Z'
      fill='#217BBB'
      mask='url(#path-3-inside-1_1054_52551)'
    />
    <mask id='path-5-inside-2_1054_52551' fill='white'>
      <path d='M4 7H6.5V8H4V7Z' />
    </mask>
    <path
      d='M4 7V6H3V7H4ZM6.5 7L7.5 7V6L6.5 6V7ZM6.5 8V9H7.5V8H6.5ZM4 8H3V9H4L4 8ZM4 8H6.5V6H4V8ZM5.5 7V8H7.5V7L5.5 7ZM6.5 7H4L4 9H6.5V7ZM5 8V7H3V8H5Z'
      fill='#217BBB'
      mask='url(#path-5-inside-2_1054_52551)'
    />
    <mask id='path-7-inside-3_1054_52551' fill='white'>
      <path d='M4 9H6.5V10H4V9Z' />
    </mask>
    <path
      d='M4 9V8H3V9H4ZM6.5 9H7.5V8H6.5V9ZM6.5 10V11H7.5V10H6.5ZM4 10H3V11H4L4 10ZM4 10H6.5V8H4V10ZM5.5 9V10H7.5V9H5.5ZM6.5 9H4L4 11H6.5V9ZM5 10V9H3V10H5Z'
      fill='#217BBB'
      mask='url(#path-7-inside-3_1054_52551)'
    />
    <mask id='path-9-inside-4_1054_52551' fill='white'>
      <path d='M9.5 9H12V10H9.5V9Z' />
    </mask>
    <path
      d='M9.5 9V8H8.5V9H9.5ZM12 9H13V8H12V9ZM12 10V11H13V10H12ZM9.5 10H8.5V11H9.5V10ZM9.5 10H12V8H9.5V10ZM11 9V10H13V9H11ZM12 9H9.5V11H12V9ZM10.5 10V9H8.5V10H10.5Z'
      fill='#217BBB'
      mask='url(#path-9-inside-4_1054_52551)'
    />
    <mask id='path-11-inside-5_1054_52551' fill='white'>
      <path d='M9.5 11H12V12H9.5V11Z' />
    </mask>
    <path
      d='M9.5 11V10H8.5V11H9.5ZM12 11H13V10H12V11ZM12 12V13H13V12H12ZM9.5 12H8.5V13H9.5V12ZM9.5 12H12V10H9.5V12ZM11 11V12H13V11H11ZM12 11H9.5V13H12V11ZM10.5 12V11H8.5V12H10.5Z'
      fill='#217BBB'
      mask='url(#path-11-inside-5_1054_52551)'
    />
    <mask id='path-13-inside-6_1054_52551' fill='white'>
      <path d='M4 11H6.5V12H4V11Z' />
    </mask>
    <path
      d='M4 11V10H3V11H4ZM6.5 11H7.5V10H6.5V11ZM6.5 12V13H7.5V12H6.5ZM4 12H3V13H4L4 12ZM4 12H6.5V10H4V12ZM5.5 11V12H7.5V11H5.5ZM6.5 11H4L4 13H6.5V11ZM5 12V11H3V12H5Z'
      fill='#217BBB'
      mask='url(#path-13-inside-6_1054_52551)'
    />
  </svg>
);
export const Person: FC<IconsProps> = (props: IconsProps) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.5 2.5H8V13.5H2.5V2.5Z'
      stroke='#217BBB'
      strokeWidth='0.999764'
      strokeLinejoin='round'
    />
    <path
      d='M8 6.5H13.5V13.5H8V6.5Z'
      stroke='#217BBB'
      strokeWidth='0.999764'
      strokeLinejoin='round'
    />
    <mask id='path-3-inside-1_1054_52551' fill='white'>
      <path d='M4 5H6.5V6H4V5Z' />
    </mask>
    <path
      d='M4 5V4H3V5H4ZM6.5 5L7.5 5V4L6.5 4V5ZM6.5 6V7H7.5V6L6.5 6ZM4 6H3V7H4L4 6ZM4 6H6.5V4H4V6ZM5.5 5V6L7.5 6V5L5.5 5ZM6.5 5H4L4 7H6.5V5ZM5 6V5H3V6H5Z'
      fill='#217BBB'
      mask='url(#path-3-inside-1_1054_52551)'
    />
    <mask id='path-5-inside-2_1054_52551' fill='white'>
      <path d='M4 7H6.5V8H4V7Z' />
    </mask>
    <path
      d='M4 7V6H3V7H4ZM6.5 7L7.5 7V6L6.5 6V7ZM6.5 8V9H7.5V8H6.5ZM4 8H3V9H4L4 8ZM4 8H6.5V6H4V8ZM5.5 7V8H7.5V7L5.5 7ZM6.5 7H4L4 9H6.5V7ZM5 8V7H3V8H5Z'
      fill='#217BBB'
      mask='url(#path-5-inside-2_1054_52551)'
    />
    <mask id='path-7-inside-3_1054_52551' fill='white'>
      <path d='M4 9H6.5V10H4V9Z' />
    </mask>
    <path
      d='M4 9V8H3V9H4ZM6.5 9H7.5V8H6.5V9ZM6.5 10V11H7.5V10H6.5ZM4 10H3V11H4L4 10ZM4 10H6.5V8H4V10ZM5.5 9V10H7.5V9H5.5ZM6.5 9H4L4 11H6.5V9ZM5 10V9H3V10H5Z'
      fill='#217BBB'
      mask='url(#path-7-inside-3_1054_52551)'
    />
    <mask id='path-9-inside-4_1054_52551' fill='white'>
      <path d='M9.5 9H12V10H9.5V9Z' />
    </mask>
    <path
      d='M9.5 9V8H8.5V9H9.5ZM12 9H13V8H12V9ZM12 10V11H13V10H12ZM9.5 10H8.5V11H9.5V10ZM9.5 10H12V8H9.5V10ZM11 9V10H13V9H11ZM12 9H9.5V11H12V9ZM10.5 10V9H8.5V10H10.5Z'
      fill='#217BBB'
      mask='url(#path-9-inside-4_1054_52551)'
    />
    <mask id='path-11-inside-5_1054_52551' fill='white'>
      <path d='M9.5 11H12V12H9.5V11Z' />
    </mask>
    <path
      d='M9.5 11V10H8.5V11H9.5ZM12 11H13V10H12V11ZM12 12V13H13V12H12ZM9.5 12H8.5V13H9.5V12ZM9.5 12H12V10H9.5V12ZM11 11V12H13V11H11ZM12 11H9.5V13H12V11ZM10.5 12V11H8.5V12H10.5Z'
      fill='#217BBB'
      mask='url(#path-11-inside-5_1054_52551)'
    />
    <mask id='path-13-inside-6_1054_52551' fill='white'>
      <path d='M4 11H6.5V12H4V11Z' />
    </mask>
    <path
      d='M4 11V10H3V11H4ZM6.5 11H7.5V10H6.5V11ZM6.5 12V13H7.5V12H6.5ZM4 12H3V13H4L4 12ZM4 12H6.5V10H4V12ZM5.5 11V12H7.5V11H5.5ZM6.5 11H4L4 13H6.5V11ZM5 12V11H3V12H5Z'
      fill='#217BBB'
      mask='url(#path-13-inside-6_1054_52551)'
    />
  </svg>
);
