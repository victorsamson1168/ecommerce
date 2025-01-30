// Standard packages
// Third-party packages
import clsx from 'clsx';
// Custom packages
import { useUpdateURLParams } from '@/lib/hooks';
import { NextIcon, PrevIcon } from './Icons';

// PropTypes
type PaginationProps = {
  /** meta data containing :  */
  meta: {
    /** clicked page */
    currentPage: number;
    lastVisiblePage: number;
    more: boolean;
    perPage: number;
    prev: number;
  };
  /** Callback triggered to move prev page */
  onPrev: (value: number) => void;
  /** Callback triggered to move next page */
  onNext: (value: number) => void;
  /** Callback triggered to move next page */
  onPageClick: (value: number) => void;
};

export const PaginationExtended = (props: PaginationProps) => {
  /** props - states */
  const { meta } = props;
  const { currentPage, lastVisiblePage, more } = meta;
  /** props - actions */
  const { onPrev, onNext, onPageClick } = props;

  /** consts */
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < lastVisiblePage;
  const updateParams = useUpdateURLParams();

  /** custom handlers */
  const handlePrev = () => {
    if (canGoPrev) {
      console.log('prev page');
      onPrev(currentPage);
      updateParams({ key: 'page', value: String(currentPage).toString() });
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      console.log('next page');
      onNext(currentPage);
      updateParams({ key: 'page', value: String(currentPage).toString() });
    }
  };

  /** custom renderer */

  const renderPageNumber = (number: number) => (
    <div
      className={` h-6 w-6 flex items-center justify-center rounded text-label_semibold cursor-pointer ${
        currentPage === number
          ? 'bg-grayscale_800 bg-opacity-[8%] text-grayscale_900'
          : ' text-grayscale_600 hover:bg-grayscale_800 hover:bg-opacity-[8%]'
      }`}
      onClick={() => onPageClick(number)}
      key={number}
    >
      {number}
    </div>
  );

  const renderDots = () => (
    <div
      className={` h-6 w-6 py-0.5 justify-center flex rounded text-label_semibold text-grayscale_600`}
    >
      ...
    </div>
  );

  const renderStartingNumbers = () => {
    return (
      <>
        {/* first page number will always be visible */}
        {renderPageNumber(1)}
        {/* dots appears after and at page 6 */}
        {lastVisiblePage >= 6 && renderDots()}
        {/* if there is total 3,4 pages visible and we are on page 3 or more show all page numbers */}{' '}
        {lastVisiblePage === 3 &&
          currentPage === 3 &&
          getArrayOfPageNumbers(2, currentPage - 1)?.map(renderPageNumber)}
        {lastVisiblePage === 4 &&
          currentPage >= 3 &&
          getArrayOfPageNumbers(2, currentPage - 1)?.map(renderPageNumber)}
        {/* if there is total 5 pages visible and we are on page 3 or more show all page numbers */}
        {lastVisiblePage === 5 &&
          currentPage >= 3 &&
          getArrayOfPageNumbers(2, currentPage - 1)?.map(renderPageNumber)}
        {/* if there is total 6 pages visible and we are on page 4 or more show all page numbers */}
        {lastVisiblePage === 6 &&
          currentPage > 4 &&
          getArrayOfPageNumbers(2, currentPage - 1)?.map(renderPageNumber)}
        {/* show backward page number upto 3 if we are near the last page of all search results */}
        {/* 1, ... 6,7,{8},9 */}
        {lastVisiblePage > 6 &&
          currentPage > lastVisiblePage - 3 &&
          !more &&
          getArrayOfPageNumbers(
            currentPage - (3 - (lastVisiblePage - currentPage)),
            currentPage - 1
          )?.map(renderPageNumber)}
      </>
    );
  };

  /** utility functions */
  const getArrayOfPageNumbers = (startingNum: number, endingNum: number) => {
    const arr = [];
    let i = startingNum === 1 ? 2 : startingNum;
    for (; i <= endingNum; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className='flex gap-x-3 w-full pt-6 justify-center select-none'>
      <div className='flex gap-x-2 items-center'>
        <PrevIcon
          className={clsx([
            'hover:bg-grayscale_300',
            'active:bg-grayscale_400',
            'text-grayscale_600',

            'rounded',
            'p-1',
            'w-6',
            'h-6',
            {
              'cursor-pointer': canGoPrev,
              'cursor-not-allowed': !canGoPrev,
              '!text-grayscale_extended_200': !canGoPrev,
            },
          ])}
          onClick={handlePrev}
        />
        {renderStartingNumbers()}
        {currentPage > 3 && more && renderPageNumber(currentPage - 1)}
        {getArrayOfPageNumbers(
          currentPage,
          more ? lastVisiblePage - 1 : lastVisiblePage
        ).map(renderPageNumber)}
        {more && renderDots()}
        <NextIcon
          className={clsx([
            'hover:bg-grayscale_300',
            'active:bg-grayscale_400',
            'rounded',
            'text-grayscale_600',
            'p-1',
            'w-6',
            'h-6',
            {
              'cursor-pointer': canGoNext,
              'cursor-not-allowed': !canGoNext,
              '!text-grayscale_extended_200': !canGoNext,
            },
          ])}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};
