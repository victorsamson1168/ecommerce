// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { ChipCloseIcon } from './Icons';

// PropTypes
type ChipProps = {
  /** Additional className if present */
  className?: string;
  /** The content of the component. */
  label: string;
  /** If `true`, highlight the chip and and show the delete icon */
  selected?: boolean;
  /** If it can be deleted */
  canClose?: boolean;
  /** If `true`, highlight the chip when hover */
  hovered?: boolean;
  /** If `true`, add margin bototm */
  marginBottom?: boolean;
  /** Callback triggered when the chip is clicked */
  onClick?: (value: ReactNode) => void;
  /** Callback triggered when the chip must be deleted */
  onDelete?: (text: string) => void;
};

const Chip: FC<ChipProps> = (props: ChipProps) => {
  /** props - states */
  const {
    label,
    selected,
    canClose = false,
    hovered = true,
    className,
    marginBottom = true,
  } = props;

  /** props - action */
  const { onClick, onDelete } = props;

  /** custom handlers */
  const handleOnClick = () => onClick && onClick(label);

  const handleDelete = () => {
    if (onDelete) {
      onDelete(label);
    }
  };
  /** consts - clsx */

  const rootClasses = clsx([
    'select-none',
    'relative',
    'mr-2',
    { chip: hovered },
    { 'chip-nothovered': !hovered },
    { 'mb-2': marginBottom },
    { active: selected },
    className,
  ]);
  return (
    <button type='button' className={rootClasses} onClick={handleOnClick}>
      {selected && canClose ? (
        <div
          onClick={handleDelete}
          className='flex gap-x-2 items-center'
          aria-hidden={true}
        >
          <span>{label}</span>
          <ChipCloseIcon className='text-primary_300' />
        </div>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default Chip;
