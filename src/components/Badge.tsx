'use client';

// Standard packages
import { useEffect, useState } from 'react';

// Third-party packages
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

// Custom packages
import { StarIcon } from './Icons';

const Badge = () => {
  /** useTranlation hook */
  const { t } = useTranslation();

  /** consts */
  const items = [
    t('tips.tip1', { ns: 'common' }),
    t('tips.tip2', { ns: 'common' }),
    t('tips.tip3', { ns: 'common' }),
  ];

  /** useState hooks */
  const [currentIndex, setCurrentIndex] = useState(0);

  /** useEffect hooks */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
    <div
      className={clsx(
        'bg-opacity-5',
        'border',
        'hidden',
        'md:inline-flex',
        'border-grayscale_600',
        'items-center',
        'ml-[60px]',
        'p-2',
        'rounded'
      )}
    >
      <StarIcon />
      <p className='text-caption_semibold pl-1'>{items[currentIndex]}</p>
    </div>
  );
};

export default Badge;
