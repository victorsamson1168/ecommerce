// Standard packages

// Third-party packages
import clsx from 'clsx';
import { DeleteGrayIcon, PlusIcon } from './Icons';

// PropTypes
type TabOption = {
  /** Actual value of the option */
  value: string;
  /** Displaying label of the option */
  label: string;
  count?: number;
};

type TabProps = {
  /** List of tabs to be rendered as tabs */
  options: TabOption[];
  /** Currently selected tab */
  value: string;
  /** className of the option */
  className?: string;
  /** Callback triggered when a tab is clicked */
  onChange: (text: string) => void;
  /** page route */
  tabType?: string;
  /** callback to add a tab */
  onAdd?: () => void;
  onDelete?: (value: string) => void;
};

export default function Tab(props: Readonly<TabProps>) {
  /** props - states */
  const { options, value, className, tabType } = props;

  /** props - actions */
  const { onChange, onAdd, onDelete } = props;

  /** custom renderer */
  const renderTabOption = (option: TabOption) => {
    const isSelected = option.value === value;
    return (
      <li
        className={clsx([
          'relative  flex items-center',
          'select-none',
          'text-buttonS_semibold',
          'cursor-pointer',
          'hover:text-grayscale_900',
          'px-4 ',
          'text-grayscale_900',
          tabType === 'menuNav' ? 'py-[16px]' : 'py-2',
          tabType === 'menuNav' && isSelected && 'text-[#22272F]',
          tabType === 'menuNav' && !isSelected && '',

          tabType === 'sectionNav' && isSelected && 'text-grayscale_900',
          tabType === 'sectionNav' && !isSelected && 'text-grayscale_900',
          tabType === 'skillTest' && isSelected && 'text-grayscale_900',
          tabType === 'skillTest' && !isSelected && '!text-grayscale_600',

          {
            'walkthrough-results': option.label === 'Results',
          },
          {
            'walkthrough-applications': option.label === 'Applications',
          },
          {
            'walkthrough-job-description': option.label === 'Job Description',
          },
          {
            'text-grayscale_900': !isSelected,
          },
          className,
        ])}
        key={option.value}
        onClick={() => onChange(option.value)}
        aria-hidden={true}
      >
        {option.label}
        {isSelected && (
          <span
            className={`absolute bottom-[-1px] left-0 w-full  ${
              tabType === 'menuNav'
                ? 'bg-[#22272F] h-[2px]'
                : 'bg-grayscale_900 h-[1px]'
            } `}
          />
        )}
        {option?.count && (
          <span className='pl-2 text-[#B0BBC9] text-sm font-medium'>
            {option?.count}
          </span>
        )}
        {!isSelected && tabType === 'skillTest' && (
          <DeleteGrayIcon
            onClick={event => {
              event.stopPropagation();
              event.preventDefault();
              onDelete && onDelete(option.value);
            }}
            className='ml-2 icon !h-5 !w-5 active:scale-[0.9] transition-all duration-100 ease-out'
          />
        )}
      </li>
    );
  };

  return (
    <ul className='flex border-b-[1px] border-solid border-gray-200 items-center'>
      {options?.map(renderTabOption)}

      {onAdd && (
        <PlusIcon
          onClick={onAdd}
          className='cursor-pointer icon active:scale-[0.9] transition-all duration-100 ease-out'
        />
      )}
    </ul>
  );
}
