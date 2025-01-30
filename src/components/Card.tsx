// Standard packages

// Third-party packages
import clsx from 'clsx';

// Custom packages

// PropTypes
export interface CardProps {
  /** Card - subtitle */
  subtitle?: string;
  /** Card - title */
  title: string;
  /** Card - content */
  content: string;
  /** Card - image that represents */
  image: string;
}

export default function Card(props: Readonly<CardProps>) {
  /** props - state */
  const { subtitle, title, content, image } = props;

  /** consts */
  const rootClasses = clsx(
    'bg-white',
    'text-left',
    'rounded',
    'p-4',
    'space-y-6',
    'border',
    'border-grayscale_200',
    'h-full'
  );

  return (
    <div className={rootClasses}>
      <div
        className={`h-[133px] bg-cover bg-no-repeat bg-center rounded`}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div>
        {subtitle && (
          <span className='inline-block text-caption_semibold mb-2 bg-secondary_50 text-secondary_500 p-2 rounded'>
            {subtitle}
          </span>
        )}
        <div className='text-bodyS_bold flex justify-between'>
          <span className='truncate'>{title}</span>
        </div>
        <p className='text-bodyS_regular min-h-16 line-clamp-2 pt-4'>
          {content}
        </p>
      </div>
    </div>
  );
}
