// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages

// Custom packages

// PropTypes
export type GradientInputWrapperProps = {
  children: ReactNode;
};

const GradientInputWrapper: FC<GradientInputWrapperProps> = (
  props: GradientInputWrapperProps
) => {
  /** props - state */
  const { children } = props;

  return (
    <div className='gradient-border-wrapper'>
      <div className='gradient-border-input'>{children}</div>
    </div>
  );
};

export default GradientInputWrapper;
