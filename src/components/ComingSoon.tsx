'use client';

// Standard packages
import Image from 'next/image';

// Third-party packages
import { useTranslation } from 'react-i18next';

export default function ComingSoon() {
  /** useTranlation hook */
  const { t } = useTranslation('common');
  return (
    <section className='text-center h-[calc(100vh-66px)] w-full flex flex-col justify-center items-center'>
      <Image
        alt='comming-soon'
        src={'/app/images-jp/comming-soon.svg'}
        height={151}
        width={265}
      />
      <h3 className='text-h3_bold pb-4 pt-10'>{t('comingSoon.title')}</h3>
      <div>
        <p className='text-bodyS_regular'>{t('comingSoon.cont1')}</p>
        <p className='text-bodyS_regular'>{t('comingSoon.cont2')}</p>
      </div>
    </section>
  );
}
