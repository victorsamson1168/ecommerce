// Standard packages
import { FC } from 'react';

// PropTypes
type DonutProps = {
  /** Current fill of the donut */
  value?: number;
  /** Label inside the donut */
  label?: string;
};

const Donut: FC<DonutProps> = ({ value = 0, label = '' }: DonutProps) => {
  // Ensure value is within 0 to 100 range
  const normalizedValue = Math.min(Math.max(value, 0), 100);

  // Circle properties
  const radius = 14.5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div className='w-[120px] h-[120px] relative'>
      <svg viewBox='0 0 36 36' className='block mx-auto max-w-80 max-h-80'>
        <circle
          fill='none'
          strokeWidth='7'
          stroke={'#C1DDED'}
          cx='18'
          cy='18'
          r={radius}
        />
        <circle
          fill='none'
          strokeWidth='7'
          strokeLinecap='butt'
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          stroke={label ? `#217BBB` : '#F5F8FB'}
          transform='rotate(-90 18 18)'
          cx='18'
          cy='18'
          r={radius}
        />
      </svg>
      <h3 className='text-h4_bold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        {label || 0}
      </h3>
    </div>
  );
};

export default Donut;
