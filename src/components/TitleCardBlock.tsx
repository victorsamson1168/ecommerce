// Standard packages
import { FC, ReactNode } from 'react';
import { InfoIcon } from './Icons';

// Third-party packages
import clsx from 'clsx';

// PropTypes
type TitleCardBlockProps = {
  /** TitleCardBlock title */
  title: string;
  /** TitleCardBlock subtitle */
  subtitle: string;
  /** TitleCardBlock information */
  tooltip?: string;
  /** TitleCardBlock children */
  children: ReactNode;
};

const TitleCardBlock: FC<TitleCardBlockProps> = (
  props: TitleCardBlockProps
) => {
  /** props - state */
  const { children, title, subtitle, tooltip } = props;

  return (
    <div className='flex justify-between items-center relative'>
      <div className='space-y-2 '>
        <div>
          <div className=' flex gap-x-2'>
            <p className='text-bodyS_semibold capitalize'>{title}</p>
            <div className={clsx('relative', { tooltip: !!tooltip })}>
              {tooltip && (
                <>
                  <InfoIcon />
                  <span className='tooltiptext text-caption_semibold'>
                    {tooltip}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <p className='text-caption_regular text-grayscale_700'>{subtitle}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default TitleCardBlock;
