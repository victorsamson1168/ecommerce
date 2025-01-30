// Standard packages
import React, { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
interface PaperProps {
  /** Paper children */
  children: ReactNode;
  /** Paper className */
  className: string;
}

const Paper: FC<PaperProps> = (props: PaperProps) => {
  /** props */
  const { children, className } = props;

  /** consts */
  const rootClasses = clsx({
    [className]: className,
    border: true,
    'border-gray_200': true,
    'bg-white': true,
    rounded: true,
    'p-6': true,
  });

  return <div className={rootClasses}>{children}</div>;
};

export default Paper;
