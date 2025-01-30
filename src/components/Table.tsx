// Standard packages
import { FC, ReactNode } from 'react';
import { AscIcon, DescIcon } from './Icons';

// Third-party packages
import clsx from 'clsx';

// PropTypes
type TableProps = {
  /** Table head */
  head: any;
  /** Table body */
  children: ReactNode;
  /** If `true` sort buttons appear */
  sort?: boolean;
  /** Callback triggerd when click asc */
  onClickAsc?: (data: any) => void;
  /** Callback triggerd when click desc */
  onClickDesc?: (data: any) => void;
};

const Table: FC<TableProps> = (props: TableProps) => {
  /** props - state */
  const { head, children, sort = true } = props;

  /** props - actions */
  const { onClickAsc, onClickDesc } = props;

  /** custom handlers */
  const handleChangeAsc = (
    field: string,
    stageId: string | null | undefined,
    order: string
  ) => {
    if (onClickAsc) {
      if (stageId) {
        onClickAsc({ field: 'stage', order, stageId });
      } else {
        onClickAsc({ field, order, stageId: '' });
      }
    }
  };

  const handleChangeDesc = (
    field: string,
    stageId: string | null | undefined,
    order: string
  ) => {
    if (onClickDesc) {
      if (stageId) {
        onClickDesc({ field: 'stage', order, stageId });
      } else {
        onClickDesc({ field, order, stageId: '' });
      }
    }
  };

  /** custom renderers */
  const renderColums = (data: any) => {
    return (
      <th
        key={data.label}
        className='text-label_medium text-grayscale_900 p-4 text-left whitespace-nowrap'
      >
        <div className='flex gap-x-2 items-center'>
          <span className='text-label_medium'>{data.value}</span>
          {(data.label === 'name' ||
            data.label === 'experience' ||
            data.label === 'appliedDate' ||
            data.label === 'addedDate' ||
            data.label === 'noticePeriod' ||
            data.label === 'profileMatch' ||
            data.label === 'createdAt' ||
            data.label === 'startedAt' ||
            data.label === 'completedAt' ||
            // data.label === 'score' ||
            data.label === 'invitedAt' ||
            data?.id) &&
            sort && (
              <div>
                <AscIcon
                  className={clsx([
                    'hover:bg-grayscale_200',
                    'w-5',
                    'h-3',
                    'rounded',
                    'cursor-pointer',
                    'text-grayscale_600',
                  ])}
                  onClick={() => handleChangeAsc(data.label, data?.id, 'asc')}
                />
                <DescIcon
                  className={clsx([
                    'hover:bg-grayscale_200',
                    'w-5',
                    'h-3',
                    'rounded',
                    'cursor-pointer',
                    'text-grayscale_600',
                  ])}
                  onClick={() => handleChangeDesc(data.label, data?.id, 'desc')}
                />
              </div>
            )}
        </div>
      </th>
    );
  };

  return (
    <table className='w-full '>
      <thead className='border-b  border-grayscale_extended_100'>
        <tr>{head.map(renderColums)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
export default Table;
