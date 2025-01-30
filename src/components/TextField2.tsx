'use client';

// Standard package
import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  ReactNode,
  useRef,
} from 'react';

// Third-party packages
import clsx from 'clsx';

// Custom packages
import { useTranslation } from 'react-i18next';
import { ErrorIcon, InfoIcon } from './Icons';

// PropTypes
interface TextFieldProps {
  /** If `true`, highlight the text onAppear */
  autoFocus?: boolean;
  /** If `multiLine` is true it became textfield, or not input */
  multiLine?: boolean;
  /** Extra adornment placed after the input (e.g. icon, search button)  */
  endAdornment?: ReactNode;
  /** Extends root component classname if exists */
  className?: string;
  /** Text full width */
  fullWidth?: boolean;
  /** Text field label */
  label?: string;
  /** Text field label info */
  info?: string;
  // /** Text field label name */
  // name?: string;
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
  /** If `multiline=false`, customize input type */
  type?: HTMLInputTypeAttribute; // todos - add {...rest } to input props
  /** If present, set the minimum value to the specified value for type = number */
  min?: number;
  /** If present, set default row's of textarea = number */
  rows?: number;
  /** textarea max height */
  maxHeight?: string;
  /** Callback triggered when the textarea value changes */

  onChange?: (value: string) => void;
  /** Callback triggered when the input/textarea is clicked */
  onClick?: (...params: any) => void;
  /** Callback triggered when the endAdornment is clicked */
  onClickEnd?: (...params: any) => void;
  /** Callback triggered when you press enter */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = (props: TextFieldProps) => {
  const { t } = useTranslation();

  /** props - states */
  const {
    autoFocus,
    className,
    endAdornment,
    fullWidth = true,
    label,
    info = undefined,
    placeholder,
    disabled,
    regex,
    required,
    rows = 4,
    requiredText = t('required', {
      ns: 'common',
    }),
    type = 'text',
    value,
    multiLine = false,
    min,
    maxHeight,
  } = props;

  /** props - actions */
  const { onChange, onKeyDown, onClick, onClickEnd } = props;

  /** consts - clsx */
  const textAreaClasses = clsx(
    'w-full',
    'ring-0',
    'focus:ring-0',
    'shadow-none',
    'focus:shadow-none',
    'focus:outline-none',
    'border-none',
    'focus:border-none',
    '!text-bodyS_regular',
    '!border-grayscale_200',
    'hover:!border-grayscale_400',
    'focus:!border-grayscale_900',
    regex ? 'negative' : '',
    {
      textarea: multiLine,
      input: !multiLine,
    },
    maxHeight ? maxHeight : '',
    endAdornment ? '!pr-9' : '',
    required ? '!border-negative' : ''
  );

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
    <div
      className={clsx(className, {
        'w-full': fullWidth,
      })}
    >
      {label && (
        <div className='pb-2 text-label_medium text-grayscale_700 flex items-center gap-x-[6px]'>
          <label>{label}</label>
          {/* todos: Info component is for single time use only. Should be outside this component  */}
          {info && (
            <div className='tooltip '>
              <InfoIcon className='m-1' />
              <p className='tooltiptext tooltipright text-caption_semibold'>
                {info}
              </p>
            </div>
          )}
        </div>
      )}
      <div
        className='relative max-h-fit'
        onClick={onClick ?? onClick}
        aria-hidden={true}
      >
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
            rows={rows}
          />
        ) : (
          <input
            ref={textareaRef}
            autoFocus={autoFocus}
            onChange={handleInputChange}
            value={value ?? ''}
            required={required}
            placeholder={placeholder}
            disabled={disabled}
            className={textAreaClasses}
            type={type}
            min={min}
            onKeyDown={onKeyDown}
          />
        )}
        {endAdornment && (
          <div
            className={clsx(
              'absolute',
              'top-1/2',
              'translate-y-[-50%]',
              'right-2',
              'p-1',
              'select-none'
            )}
            onClick={onClickEnd ?? onClickEnd}
            aria-hidden={true}
          >
            {endAdornment}
          </div>
        )}
      </div>

      {required && (
        <div className='flex gap-x-1 pt-2 items-center'>
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
