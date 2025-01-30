// Standard packages
import { FC } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
type ProgressLinearProps = {
  /** If present, apply additional classNames to the root */
  className?: string;
  /** Decides how much of the linear progress bar should fill */
  value?: number;
};

const ProgressLinear: FC<ProgressLinearProps> = (
  props: ProgressLinearProps,
) => {
  /** props */
  const { className, value = 0 } = props;

  /** consts - clsx */
  const rootClasses = clsx([
    'w-full',
    'bg-gray-200',
    'rounded-full',
    'h-2.5',
    'dark:bg-gray-700',
    { [className as string]: className },
  ]);

  return (
    <div className={rootClasses}>
      <div
        className='bg-primary h-2.5 rounded-full animate-pulse'
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressLinear;
