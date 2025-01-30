// Standard packages
// Third-party packages
import clsx from 'clsx';
// Custom packages
import { NextIcon, PrevIcon } from './Icons';

// PropTypes
type PaginationProps = {
  /** Clicked page */
  skip: number;
  /** It will be displayed on one screen */
  limit: number;
  /** Total number of the data list */
  total: number;
  /** Callback triggered to move prev page */
  onPrev: (value: number) => void;
  /** Callback triggered to move next page */
  onNext: (value: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  /** props - states */
  const { skip, limit, total } = props;

  /** props - actions */
  const { onPrev, onNext } = props;

  /** consts */
  const totalPages = Math.ceil(total / limit);
  const canGoPrev = skip > 1;
  const canGoNext = skip < totalPages;

  /** custom handlers */
  const handlePrev = () => canGoPrev && onPrev(skip);
  const handleNext = () => canGoNext && onNext(skip);

  return (
    <div className='flex gap-x-4 w-full pt-6 justify-end select-none'>
      <div className='flex gap-x-4 items-center cursor-pointer'>
        <PrevIcon
          className={clsx([
            'hover:bg-grayscale_300',
            'active:bg-grayscale_400',
            'rounded',
            'p-1',
            'w-6',
            'h-6',
            {
              'cursor-pointer': canGoPrev,
              'cursor-not-allowed': !canGoPrev,
            },
          ])}
          onClick={handlePrev}
        />

        <p>
          Page {skip} / {totalPages}
        </p>
        <NextIcon
          className={clsx([
            'hover:bg-grayscale_300',
            'active:bg-grayscale_400',
            'rounded',
            'p-1',
            'w-6',
            'h-6',
            {
              'cursor-pointer': canGoNext,
              'cursor-not-allowed': !canGoNext,
            },
          ])}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
