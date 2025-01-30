// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';
import { CheckIcon, SpinnerIcon } from './Icons';

// Custom packages

// PropTypes
type ChipSearchProps = {
  /** Additional className if present */
  className?: string;
  /** The content of the component. */
  label: ReactNode | string;
  /** If `true`, highlight the chip and and show the delete icon */
  selected?: boolean;
  /** can hover가 false면 hover 불가능 */
  canHover?: boolean;
  /** Callback triggered when the chip is clicked */
  onClick?: (value: ReactNode) => void;
};

const ChipSearch: FC<ChipSearchProps> = (props: ChipSearchProps) => {
  /** props - states */
  const { label, selected = false, className, canHover = true } = props;

  /** props - action */
  const { onClick } = props;

  /** custom handlers */
  const handleOnClick = () => onClick && onClick(label);

  /** consts - clsx */

  const rootClasses = clsx([
    className,
    'select-none relative whitespace-nowrap rounded inline-block px-2 py-1 border text-caption_semibold mr-2',
    'flex gap-x-1 items-center',
    {
      // 선택되었을 때
      'bg-[#00AB44] bg-opacity-[20%] border-[#00AB44] text-[#00AB44]': selected,
      // 선택되지 않았고 hover 불가할때
      'bg-grayscale_200 border-grayscale_400 text-grayscale_400 cursor-not-allowed':
        !selected && !canHover,
      // 선택되지 않았고 hover 가능할때
      'bg-grayscale_200 border-grayscale_400 text-grayscale_400 hover:bg-primary active:bg-opacity-[16%] hover:bg-opacity-[8%] hover:border-primary_300 active:border-primary_300 hover:text-primary_300 active:text-primary_300':
        !selected && canHover,
    },
  ]);
  return (
    <button type='button' className={rootClasses} onClick={handleOnClick}>
      {selected ? (
        <span className='bg-[#00AB44] inline-block rounded-full w-4 h-4 flex justify-center items-center'>
          <CheckIcon className='text-white w-4 h-4' />
        </span>
      ) : (
        <SpinnerIcon className='text-grayscale_400 w-4 h-4' />
      )}
      {label}
    </button>
  );
};

export default ChipSearch;
