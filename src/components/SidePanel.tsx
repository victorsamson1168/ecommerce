'use client';
// Standard packages

import { FC, ReactNode } from 'react';

// Third party packages

// Custom packages

import clsx from 'clsx';

type SidePanelProps = {
  isOpen?: boolean;
  children: ReactNode;
};

// this resolver pattern is used to intercept the modal and then add the talent to a particular bookmark.
type PromiseResolver = (value: boolean) => void;

export const SidePanel: FC<SidePanelProps> = (
  props: Readonly<SidePanelProps>
) => {
  /*  props - states   */
  const { isOpen, children } = props;

  return (
    <div
      className={clsx([
        'bg-white h-[calc(100vh-64px)] md:w-[600px] w-full transform overflow-hidden',
        'drop-shadow-[0_0_8px_rgba(12,21,29,0.08)]',
        'duration-0 ease-in-out',
        {
          'translate-x-0': isOpen,
          'translate-x-full': !isOpen,
          'opacity-0': !isOpen,
          '!max-h-0': !isOpen,
        },
      ])}
    >
      {children}
    </div>
  );
};
export default SidePanel;
