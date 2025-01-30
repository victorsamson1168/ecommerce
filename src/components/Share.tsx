'use client';

// Standard packages

// Third-party packages
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

// Custom packages
import Button from './Button';
import Modal from './Modal';

// PropTypes
type ShareProps = {
  /** Link to be shared on the clipboard */
  link: string;
  /** Callback triggered when the modal is closing */
  onClose?: () => void;
};

export const Share = (props: ShareProps) => {
  /** props - states */
  const { link } = props;

  /** props - action */
  const { onClose } = props;

  /** consts - clsx */
  const inputClasses = clsx(
    'cursor-pointer',
    'textarea',
    'w-full',
    'ring-0',
    'focus:ring-0',
    'shadow-none',
    'focus:shadow-none',
    'focus:outline-none',
    'border-none',
    'focus:border-none'
  );

  /** third-party hook */
  const { t } = useTranslation();
  const pathname = usePathname();

  /** custom handlers */
  const handleShare = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        handleClose();
        enqueueSnackbar(t('notistack.link_copy_success', { ns: 'common' }), {
          variant: 'success',
        });
      })
      .catch(err => {
        enqueueSnackbar(t('notistack.link_copy_fail', { ns: 'common' }), {
          variant: 'error',
        });
      });
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  /** utility function  */

  const getTitle = () => {
    if (pathname.includes('skill-test')) {
      return t('buttons.share_assess', { ns: 'common' });
    }
    if (pathname.includes('hire')) {
      return t('buttons.share_hire', { ns: 'common' });
    }
    return 'Share Jobs';
  };

  return (
    <Modal title={getTitle()} onClose={handleClose}>
      <div className='pb-2 text-label_medium'>
        {t('buttons.copy', { ns: 'common' })}
      </div>
      <input
        onClick={handleShare}
        className={inputClasses}
        readOnly
        value={link}
      />
      <div className='flex gap-x-4 w-full mt-10'>
        <div className='w-1/2'>
          <Button
            variant='secondary-black'
            size='large'
            className='w-full'
            onClick={handleClose}
          >
            {t('buttons.cancel', { ns: 'common' })}
          </Button>
        </div>
        <div className='w-1/2'>
          <Button
            variant='primary-black'
            size='large'
            className='w-full'
            onClick={handleShare}
          >
            {t('buttons.copy', { ns: 'common' })}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
