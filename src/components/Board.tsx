// Standard packages
import { FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
interface BoardProps {
  /** Board children */
  children: ReactNode;
  /** Board title */
  title?: ReactNode;
  /** Board width */
  width: string;
  /** Board height */
  height?: string;
  /** Extra adornment placed after the input (e.g. icon, search button)  */
  adornment?: ReactNode;
}

const Board: FC<BoardProps> = (props: BoardProps) => {
  /** props - state */
  const { children, title, width, adornment, height = '' } = props;

  /** consts */
  const rootClasses = clsx({
    border: true,
    'border-grayscale_extended_100': true,
    'bg-white': true,
    rounded: true,
    'p-6': true,
    [width]: width,
    [height]: height,
  });

  return (
    <div className={rootClasses}>
      <div className='flex justify-between items-center'>
        <h4 className='text-h4_bold'>{title}</h4>
        {adornment}
      </div>

      {children}
    </div>
  );
};

export default Board;
