// Standard packages
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

// Third-party packages
import clsx from 'clsx';

// PropTypes
type TooltipProps = {
  children: ReactNode;
  label?: string;
  position?: 'right' | 'left' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg';
};

const Tooltip2: FC<TooltipProps> = ({
  label,
  position = 'bottom',
  size = 'sm',
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipOffset = 8;

      const positions = {
        top: {
          top: rect.top - tooltipOffset,
          left: rect.left + rect.width / 2,
        },
        bottom: {
          top: rect.bottom + tooltipOffset,
          left: rect.left + rect.width / 2,
        },
        left: {
          top: rect.top + rect.height / 2,
          left: rect.left - tooltipOffset,
        },
        right: {
          top: rect.top + rect.height / 2,
          left: rect.right + tooltipOffset,
        },
      };

      setTooltipPosition(positions[position] || positions.bottom);
    }
  }, [visible, position]);

  const sizeClsx = clsx([
    'min-w-fit',
    { 'whitespace-normal w-[400px]': size === 'lg' },
    { 'whitespace-normal w-[200px]': size === 'md' },
    { 'whitespace-nowrap': size === 'sm' },
  ]);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className='relative inline-block'
      >
        {children}
      </div>
      {visible &&
        label &&
        ReactDOM.createPortal(
          <div
            style={{
              position: 'absolute',
              top: tooltipPosition.top + window.scrollY,
              left: tooltipPosition.left + window.scrollX,
              transform:
                position === 'top' || position === 'bottom'
                  ? 'translateX(-50%)'
                  : 'translateY(-50%)',
              zIndex: 1000,
            }}
            className={clsx([
              'px-2 py-1 bg-[#2E3642] text-white rounded text-caption_semibold',
              'shadow-lg',
              sizeClsx,
            ])}
          >
            {label}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip2;
