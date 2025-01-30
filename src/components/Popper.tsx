// Standard packages
import { FC, ReactNode } from 'react';

// Third party packages

// Custom packages
import ClickAwayListener from './ClickAwayListener';

interface PopperProps {
  /** Popper children */
  children: ReactNode;
  /** Callback triggered when clicked outside */
  onClose: () => void;
}

const Popper: FC<PopperProps> = (props: PopperProps) => {
  /** props - state */
  const { children } = props;
  /** props - action */
  const { onClose } = props;

  /** custom handlers */
  const handleClose = (e?: React.MouseEvent<HTMLDivElement>) => {
    e?.preventDefault();
    e?.stopPropagation();
    onClose();
  };

  return (
    <ClickAwayListener onClickAway={() => handleClose()}>
      <div>{children}</div>
    </ClickAwayListener>
  );
};

export default Popper;
