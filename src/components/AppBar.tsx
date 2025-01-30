'use client';

// Standard packages
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';

// Third-party packages
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

//  Custom packages
import Button from './Button';
import { MainLogoIcon } from './Icons';

// PropTypes
type AppBarProps = {};

const AppBar: FC<AppBarProps> = () => {
  /** third-party hooks */
  const { t } = useTranslation();
  const params = useSearchParams();

  return (
    <nav
      className={clsx([
        'flex',
        'justify-between',
        'items-center',
        'py-3',
        'px-8',
        'bg-white',
        'border-b',
        'sticky',
        'top-0',
        'z-10',
      ])}
    >
      <Link href='/' passHref>
        <MainLogoIcon />
      </Link>

      <div className='flex space-x-3'>
        <Link
          href={{
            pathname: '/app/auth/login',
            query: { next: params.get('next'), exit: params.get('exit') },
          }}
          passHref
        >
          <Button variant='tertiary'>
            {t('buttons.login', { ns: 'common' })}
          </Button>
        </Link>
        <Link
          href={{
            pathname: '/app/auth/signup',
            query: { next: params.get('next'), exit: params.get('exit') },
          }}
          passHref
        >
          <Button>{t('buttons.signup', { ns: 'common' })}</Button>
        </Link>
      </div>
    </nav>
  );
};

export default AppBar;
