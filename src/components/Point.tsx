// Standard packages

// Third-party packages
import clsx from 'clsx';

// PropTypes
interface PointProps {
  /** Point background color */
  bgcolor: string;
}

export default function Point(props: Readonly<PointProps>) {
  /** props - state */
  const { bgcolor } = props;

  /** consts */
  const rootClasses = clsx(
    'w-[16px]',
    'h-[16px]',
    'flex',
    'justify-center',
    'items-center'
  );

  const poitClasses = clsx(
    'block',
    'rounded-full',
    bgcolor,
    'w-[8px]',
    'h-[8px]'
  );

  return (
    <div className={rootClasses}>
      <span className={poitClasses} />
    </div>
  );
}
