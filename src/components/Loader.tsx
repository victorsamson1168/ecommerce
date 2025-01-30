// Standard packages
import { FC } from 'react';

// Third-party packages

// PropTypes
type LoaderProps = { className?: string };

const Loader: FC<LoaderProps> = (props: LoaderProps) => {
  /** props */

  return (
    <svg
      className={'animate-spin ' + props?.className}
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='15' cy='15' r='12' stroke='#C1DDED' strokeWidth='4.8' />
      <path
        d='M3 15C3 21.6274 8.37258 27 15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3'
        stroke='#217BBB'
        strokeWidth='4.8'
      />
    </svg>
  );
};

export default Loader;
