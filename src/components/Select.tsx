// Standard packages
import React, { FC, useState } from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import Point from '@/components/Point';
import ClickAwayListener from './ClickAwayListener';
import { ArrowRight, ErrorIcon, MenuIcon } from './Icons';

// PropTypes
export type SelectOption = {
  [x: string]: any;
  /** Text to be displayed */
  label: string;
  /** Value to be mapped  */
  value: any;
  /** special formatted rendering class */
  className?: string;
  /** disable Status */
  disabled?: boolean;
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
  /** Default open state */
  defaultOpenState?: boolean;
  /** selected value text color */
  textColor?: string;

  transparent?: boolean;
};

const Select: FC<SelectProps> = (props: SelectProps) => {
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
    maxHeight = `max-h-[170px]`,
    required,
    titleFont = 'text-bodyS_regular',
    defaultOpenState = false,
    textColor = '',
    transparent = false,
  } = props;

  /** props - actions */
  const { onChange } = props;

  /** useState hooks */
  const [open, setOpen] = useState(defaultOpenState);

  /** consts */
  const selectOptionClasses = clsx([
    'text-grayscale_600',
    '!px-4',
    '!py-2',
    'hover:text-grayscale_900',
    'hover:bg-primary_200',
    'hover:bg-opacity-[8%]',
    'active:bg-opacity-[16%]',
    'text-bodyS_regular',
    'whitespace-nowrap',
    'text-left',
    'w-full',
    'flex gap-x-2',
  ]);
  const optionClasses = clsx(
    'absolute',
    optionTop,
    'z-50',
    'right-0',
    // 'align-left',
    optionWidth ? optionWidth : 'w-full',
    'border-grayscale_200 border',
    'drop-shadow-[0_0_8px_rgba(12,21,29,0.08)]',
    // 'bg-white',
    'rounded',
    'overflow-y-auto',
    'text-left',
    'max-h-80',
    'bg-white',
    maxHeight
  );

  const rotateClasses = clsx([
    'w-4 h-4',
    'rotate-90',
    'ml-2',
    'duration-300',
    'ease-in-out',
    {
      'rotate-[270deg]': open,
    },

    {
      'text-grayscale_500': disabled,
    },
    { 'text-grayscale_700': !disabled },
    { [textColor as string]: !menu },
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
        disabled={option?.disabled}
        className={clsx([
          selectOptionClasses,
          { [option?.className as string]: option?.className },
          // {
          //   '!bg-grayscale_extended_100': option.label == value,
          // },
        ])}
        key={option.value}
        value={option.value}
        onClick={event => {
          event.preventDefault();
          event.stopPropagation();
          !option?.disabled && handleChange(option.value);
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
        aria-hidden
        onClick={toggleOpen}
        onKeyDown={e => e.key === 'Enter' && toggleOpen()}
        className={clsx(
          'relative',
          { 'bg-white': !menu && !transparent },

          'rounded',
          'hover:border-grayscale_400',
          'hover:bg-opacity-[8%]',
          'active:bg-grayscale_600',
          'active:bg-opacity-[16%]',

          {
            border: border,
            '!border-grayscale_900': open,
            'border-grayscale_300': !open,
            'p-[8px]': !border && !menu,
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
          },
          { 'border border-transparent': transparent },
          { 'border-grayscale_900': open }
        )}
      >
        <div
          className={clsx([
            { flex: !menu },
            { 'items-center': !menu },
            { 'justify-between': !menu },
            { 'gap-x-2': !menu },
            { [titleFont as string]: !menu },
            { 'text-grayscale_900': !menu },
            { 'text-grayscale_extended_300': disabled },
          ])}
        >
          {menu ? (
            <MenuIcon className={'icon !text-grayscale_600'} />
          ) : (
            <div className='max-h-[20px] flex justify-between items-center w-full text-inherit'>
              {pointColor && <Point bgcolor={pointColor} />}
              {placeholder && !value ? (
                <span className='text-grayscale_500'> {placeholder}</span>
              ) : (
                <span
                  className={clsx([
                    { [textColor as string]: !menu },
                    'text-grayscale_900 text-bodyS_regular truncate',
                  ])}
                >
                  {value}
                </span>
              )}
              <ArrowRight className={rotateClasses} />
            </div>
          )}
        </div>
        {open && (
          <ClickAwayListener onClickAway={() => toggleOpen()}>
            <ul className={optionClasses}>{options?.map(renderOption)}</ul>
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

export default Select;
