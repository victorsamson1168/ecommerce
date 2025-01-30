// Standard packages
import { CSSProperties, FC, ReactNode } from 'react';

// Third-party packages
import clsx from 'clsx';

// PropTypes
interface ButtonProps {
  /** Button children */
  children: ReactNode;
  /** Button variant */
  variant?:
    | 'primary'
    | 'primary-black'
    | 'primary-border'
    | 'secondary'
    | 'secondary-white'
    | 'secondary-black'
    | 'secondary-apricot'
    | 'tertiary'
    | 'tertiary-primary'
    | 'tertiary-black'
    | 'positive'
    | 'destructive';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Button disabled */
  disabled?: boolean;
  /** Button active */
  active?: boolean;
  /** Button arrow icon */
  icon?: string;
  /** Add button css style */
  className?: string;
  /** Button action */
  onClick?: () => void;
  /** If `true`, the button will take up the full width of its container. */
  fullWidth?: boolean;
  /** Additional style tag */
  style?: CSSProperties | undefined;
  /** Native button dom type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  /** props */
  const {
    children,
    variant = 'primary',
    size = 'medium',
    disabled,
    icon,
    className,
    fullWidth = false,
    style,
    type = 'button',
    onClick,
  } = props;

  /** consts */
  const isPrimary = variant === 'primary';
  const isPrimaryBlack = variant === 'primary-black';
  const isPrimaryBorder = variant === 'primary-border';
  const isSecondary = variant === 'secondary';
  const isTertiary = variant === 'tertiary';
  const isSecondaryWhite = variant === 'secondary-white';
  const isSecondaryBlack = variant === 'secondary-black';
  const isSecondaryApricot = variant === 'secondary-apricot';
  const isPositive = variant === 'positive';
  const strokeColor = isPrimary
    ? '#ffffff'
    : isPrimaryBorder
    ? '#69A3CC'
    : isTertiary
    ? '#677990'
    : isSecondary
    ? '#217BBB'
    : isSecondaryBlack
    ? '#22272F'
    : isSecondaryWhite
    ? '#EB896A'
    : isPositive
    ? '#6BBE79'
    : isSecondaryApricot
    ? disabled
      ? '#FF0000'
      : '#ffffff'
    : '#000000';

  const IconDisplay = () => {
    const iconSize = size === 'large' ? 24 : size === 'medium' ? 20 : 16;
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d={icon === 'left' ? 'M15 5L8 12L15 19' : 'M9 5L16 12L9 19'}
          stroke={strokeColor}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  };

  const PlusIconDisplay = () => {
    return (
      <svg
        width='17'
        height='16'
        viewBox='0 0 17 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Small / Plus'>
          <path
            id='Vector 580'
            d='M3.5 8H13.5'
            strokeWidth='1.5'
            stroke={strokeColor}
            strokeLinecap='round'
          />
          <path
            id='Vector 581'
            d='M8.5 13L8.5 3'
            stroke={strokeColor}
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </g>
      </svg>
    );
  };

  const rootClasses = clsx(
    `btn-${variant}`,
    `btn-${size}`,
    className,
    'btn',
    'flex',
    'items-center',
    'gap-x-2',
    { 'flex-1': fullWidth }
  );

  return (
    <button
      style={style}
      type={type}
      className={rootClasses}
      disabled={disabled}
      // onClick={onClick}
      onClick={event => {
        event.stopPropagation();
        onClick && onClick();
      }}
    >
      {icon === 'plusStart' && PlusIconDisplay()}
      {icon === 'left' && IconDisplay()}
      {children}
      {icon === 'right' && IconDisplay()}
      {icon === 'plus' && PlusIconDisplay()}
    </button>
  );
};

export default Button;
