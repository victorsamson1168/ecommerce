// Standard packages
import { FC, ReactNode, useEffect } from 'react';

// Third-party packages
import { openLeftSideNavState } from '@/app/atom';
import clsx from 'clsx';
import { useRecoilValue } from 'recoil';

// PropTypes
type BackdropProps = {
  /** If present, apply additional classNames to the root */
  className?: string;
  /** Content of the Backdrop */
  children?: ReactNode;
  /** If true, set the background opacity to zero */
  popper?: boolean;
  /** if want to disable scroll */
  disableScroll?: boolean;
  /** custom z-index */
  zIndex?: number;
  /** send true if don't want to shift to left */
  isShiftedRight?: boolean;

  /** snap the backdrop to right. avoids the navbar issue. */
  snapToRight?: boolean;
};

const Backdrop: FC<BackdropProps> = (props: BackdropProps) => {
  /** props */
  const {
    className,
    children,
    popper,
    disableScroll = true,
    zIndex = 100,
    isShiftedRight = false,
  } = props;

  /** consts - clsx */
  const rootClasses = clsx(
    'fixed',
    'top-0',
    'left-0',
    '!mt-0',
    // `!z-[${zIndex}]`,
    'w-screen',
    'h-full',
    popper ? 'bg-opacity-[0%]' : 'bg-opacity-[24%]',
    'bg-[#0C151D3D]',
    { [className as string]: className }
  );
  /** thirdh party hooks */

  const openLeftSideNav = useRecoilValue(openLeftSideNavState);

  /** useEffect hooks */

  useEffect(() => {
    if (disableScroll) {
      document.body.style.overflow = 'hidden';
      return enableScroll;
    }
  }, []);

  /** custom handler */
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <div
      className={rootClasses}
      style={{
        zIndex: `${zIndex}`,
        transform: `translateX(${isShiftedRight ? 0 : -openLeftSideNav}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
