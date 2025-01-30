'use client';

// Standard packages
import { ReactNode, useEffect, useRef, useState } from 'react';

// Third-party packages
import clsx from 'clsx';
import { ExpandIcon } from './Icons';

// Custom packages

// PropTypes
type ChildrenType = [ReactNode, ReactNode];
type ResizableDivProps = {
  children: ChildrenType;
  width?: string;
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  className?: string;
  orientation: 'vertical' | 'horizontal';
};

export default function ResizableDiv(props: ResizableDivProps) {
  /** props - states */
  const {
    children,
    width,
    height,
    maxHeight,
    maxWidth,
    className,
    orientation,
  } = props;

  /** props - actions */

  /** useState hooks */

  const [isHovered, setIsHovered] = useState(false);

  /** consts - clsx */
  const Direction = {
    Top: 'top',
    TopLeft: 'topLeft',
    TopRight: 'topRight',
    Right: 'right',
    Bottom: 'bottom',
    BottomLeft: 'bottomLeft',
    BottomRight: 'bottomRight',
    Left: 'left',
  };

  const panelRef = useRef<any>(null);
  const firstChildRef = useRef<any>(null);
  const secondChildRef = useRef<any>(null);

  const handleResize = (direction: any, movementX: any, movementY: any) => {
    const panel = panelRef.current;
    const firstChild = firstChildRef.current;
    const secondChild = secondChildRef.current;
    if (!panel || !firstChild || !secondChild) return;

    const { width, height, x, y } = panel.getBoundingClientRect();
    const firstChildDimensions = firstChild.getBoundingClientRect();
    const secondChildDimensions = secondChild.getBoundingClientRect();

    const resizeTop = () => {
      panel.style.height = `${height - movementY}px`;
      panel.style.top = `${y + movementY}px`;
    };

    const resizeRight = () => {
      firstChild.style.width = `${movementX - firstChildDimensions.x}px`;
      secondChild.style.width = `${
        width - (movementX - firstChildDimensions.x) - 8
      }px`;
    };

    const resizeBottom = () => {
      // panel.style.height = `${height + movementY}px`;
      firstChild.style.height = `${movementY - firstChildDimensions.y}px`;
      secondChild.style.height = `${
        height - (movementY - firstChildDimensions.y) - 8
      }px`;
    };

    const resizeLeft = () => {
      panel.style.width = `${width - movementX}px`;
      panel.style.left = `${x + movementX}px`;
    };

    switch (direction) {
      case Direction.TopLeft:
        resizeTop();
        resizeLeft();
        break;

      case Direction.Top:
        resizeTop();
        break;

      case Direction.TopRight:
        resizeTop();
        resizeRight();
        break;

      case Direction.Right:
        resizeRight();
        break;

      case Direction.BottomRight:
        resizeBottom();
        resizeRight();
        break;

      case Direction.Bottom:
        resizeBottom();
        break;

      case Direction.BottomLeft:
        resizeBottom();
        resizeLeft();
        break;

      case Direction.Left:
        resizeLeft();
        break;

      default:
        break;
    }
  };

  const [direction, setDirection] = useState('');
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!direction) return;

      const ratio = window.devicePixelRatio;

      handleResize(direction, e.clientX, e.clientY);
    };

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown, direction, handleResize]);

  useEffect(() => {}, []);

  useEffect(() => {
    const handleMouseUp = () => {
      setMouseDown(false);
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (direction: any) => () => {
    setDirection(direction);
    setMouseDown(true);
  };

  return (
    <div
      className={clsx([
        className,
        'relative flex !h-full !w-full',
        {
          'cursor-ew-resize':
            (isHovered || mouseDown) && orientation === 'horizontal',
        },
        {
          'cursor-ns-resize':
            (isHovered || mouseDown) && orientation === 'vertical',
        },
        {
          'flex-col': orientation === 'vertical',
        },
      ])}
      ref={panelRef}
    >
      <div
        ref={firstChildRef}
        className={clsx([
          { 'w-[50%] min-w-[30%]': orientation === 'horizontal' },
          { 'h-[50%] min-h-[30%]': orientation === 'vertical' },
        ])}
      >
        {children[0]}
      </div>
      {orientation === 'horizontal' ? (
        <div
          aria-hidden
          className={
            '!w-2 flex items-center justify-center min-h-full cursor-ew-resize relative'
          }
          onMouseDown={handleMouseDown(Direction.Right)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='w-[3px] absolute rounded  h-10 top-[calc(90%-20px)] left-[-8px] z-10 '>
            <ExpandIcon />
          </div>
          <div
            aria-hidden
            className={clsx([
              'h-full w-[1px] z-0 bg-grayscale_extended_200 transition-all',
              { 'scale-x-[100%]': isHovered || mouseDown },
              { '!bg-grayscale_300': isHovered || mouseDown },
            ])}
          />
        </div>
      ) : (
        <div
          aria-hidden
          className='!h-2 flex items-center justify-center w-full cursor-ns-resize relative'
          onMouseDown={handleMouseDown(Direction.Bottom)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='h-[3px] rounded absolute bg-black w-10 right-[calc(50%-20px)] top-[2px] z-10 ' />
          <div
            aria-hidden
            className={clsx([
              'w-full h-[1px] z-0 bg-grayscale_extended_200 transition-all',
              { 'scale-y-[800%]': isHovered || mouseDown },
              { '!bg-primary': isHovered || mouseDown },
            ])}
          />
        </div>
      )}

      <div
        ref={secondChildRef}
        className={clsx([
          { 'w-[50%] min-w-[30%]': orientation === 'horizontal' },
          { 'h-[50%] min-h-[30%]': orientation === 'vertical' },
        ])}
      >
        {children[1]}
      </div>
    </div>
  );
}
