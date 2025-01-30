'use client';

// Standard packages
import Image from 'next/image';

// Third-party packages
import { useTranslation } from 'react-i18next';

export default function Empty() {
  /** useTranlation hook */
  const { t } = useTranslation('common');

  return (
    <div className='flex flex-col items-center text-bodyL_medium py-20 gap-y-[24px]'>
      <Image
        alt='assessment-empty'
        src={'/app/images-jp/assessment-empty.svg'}
        height={104}
        width={147}
      />
      <p className='text-bodyS_regular'>{t('empty')}</p>
    </div>
  );
}
