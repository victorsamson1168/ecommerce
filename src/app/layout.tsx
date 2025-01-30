// Standard packages
import { Metadata } from 'next';
import { ReactNode } from 'react';

// Third-party packages
import { Toaster } from 'sonner';

// Custom packages
import { Int } from '@/styles/font';

import '@/styles/globals.css';
import '@/styles/gradient.css';
import '@/styles/swiper.css';
// import { ClarityAnalytics } from './ClarityAnalytics';
// import GoogleAnalytics from './GoogleAnalytics';
// import { HotjarTrackingCode } from './HotjarTracking';
// import { MetaPixel } from './MetaPixel';
import Notistack from './Notistack';
import Provider from './provider';

// PropTypes
interface RootLayoutProps {
  /** RootLayout children */
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Main | Redrob',
  description: 'Connect with your top talents across the borders.',
  openGraph: {
    images: ['/app/images-jp/og-banner.svg'],
  },
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout(props: Readonly<RootLayoutProps>) {
  /** props - states */
  const { children } = props;

  return (
    <Provider>
      <html lang='en'>
        <body
          className={`w-full min-h-screen flex flex-col font-Int text-grayscale_900 bg-primary_50 ${Int.variable}`}
        >
          {children}
          {/* <ClarityAnalytics />
          <MetaPixel />
          <HotjarTrackingCode /> */}
          <Notistack />
          <Toaster duration={2000} richColors position='top-center' />
          {/* <GoogleAnalytics /> */}
        </body>
      </html>
    </Provider>
  );
}
