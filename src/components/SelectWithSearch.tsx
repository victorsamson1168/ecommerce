// Standard packages
import React, { FC, useState } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Point from '@/components/Point';
import ClickAwayListener from './ClickAwayListener';
import { ArrowRight, ErrorIcon, MenuIcon, SearchIcon } from './Icons';

// PropTypes
export type SelectOption = {
  [x: string]: any;
  /** Text to be displayed */
  label: string;
  /** Value to be mapped  */
  value: any;
  /** special formatted rendering class */
  className?: string;
};

type SelectProps = {
  /** Additional className if present */
  className?: string;
  /** Select label */
  label?: string;
  /** Currently selected option */
  value: any;
  /** Select options */
  options: SelectOption[];
  /** Select width */
  width?: string;
  /** Option width */
  optionWidth?: string;
  /** Select padding */
  padding?: string;
  /** Select border */
  border?: boolean;
  /** Point dot color */
  pointColor?: string;
  /** Option list location */
  optionTop: string;
  /** Menu visible */
  menu?: boolean;
  /** If `true` select become disalbed */
  disabled?: boolean;
  /** Select placeholder */
  placeholder?: string;
  /** Callback triggered when an option changes */
  onChange?: (value: any) => void;
  /** max height of select options */
  maxHeight?: string;
  /** required error */
  required?: boolean;
  /** Title font */
  titleFont?: string;
};

const SelectWithSearch: FC<SelectProps> = (props: SelectProps) => {
  /** props - states */
  const {
    className,
    value,
    options,
    width,
    optionWidth,
    padding,
    label,
    pointColor,
    border = false,
    optionTop,
    disabled = false,
    menu,
    placeholder,
    maxHeight = `max-h-[240px]`,
    required,
    titleFont = 'text-bodyS_regular',
  } = props;

  /** props - actions */
  const { onChange } = props;

  /** useState hooks */
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  /** consts */
  const selectOptionClasses = clsx([
    'text-grayscale_900',
    'px-2',
    'py-2',
    'hover:bg-grayscale_100',
    'active:bg-grayscale_100',
    'text-label_medium',
    'rounded',
  ]);

  const optionClasses = clsx(
    'absolute',
    optionTop,
    'right-0',
    'z-10',
    optionWidth ?? 'w-full',
    'border-grayscale_extended_100 border',
    'drop-shadow-[0_0_8px_rgba(12,21,29,0.08)]',
    'bg-white',
    'rounded',
    'p-2'
  );

  const rotateClasses = clsx([
    'rotate-90',
    'duration-300',
    'ease-in-out',
    'w-4',
    'h-4',
    'text-grayscale_700',
    { 'rotate-[270deg]': open },
    { '!text-grayscale_500': disabled },
  ]);

  /** custom handlers */
  const getSearchedResults = () => {
    return options?.filter(option =>
      option?.label?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  };

  const toggleOpen = (e?: React.MouseEvent<HTMLDivElement>) => {
    e?.preventDefault();
    e?.stopPropagation();
    !disabled && onChange && setOpen(!open);
  };

  const handleChange = (value: any) => {
    toggleOpen();
    onChange && onChange(value);
  };

  /** custom renderers */
  const renderOption = (option: SelectOption) => (
    <li
      className={`${selectOptionClasses} ${
        option.className ? option.className : ''
      } ${option.value === value ? '!bg-grayscale_100' : ''} `}
      key={option.value}
      value={option.value}
      onClick={() => handleChange(option.value)}
      aria-hidden={true}
    >
      {option.label}
    </li>
  );

  const getSelectedLabel = () => {
    const label = options?.find(option => option.value === value)?.label;
    return label;
  };

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Stop the click from bubbling up and triggering the ClickAwayListener
  };

  return (
    <div className={clsx(['select-none', 'rounded', className])}>
      {label && (
        <div className='pb-2 text-grayscale_900 text-label_medium'>{label}</div>
      )}
      <div
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && toggleOpen()}
        className={clsx(
          'relative',
          'rounded',

          {
            border: border,
            'border-grayscale_900': open,
            'border-grayscale_extended_200': !open,
            [padding as string]: padding,
            [width as string]: width,
          },
          {
            'cursor-pointer': !disabled,
          },
          {
            'text-grayscale_900 bg-grayscale_extended_50  cursor-not-allowed':
              disabled,
          },
          { '!bg-transparent': !border && disabled },
          { 'border !border-error': required }
        )}
      >
        <div
          onClick={() => !open && toggleOpen()}
          className={clsx([
            { flex: !menu },
            { 'items-center': !menu },
            { 'justify-between': !menu },
            { 'gap-x-2': !menu },
            { [titleFont as string]: !menu },
            { 'text-grayscale_900': !menu },
            { '!text-grayscale_extended_300': disabled },
            { 'p-[8px]': !border && !menu },
            {
              'hover:bg-grayscale_100 active:bg-grayscale_100 bg-white':
                !menu && !disabled,
            },
            'rounded',
          ])}
        >
          {menu ? (
            <MenuIcon className={'icon'} />
          ) : (
            <div className='max-h-[22px] flex items-center text-label_medium w-full'>
              {pointColor && <Point bgcolor={pointColor} />}
              {placeholder && !value ? (
                <span className='text-grayscale_extended_300  w-full px-2'>
                  {placeholder}
                </span>
              ) : (
                <span className='w-full px-2 truncate'>
                  {getSelectedLabel()}
                </span>
              )}
              <ArrowRight className={rotateClasses} />
            </div>
          )}
        </div>
        {open && (
          <ClickAwayListener
            onClickAway={() =>
              setTimeout(() => {
                setOpen(false);
              }, 50)
            }
          >
            <div onClick={handleDropdownClick}>
              <ul className={optionClasses}>
                <div className='py-2 px-2 w-full flex gap-2 border border-grayscale_extended_100 rounded bg-white'>
                  <SearchIcon className='w-5 h-5 z-10 ml-1 text-grayscale_900' />
                  <input
                    type='text'
                    value={searchText}
                    placeholder='Search'
                    onChange={event => setSearchText(event.target.value)}
                    className='shadow-none outline-none pr-1 w-full text-caption_medium text-grayscale_500 disabled:bg-grayscale_extended_200 disabled:cursor-not-allowed'
                  />
                </div>
                <div className={`overflow-y-auto mt-1 ${maxHeight}`}>
                  {getSearchedResults()?.length > 0 ? (
                    getSearchedResults()?.map(renderOption)
                  ) : (
                    <p className='text-caption_medium pl-1 py-2'>
                      No result found
                    </p>
                  )}
                </div>
              </ul>
            </div>
          </ClickAwayListener>
        )}
      </div>
      {required && (
        <div className='flex gap-x-1 pt-2'>
          <ErrorIcon />
          <span className='text-caption_regular text-negative'>
            This is a required field
          </span>
        </div>
      )}
    </div>
  );
};

export default SelectWithSearch;
