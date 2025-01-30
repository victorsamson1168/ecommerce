// Standard packages
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <Image
        alt={t('not_found.imageAlt', { ns: 'common' })}
        src={'/app/images-jp/not-found.svg'}
        height={140}
        width={433}
        className='w-[199px] h-[64px] md:w-[433px] md:h-[140px]'
      />
      <div className='text-center pb-10'>
        <h3 className='text-h3_bold text-grayscale_900 pt-10 pb-4'>
          {t('not_found.heading', { ns: 'common' })}
        </h3>
        <p>{t('not_found.description1', { ns: 'common' })}</p>
        <p>{t('not_found.description2', { ns: 'common' })}</p>
      </div>
      <Link href='/' passHref>
        <button className='btn btn-primary btn-large'>
          {t('not_found.buttonText', { ns: 'common' })}
        </button>
      </Link>
    </div>
  );
}
