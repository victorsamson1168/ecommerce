// Standard packages
import Image from 'next/image';
import { FC } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
type FooterProps = {};

const Footer: FC<FooterProps> = () => {
  return (
    <footer
      className={clsx([
        'bg-slate-50',
        'h-[68px]',
        'border-t',
        'grid',
        'place-content-center',
        'py-[22px]',
        'select-none',
        'w-full',
      ])}
    >
      <div className='flex flex-row space-x-2 items-center'>
        <span className='text-caption_regular text-grayscale_900'>
          Powered by
        </span>
        <Image
          src={'/app/images-jp/logo-grayscale.svg'}
          width={112}
          height={22.83}
          alt={''}
        />
      </div>
    </footer>
  );
};

export default Footer;
