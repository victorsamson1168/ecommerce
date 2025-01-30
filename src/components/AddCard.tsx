// Standard packages
import Link from 'next/link';

// Third-party packages
import clsx from 'clsx';
import { FloatingPlusIcon } from './Icons';

// PropTypes
type AddCardProps = {
  /** Link to be redirected to onClick */
  href: string;
  /** Text to be displayed */
  message: string;
};

export default function Addcard(props: Readonly<AddCardProps>) {
  /** props */
  const { href, message } = props;

  /** consts */
  const rootClasses = clsx(
    'addcard',
    'bg-white',
    'border',
    'border-grayscale_200',
    'hover:drop-shadow-[0_0_8px_rgba(236,236,236,1)]',
    'flex',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'rounded',
    'h-full',
    'min-h-[230px]'
  );

  return (
    <Link href={href} passHref>
      <div className={rootClasses}>
        <FloatingPlusIcon />
        <p className='pt-[10px] text-buttonS_semibold'>{message}</p>
      </div>
    </Link>
  );
}
