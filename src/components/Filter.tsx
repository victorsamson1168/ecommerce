// Standard packages
import { FC, RefObject, createRef, useEffect, useRef } from 'react';

// Custom packages
import Chip from './Chip';
import { FilterIcon } from './Icons';

// PropTypes
interface FilterProps {
  /** Filter chip */
  chips: any[];
  /** Callback triggered when open filter dialog */
  onOpenFilter: () => void;
  /** Callback triggered when delete chip */
  onDeleteChip: (chip: { type: string; value: any }) => void;
  /** Callback triggered when sort by changed */
}

const Filter: FC<FilterProps> = (props: FilterProps) => {
  /** props - state */
  const { chips } = props;
  /** props - action */
  const { onOpenFilter, onDeleteChip } = props;

  /** third-party hook */
  const chipsContainerRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<Array<RefObject<HTMLDivElement>>>([]);
  const allFilterRef = useRef<HTMLDivElement | null>(null);
  /** useState hooks */

  /** useEffect hook */
  useEffect(() => {
    const handleResize = () => {
      const totalWidth = chipsContainerRef.current?.scrollWidth;
      const allFilterWidth = allFilterRef.current?.scrollWidth;

      if (totalWidth && allFilterWidth) {
        // Calculate the sum of chip widths
        const sumOfChipWidth = chipRefs.current.reduce(
          (sum, ref) => sum + (ref.current?.scrollWidth ?? 0),
          0
        );

        // Calculate and return the remaining width
        return totalWidth - allFilterWidth - sumOfChipWidth;
      }

      // Return 0 or null if the calculation cannot be performed
      return 0;
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [chipsContainerRef, chipRefs]);

  /** custom handlers */
  const handleOpenFilter = () => onOpenFilter && onOpenFilter();

  const handleDeleteChip = (chip: { type: string; value: any }) =>
    onDeleteChip && onDeleteChip(chip);

  /** custom renderers */
  const renderChips = (chip: any, index: number) => {
    const chipRef =
      chipRefs.current[index] || (chipRefs.current[index] = createRef());

    return (
      <div
        ref={chipRef}
        key={chip.type + String(chip.value)}
        className='inline-block'
      >
        <Chip
          label={chip.value}
          selected
          marginBottom={false}
          canClose
          onDelete={() => handleDeleteChip(chip)}
        />
      </div>
    );
  };

  return (
    <div className='flex pt-4 ' ref={chipsContainerRef}>
      <div
        ref={allFilterRef}
        className='flex items-center gap-x-2 cursor-pointer '
        onClick={handleOpenFilter}
        aria-hidden={true}
      >
        <FilterIcon />

        <p className='text-primary_300 text-caption_semibold pr-4'>
          All Filters ({chips?.length})
        </p>
      </div>
      {chips && chips?.length > 0 && (
        <div className='flex-1'>{chips.map(renderChips)}</div>
      )}
    </div>
  );
};

export default Filter;
