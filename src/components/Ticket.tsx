// Standard packages
import Image from 'next/image';

// Third-party packages
import clsx from 'clsx';

// Third party packages

type TicketProps = {
  /** Ticket text */
  text: string;
  /** If `true` badge icon appeared */
  badge?: boolean;
  /** Ticket variant */
  variant?: 'primary' | 'accent' | 'secondary';
};

export default function Ticket(props: Readonly<TicketProps>) {
  /** props - state */
  const { text, badge = false, variant = 'primary' } = props;

  return (
    <div
      className={clsx([
        'flex items-center',
        'text-caption_semibold',
        'rounded',
        'relative',
        'py-1',
        'bg-opacity-[24%]',
        { 'pl-4 pr-2 w-fit ml-2': badge },
        { 'px-2': !badge },
        { 'bg-primary text-primary_400': variant === 'primary' },
        { 'bg-accent text-accent_400': variant === 'accent' },
        { 'bg-secondary text-secondary_400': variant === 'secondary' },
      ])}
    >
      {badge && (
        <Image
          src='/app/images-jp/blue_badge.svg'
          className='absolute left-[-16px]'
          width={28}
          height={32}
          alt='blue_badge'
        />
      )}

      {text}
    </div>
  );
}
