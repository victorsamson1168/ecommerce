'use client';

// Standard packages
import { FC } from 'react';

// Third-party packages
import clsx from 'clsx';

/** PropTypes */
interface ToggleProps {
  /** If `true`, the component is filled with color. */
  checked: boolean;
  /** Callback triggered when the state is changed */
  onChange: (newValue: boolean) => void;

  disabled?: boolean;
}

const Toggle: FC<ToggleProps> = (props: ToggleProps) => {
  /** props - state */
  const { checked, disabled = false } = props;

  /** props - action */
  const { onChange } = props;

  /** custom handlers */
  const handleChange = () => onChange(!checked);

  /** consts - clsx */
  const containerClasses = clsx({
    'toggle-container': true,
    'toggle--checked': checked,
    'cursor-not-allowed toggle--disabled touch-none pointers-event-none':
      disabled,
  });

  const circleClasses = clsx({
    'toggle-circle': true,
    'toggle--checked': checked,
    'cursor-not-allowed touch-none pointers-event-none': disabled,
  });

  return (
    <div
      className='toggle'
      onClick={disabled ? () => {} : handleChange}
      aria-hidden={true}
    >
      <div className={containerClasses} />
      <div className={circleClasses} />
    </div>
  );
};

export default Toggle;
