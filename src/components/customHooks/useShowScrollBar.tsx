import { useEffect } from 'react';

const useShowScrollBar = () => {
  useEffect(() => {
    document.body.style.overflowY = 'scroll';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);
};

export default useShowScrollBar;
