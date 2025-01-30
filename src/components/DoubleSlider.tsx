import classnames from 'classnames';
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './multiRangeSlider.css';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
  minLimit: number;
  maxLimit: number;
  maxWidth?: string;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
  minLimit,
  maxLimit,
  maxWidth = '500px',
}) => {
  // const [minVal, setMinVal] = useState(min);
  // const [maxVal, setMaxVal] = useState(max);
  const [minSliderzIndex, setMinSliderzIndex] = useState(false);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - minLimit) / (maxLimit - minLimit)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(min);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [min, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(max);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [max, getPercent]);

  // Get min and max values when their state changes

  return (
    <div className='container'>
      <input
        type='range'
        min={minLimit}
        max={maxLimit}
        value={min}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, max);
          // setMinVal(value);
          onChange({ min: value.toString(), max });
          event.target.value = value.toString();
          setMinSliderzIndex(true);
        }}
        className={classnames('thumb', {
          // '!thumb--zindex-5': minSliderzIndex,
        })}
        style={{
          width: `${maxWidth}`,
          zIndex: `${minSliderzIndex ? '5' : '3'}`,
        }}
      />
      <input
        type='range'
        min={minLimit}
        max={maxLimit}
        value={max}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, min);
          // setMaxVal(value);
          onChange({ min, max: value.toString() });
          event.target.value = value.toString();
          setMinSliderzIndex(false);
        }}
        className='thumb thumb--zindex-4'
        style={{ width: `${maxWidth}` }}
      />

      <div className='slider' style={{ width: `${maxWidth}` }}>
        <div
          className='slider__left-value text-bodyS_medium text-grayscale_900 whitespace-nowrap bg-white border rounded border-grayscale_extended_100 px-3 py-[6px] w-fit bottom-[16px]'
          style={{
            left: `${
              min < 25
                ? `calc(${getPercent(
                    Number(minValRef?.current?.value) ?? 0
                  )}% - 12px)`
                : ''
            }`,
            right: `${min >= 25 ? `0px` : ''}`,
            zIndex: `${minSliderzIndex ? '5' : '3'}`,
            boxShadow:
              '0px 12px 16px -4px rgba(82, 98, 119, 0.08), 0px 4px 6px -2px rgba(82, 98, 119, 0.03)',
          }}
        >
          {min} years
        </div>
        <div
          className='slider__right-value text-bodyS_medium text-grayscale_900 whitespace-nowrap bg-white border rounded border-grayscale_extended_100 px-3 py-[6px] w-fit bottom-[16px]'
          style={{
            left: `${max <= 6 ? '0px' : `calc(${getPercent(max)}% - 88px)`}`,
            zIndex: `4`,
            boxShadow:
              '0px 12px 16px -4px rgba(82, 98, 119, 0.08), 0px 4px 6px -2px rgba(82, 98, 119, 0.03)',
          }}
        >
          {max == 30 ? '30+' : max} years
        </div>
        <div className='slider__track' />
        <div ref={range} className='slider__range' />
        <div className='absolute flex justify-between w-full mt-[10px] text-caption_regular text-grayscale_extended_400'>
          {['0', '5', '10', '15', '20', '25', '30+'].map((item: any) => (
            <p className='w-[24px] text-center' key={item}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
