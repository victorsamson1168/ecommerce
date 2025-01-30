// Standard packages
import { FC } from 'react';

// Third-party packages
import clsx from 'clsx';
import { PersonIcon } from './Icons';

// Custom packages

// PropTypes
export type AvatarProps = {
  /** Text displayed when the src image is missing */
  alt: string;
  /** Image displayed if present */
  src?: string;
  /** Avatar size: small (16px) | medium (32px) | large (48px) | x-large (64px) */
  size?: 'small' | 'medium' | 'large' | 'x-large';
  /** Avatar variant: circle | rounded | square  */
  variant?: 'circle' | 'rounded' | 'square';
};

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  /** props - state */
  const { alt, src, size = 'small', variant = 'rounded' } = props;

  /** consts */
  const variantClasses = clsx('text-grayscale_500', {
    'h-4 w-4 text-[8px]': size === 'small',
    'h-8 w-8 text-[16px]': size === 'medium',
    'h-12 w-12 text-[24px]': size === 'large',
    'h-16 w-16 text-[32px]': size === 'x-large',
    'rounded ': variant === 'rounded',
    'rounded-none': variant === 'square',
    'rounded-full': variant === 'circle',
  });

  // Return letter-based avatar if no source is specified
  if (!src && variant === 'rounded') {
    return (
      <div
        className={clsx([
          'border',
          'border-grayscale_300',
          'bg-white',
          'font-bold',
          'items-center',
          'justify-center',
          'flex',
          'shrink-0',
          variantClasses,
        ])}
      >
        <PersonIcon
          className={clsx([
            {
              'h-6 w-6': size === 'large',
            },
            {
              'h-9 w-9': size === 'x-large',
            },
          ])}
        />
      </div>
    );
  }
  if (!src && variant === 'circle') {
    return (
      <img
        onError={() => {}}
        src={'/app/images-jp/profile.svg'}
        height={64}
        width={64}
        className={clsx(variantClasses, 'object-cover', 'border')}
        alt={'redrob user'}
      />
    );
  }
  // Return iamge-based avatar if source is specified
  return (
    <div
      className={clsx(
        variantClasses,
        'border border-grayscale_200 bg-white overflow-hidden select-none shrink-0'
      )}
    >
      <img
        className={clsx(variantClasses, 'object-cover')}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
