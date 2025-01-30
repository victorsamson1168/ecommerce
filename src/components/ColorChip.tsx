// Standard packages
import { ReactNode } from 'react';
/** Third-party hooks */
import clsx from 'clsx';

/** Custom hooks */

// PropTypes
type ColorChipProp = {
  /** 아이콘 */
  endAdornment?: ReactNode;
  /** chip 컬러 */
  variant?:
    | 'accent'
    | 'primary'
    | 'secondary'
    | 'grayscale'
    | 'positive'
    | 'negative';
  /** chip text */
  text: string;
};

export default function ColorChip(props: ColorChipProp) {
  /** props - state */
  const { variant = 'grayscale', text, endAdornment } = props;

  return (
    <div
      className={clsx(
        'inline-flex flex-row items-center gap-0.5 py-1 px-2 rounded',
        {
          'bg-accent bg-opacity-[24%]': variant === 'accent',
          'bg-primary bg-opacity-[24%]': variant === 'primary',
          'bg-[#CCF88E3D] bg-opacity-[24%] ': variant === 'secondary',
          'bg-grayscale_700 bg-opacity-[24%]': variant === 'grayscale',
          'bg-secondary_400': variant === 'positive',
          'bg-accent_400': variant === 'negative',
        }
      )}
    >
      {endAdornment && endAdornment}
      <span
        className={clsx([
          'text-caption_semibold',
          {
            'text-accent_400': variant === 'accent' && !endAdornment,
            'text-primary_300': variant === 'primary' && !endAdornment,
            'text-secondary_400': variant === 'secondary' && !endAdornment,
            'text-grayscale_700': variant === 'grayscale' && !endAdornment,
            'text-white': variant === 'negative' || variant === 'positive',
          },
        ])}
      >
        {text}
      </span>
    </div>
  );
}
