// Standard packages
import Link from 'next/link';

// Third-party packages
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

// Custom packages
import Button from './Button';

// PropTypes
interface TitleLabelSubTitleProps {
  /** Sub title - title */
  title: string;
  /** Sub title, icon - color */
  color?: boolean;
  /** If badge title, icon - color */
  badge?: boolean;
}

export const TitleLabelSubTitle = (props: TitleLabelSubTitleProps) => {
  /** props - states */
  const { title, color, badge } = props;

  /** consts - clsx */
  const rootClasses = clsx('flex', 'items-center', 'gap-x-1');
  const titleClasses = clsx(
    badge && 'text-grayscale_900',
    color ? 'text-white' : 'text-accent',
    'text-caption_semibold'
  );

  const colorName = color ? '#ffffff' : '#EB896A';

  return (
    <div className={rootClasses}>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.00166 2C8.05965 5.2869 10.7132 7.94065 14 7.99899V8.001C10.7132 8.05933 8.05964 10.7131 8.00166 14H7.99977C7.94178 10.7126 5.28748 8.05857 2 8.00097V7.999C5.28749 7.94142 7.9418 5.28738 7.99981 2H8.00166Z'
          fill={badge ? '#69A3CC' : colorName}
        />
      </svg>
      <span className={titleClasses}>{title}</span>
    </div>
  );
};

// PropTypes
interface TitleLabelProps {
  /** Title label subtitle */
  subtitle: string;
  /** Title label title */
  title: string;
  /** If present, show a browse more link */
  href?: string;
}

export default function TitleLabel(props: Readonly<TitleLabelProps>) {
  const { subtitle, title, href } = props;
  /** useTranlation hook */
  const { t } = useTranslation();

  return (
    <div className='pb-10'>
      <TitleLabelSubTitle title={subtitle} />
      <div className='flex justify-between pt-2'>
        <h3 className='text-h3_bold'>{title}</h3>
        {href && (
          <Link href={href} passHref>
            <Button size='medium' variant='tertiary' icon='right'>
              {t('buttons.browsemore', { ns: 'common' })}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
