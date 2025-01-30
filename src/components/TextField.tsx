'use client';

// Standard package
import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  RefObject,
  useRef,
} from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { CopyIcon, ErrorIcon, PlusIcon, SearchIcon } from './Icons';

// PropTypes
interface TextFieldProps {
  /** If `true`, highlight the text onAppear */
  autoFocus?: boolean;
  /** If `multiLine` is true it became textfield, or not input */
  multiLine?: boolean;
  /** Extends root component classname if exists */
  className?: string;
  /** Text full width */
  fullWidth?: boolean;
  /** Text field label */
  label?: string;
  /** Text field name */
  name?: string;
  /** Text field value */
  value?: string;
  /** Text placeholder */
  placeholder?: string;
  /** Text disabled */
  disabled?: boolean;
  /** Text regex */
  regex?: boolean;
  /** If `true`, show the required asterisk next to the label */
  required?: boolean;
  /** If required `true`, show the text */
  requiredText?: string;
  /** Add search icon */
  search?: boolean;
  /** Add copy icon */
  copy?: boolean;
  /** Add plus icon */
  plus?: boolean;
  /** If `multiline=false`, customize input type */
  type?: HTMLInputTypeAttribute; // todos - add {...rest } to input props
  /** Callback triggered when the textarea value changes */
  onChange?: (value: string) => void;
  /** Callback triggered when you click the plus icon */
  onClickPlus?: (text: string) => void;
  /** Callback triggered when you click the search icon */
  onClickSearch?: () => void;
  /** Callback triggered when you click the copy icon */
  onClickCopy?: () => void;
  /** Callback triggered when you press enter */
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  /** props - states */
  const {
    autoFocus,
    className,
    fullWidth = true,
    label,
    placeholder,
    disabled,
    regex,
    search = false,
    plus = false,
    copy = false,
    required,
    requiredText = 'This is required field',
    type = 'text',
    value,
    multiLine = false,
  } = props;

  /** props - actions */
  const { onChange, onClickPlus, onClickSearch, onKeyPress } = props;

  const handlePlus = (textarea: RefObject<any>) => {
    if (onClickPlus && textarea.current.value) {
      onClickPlus(textarea.current.value);
    }
  };

  const handleSearch = () => onClickSearch && onClickSearch();

  /**
   *
   * const handleCopy = () => onClickCopy && onClickCopy();   it will be use in future code 
   * / 

  /** consts - clsx */
  const textAreaClasses = clsx(
    multiLine ? 'textarea' : 'input',
    'w-full',
    'ring-0',
    'focus:ring-0',
    'shadow-none',
    'focus:shadow-none',
    'focus:outline-none',
    'border-none',
    'focus:border-none',
    regex ? 'negative' : '',
    required ? '!border-negative' : ''
  );

  const rootClasses = clsx([fullWidth ? 'w-full' : '', 'relative', className]);

  /** useRef hooks */
  const textareaRef = useRef(null);

  /** custom handlers */
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    onChange && onChange(target.value);
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className={rootClasses}>
      {label && <div className='pb-2 text-label_medium'>{label}</div>}
      {multiLine ? (
        <textarea
          ref={textareaRef}
          style={{
            resize: 'vertical',
          }}
          autoFocus={autoFocus}
          onChange={handleTextChange}
          value={value}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          className={textAreaClasses}
        />
      ) : (
        <input
          {...props}
          ref={textareaRef}
          autoFocus={autoFocus}
          onChange={handleInputChange}
          value={value ?? ''}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
          className={textAreaClasses}
          type={type}
          // onKeyPress={onKeyPress}
          onKeyDown={onKeyPress}
          onKeyUp={onKeyPress}
        />
      )}
      {copy && (
        <CopyIcon
          className={clsx(
            'absolute',
            'bottom-2',
            'right-2',
            'rounded',
            'cursor-pointer',
            'p-1',
            'hover:bg-grayscale_200',
            'select-none',
            {
              'transform-none': !required,
            }
          )}
        />
      )}
      {search && (
        <div
          onClick={handleSearch}
          className={clsx(
            'absolute',
            'bottom-[6px]',
            'right-2',
            'rounded',
            'cursor-pointer',
            'p-1',
            'hover:bg-grayscale_200',
            'select-none',
            {
              'transform-none': !required,
            }
          )}
          aria-hidden={true}
        >
          <SearchIcon className='w-6 h-6' />
        </div>
      )}

      {plus && (
        <div
          onClick={() => handlePlus(textareaRef)}
          className='hover:bg-grayscale_200 rounded p-1 absolute bottom-1 right-4 cursor-pointer'
          aria-hidden={true}
        >
          <PlusIcon
            className={clsx({
              'transform-none': !required,
            })}
          />
        </div>
      )}

      {required && (
        <div className='flex gap-x-1 pt-2'>
          <ErrorIcon />

          <span className='text-caption_regular text-negative'>
            {requiredText}
          </span>
        </div>
      )}
    </div>
  );
};

export default TextField;
