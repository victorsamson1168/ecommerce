// Standard packages
import React, { FC, useEffect, useState } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Point from '@/components/Point';
import ClickAwayListener from './ClickAwayListener';
import { ArrowRight, ErrorIcon, SearchIcon } from './Icons';

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

const SearchableSelect: FC<SelectProps> = (props: SelectProps) => {
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
    placeholder,
    maxHeight = `max-h-[252px]`,
    required,
    titleFont = 'text-bodyS_regular',
  } = props;

  /** props - actions */
  const { onChange } = props;

  /** useState hooks */
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [filteredOptions, SetFilteredOptions] = useState(options);

  /** useEffect hooks */

  useEffect(() => {
    const newOptions = options.filter((option: any) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
    SetFilteredOptions(newOptions);
  }, [search]);

  /** consts */
  const selectOptionClasses = clsx([
    'text-grayscale_600',
    'px-2',
    'py-2',
    'hover:text-grayscale_900',
    'hover:bg-primary',
    'hover:bg-opacity-[8%]',
    'active:bg-opacity-[16%]',
    'text-label_medium',
    'rounded',
  ]);

  const optionClasses = clsx(
    'absolute',
    optionTop,
    'top-[52px]',
    'right-0',
    'z-10',
    optionWidth ?? 'w-full',
    'border-grayscale_extended_200 border',
    'drop-shadow-[0_0_8px_rgba(12,21,29,0.08)]',
    'bg-white',
    'rounded',
    'overflow-y-auto',
    'pb-4',
    maxHeight
  );

  const rotateClasses = clsx([
    'rotate-90',
    'duration-300',
    'ease-in-out',
    'w-5',
    'h-5',
    'text-grayscale_700',
    {
      'rotate-[270deg]': open,
    },
    {
      '!text-grayscale_500': disabled,
    },
  ]);

  /** custom handlers */
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
  const renderOption = (option: SelectOption) => {
    return (
      <button
        className={`${selectOptionClasses} ${
          option.className ? option.className : ''
        } w-full text-left px-4`}
        key={option.value}
        value={option.value}
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          handleChange(option.value);
          setSearch('');
        }}
        aria-hidden={true}
      >
        {option.label}
      </button>
    );
  };

  return (
    <div className={clsx(['select-none', 'rounded', className])}>
      {label && (
        <span className='text-label_medium text-grayscale_700 h-fit block pb-2'>
          {label}
        </span>
      )}
      <div
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        onClick={toggleOpen}
        onKeyDown={e => e.key === 'Enter' && toggleOpen()}
        className={clsx(
          'relative',

          'rounded',

          {
            'hover:bg-grayscale_100 active:bg-grayscale_200':
              !disabled && !open,
          },
          {
            border: border,
            'border-grayscale_900': open,
            'border-grayscale_300': !open,
            'p-[8px]': !border,
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
          {
            '!bg-transparent': !border && disabled,
          },
          {
            'border !border-error': required,
          }
        )}
      >
        <div
          className={clsx([
            ' flex items-center justify-between gap-x-2 text-grayscale_900',
            { titleFont },
            { '!text-grayscale_extended_300': disabled },
          ])}
        >
          <div className='max-h-[22px] flex justify-between items-center w-full'>
            {pointColor && <Point bgcolor={pointColor} />}
            {placeholder && !value ? (
              <span className='text-grayscale_500'> {placeholder}</span>
            ) : (
              <span>{value}</span>
            )}
            <ArrowRight className={rotateClasses} />
          </div>
        </div>
        {open && (
          <ClickAwayListener onClickAway={() => toggleOpen()}>
            <ul className={optionClasses}>
              <div className='sticky top-0 bg-white p-4'>
                <div
                  aria-hidden
                  className='py-2 pr-2 px-2  w-full border border-grayscale_extended_100 rounded bg-white'
                  onClick={event => {
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                >
                  <SearchIcon className='w-6 h-6 absolute z-10 ml-1 text-grayscale_900' />
                  <input
                    type='text'
                    value={search ?? ''}
                    placeholder={`Search`}
                    onChange={event => setSearch(event.target.value)}
                    className={
                      'shadow-none outline-none pl-10 pr-1 disabled:bg-grayscale_extended_200 disabled:cursor-not-allowed !w-full'
                    }
                    autoFocus
                    // onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              {filteredOptions?.map(renderOption)}
            </ul>
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

export default SearchableSelect;
