'use client';

// Standard packages
import { ReactNode, useEffect } from 'react';

// Third-party packages
import i18n from '@/lang/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { RecoilRoot } from 'recoil';

// Custom packages

dayjs.extend(relativeTime);

// PropTypes
interface ProviderProps {
  /** provider children */
  children: ReactNode;
}

// Create a react-query client
const queryClient = new QueryClient();

function Provider(props: Readonly<ProviderProps>) {
  /** props - state */
  const { children } = props;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localLanguage = localStorage.getItem('langMode');
      if (localLanguage) {
        i18n.changeLanguage(localLanguage);
      } else {
        const browserLanguage = navigator.language;
        const language = browserLanguage.split('-')[0]; // Get only the language code

        i18n.changeLanguage('en');
        localStorage?.setItem('langMode', language);
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
}

export default Provider;
