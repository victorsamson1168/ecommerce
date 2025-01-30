'use client';

// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Backdrop from './Backdrop';
import Button from './Button';
import ClickAwayListener from './ClickAwayListener';
import Container from './Container';
import { CloseIcon } from './Icons';

// PropTypes
interface DialogProps {
  /** Dialog children */
  children: ReactNode;
  /** If `true`, remove padding from the sides */
  disableGutters?: boolean;
  /** If present, display a modal header */
  title?: string;
  /** If `true`, display label actions as flex-col */
  verticalActions?: boolean;
  /** Callback triggered when the modal is closing */
  onClose?: () => void;
  /** Callback triggered when the cancel action is clicked */
  onCancel?: () => void;
  /** Callback triggered when the confirm action is clicked */
  onConfirm?: () => void;
  /** Callback triggered when the destory action is clicked */
  onDestroy?: () => void;
  /** Label displayed on the cancel action */
  labelCancel?: string;
  /** Label displayed on the confirm action */
  labelConfirm?: string;
  /** Label displayed on the destroy action */
  labelDestroy?: string;
  /** Button's top padding */
  buttonTopPadding?: string;
  /** custom z-index */
  zIndex?: number;

  disableConfirm?: boolean;

  onCrossClick?: () => void;

  disableCancel?: boolean;
  showCloseIcon?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'modal';
  hideActionButton?: boolean;
  /** if true, show black confirm button */
  blackConfirm?: boolean;
}

const Dialog: FC<DialogProps> = (props: DialogProps) => {
  /** props - state */
  const {
    children,
    disableGutters,
    title,
    verticalActions,
    labelCancel = 'Cancel',
    labelConfirm = 'Confirm',
    labelDestroy = 'Delete',
    disableConfirm,
    disableCancel,
    buttonTopPadding = 'pt-10',
    showCloseIcon,
    maxWidth,
    hideActionButton = false,
    blackConfirm = false,
    zIndex = 100,
  } = props;

  /** props - action */
  const { onClose, onCancel, onConfirm, onDestroy, onCrossClick } = props;

  /** custom handlers */
  const handleClose = () => onClose && onClose();
  const handleCancel = () => onCancel && onCancel();
  const handleConfirm = () => onConfirm && onConfirm();
  const handleDestroy = () => onDestroy && onDestroy();
  const handleCrossClick = () => onCrossClick && onCrossClick();

  /** consts */
  const modalClasses = clsx(
    'bg-white',
    'md:rounded',
    'w-full',
    'h-fit',
    'rounded',
    {
      'p-6': !disableGutters,
    },
    'z-[200]'
  );

  return (
    <Backdrop zIndex={zIndex}>
      <Container
        className={`h-screen flex flex-col justify-center z-[${zIndex}]`}
        maxWidth={maxWidth ?? 'modal'}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div className={modalClasses}>
            <div className='flex'>
              {title && (
                <h4 className='text-h4_bold text-grayscale_900 pb-4'>
                  {title}
                </h4>
              )}
              {showCloseIcon && (
                <CloseIcon
                  aria-hidden
                  className=' text-grayscale_700 cursor-pointer ml-auto'
                  onClick={handleCrossClick}
                />
              )}
            </div>
            {children}
            {hideActionButton === false && (
              <div
                className={clsx(
                  'flex  gap-x-4 justify-end',
                  {
                    'flex-col-reverse': verticalActions,
                  },
                  buttonTopPadding
                )}
              >
                {onCancel && (
                  <Button
                    variant={verticalActions ? 'tertiary' : 'tertiary'}
                    size='medium'
                    onClick={handleCancel}
                    // fullWidth={!verticalActions}
                    disabled={disableCancel}
                    className='!text-bodyS_semibold text-black'
                  >
                    {labelCancel}
                  </Button>
                )}
                {onConfirm && (
                  <Button
                    variant={blackConfirm ? 'primary-black' : 'primary'}
                    size='medium'
                    onClick={handleConfirm}
                    // fullWidth={!verticalActions}
                    disabled={disableConfirm}
                    className='!text-bodyS_semibold !text-grayscale_text_white'
                  >
                    {labelConfirm}
                  </Button>
                )}
                {onDestroy && (
                  <Button
                    variant='destructive'
                    size='medium'
                    onClick={handleDestroy}
                    // fullWidth={!verticalActions}
                  >
                    {labelDestroy}
                  </Button>
                )}
              </div>
            )}
          </div>
        </ClickAwayListener>
      </Container>
    </Backdrop>
  );
};

export default Dialog;
