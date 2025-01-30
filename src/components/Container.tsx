// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
type ContainerProps = {
  /** Additional classNames to be added to the style */
  className?: string;
  /** The content wrapped by the component. */
  children?: ReactNode;
  /** If `true`, the left and right padding is removed. */
  disableGutters?: boolean;
  /** Determine the max-width of the container. The container width grows with the size of the screen. */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'modal' | 'none';
};

const Container: FC<ContainerProps> = (props: ContainerProps) => {
  /** props - states */
  const { className, children, disableGutters, maxWidth = 'lg' } = props;

  /** consts - clsx */
  const rootClasses = clsx({
    'max-w-[360px]': maxWidth === 'xs',
    'max-w-[680px]': maxWidth === 'sm',
    'max-w-[900px]': maxWidth === 'md',
    'max-w-[1440px]': maxWidth === 'lg',
    'max-w-[1920px]': maxWidth === 'xl',
    'max-w-[600px]': maxWidth === 'modal',
    'max-w-none': maxWidth === 'none',
    'mx-auto': true,
    ' px-4 md:px-6 lg:px-8': !disableGutters,
    [className as string]: className,
  });

  return (
    // todos - implement maxWidth as tailwind theme
    <div className={rootClasses}>{children}</div>
  );
};

export default Container;
