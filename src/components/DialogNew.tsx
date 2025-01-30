'use client';

// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { useTranslation } from 'react-i18next';
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

  disableConfirm?: boolean;

  /* disables the destroy button when the dialog is opened in the destroy mode. */
  disableDestroy?: boolean;
  onCrossClick?: () => void;

  disableCancel?: boolean;

  showCloseIcon?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'modal';
  hideActionButton?: boolean;

  /** if true, show black confirm button */
  blackConfirm?: boolean;
}

const DialogNew: FC<DialogProps> = (props: DialogProps) => {
  /** custom hooks */
  const { t } = useTranslation();

  /** props - state */
  const {
    children,
    disableGutters,
    title,
    verticalActions,
    labelCancel = t('buttons.cancel', { ns: 'common' }),
    labelConfirm = t('buttons.confirm', { ns: 'common' }),

    labelDestroy = 'Delete',
    disableConfirm,
    disableCancel,
    buttonTopPadding = 'pt-10',
    showCloseIcon,
    maxWidth,
    hideActionButton = false,
    blackConfirm = true,
    disableDestroy,
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
    }
  );

  return (
    <Backdrop>
      <Container
        className='h-screen flex flex-col justify-center'
        maxWidth={maxWidth ?? 'modal'}
        disableGutters
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
                  'flex gap-x-4 justify-end',
                  {
                    'flex-col-reverse': verticalActions,
                  },
                  buttonTopPadding
                )}
              >
                {onCancel && (
                  <Button
                    variant={verticalActions ? 'tertiary' : 'tertiary'}
                    size='large'
                    onClick={handleCancel}
                    disabled={disableCancel}
                    className='!text-bodyS_semibold !text-grayscale_600'
                  >
                    {labelCancel}
                  </Button>
                )}
                {onConfirm && (
                  <Button
                    variant={'primary'}
                    size='large'
                    onClick={handleConfirm}
                    disabled={disableConfirm}
                    className='!text-bodyS_semibold !text-grayscale_text_white'
                  >
                    {labelConfirm}
                  </Button>
                )}
                {onDestroy && (
                  <Button
                    disabled={disableDestroy}
                    variant='destructive'
                    size='large'
                    // duration is et 0 here to avoid a glitch in the UI transition. will address this later.
                    className='!duration-0'
                    onClick={handleDestroy}
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

export default DialogNew;
