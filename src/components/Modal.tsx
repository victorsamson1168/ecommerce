'use client';

// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Backdrop from './Backdrop';
import ClickAwayListener from './ClickAwayListener';
import Container from './Container';
import { CloseIcon } from './Icons';

// PropTypes
interface ModalProps {
  /** Modal children */
  children: ReactNode;
  /** If `true`, remove padding from the sides */
  disableGutters?: boolean;
  /** If present, display a modal header */
  title?: string;
  /** Determine the max-width of the container. The container width grows with the size of the screen. */
  maxModalWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'modal';
  /** show cross button */
  crossButton?: boolean;
  /** Callback triggered when the modal is closing */
  onClose?: () => void;
  /** send true if don't want to shift to left */
  isShiftedRight?: boolean;
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
  /** props - state */
  const {
    children,
    disableGutters,
    title,
    crossButton,
    maxModalWidth = 'modal',
    isShiftedRight = false,
  } = props;

  /** props - action */
  const { onClose } = props;

  /** custom handlers */
  const handleClose = () => onClose && onClose();

  /** consts */
  const modalClasses = clsx('bg-white', 'rounded', 'w-full', 'h-fit', {
    'p-6': !disableGutters,
  });

  return (
    <Backdrop className='!z-[9999999]' isShiftedRight={isShiftedRight}>
      <Container
        className='h-screen flex   items-center flex-col justify-center'
        maxWidth={maxModalWidth}
      >
        <ClickAwayListener
          onClickAway={event => {
            if (event.type === 'click') {
              handleClose();
            }
          }}
        >
          <div className={modalClasses}>
            {
              <>
                <div className='flex justify-between'>
                  <div>
                    {title && (
                      <h4 className='text-h4_bold text-grayscale_900 pb-4'>
                        {title}
                      </h4>
                    )}
                  </div>
                  {crossButton && (
                    <CloseIcon className='cursor-pointer' onClick={onClose} />
                  )}
                </div>
              </>
            }
            {children}
          </div>
        </ClickAwayListener>
      </Container>
    </Backdrop>
  );
};

export default Modal;
