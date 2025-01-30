// Standard pacakges
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useEffect, useRef, useState } from 'react';

// Third-party packages
import { useQueryClient } from '@tanstack/react-query';

// Custom packages
import { useUser } from './queries';

/**
 * @param nextUrl When present, route the users to this path on Success
 */
export const useAuth = (nextUrl?: string) => {
  const router = useRouter();
  const { data, isLoading, isError } = useUser();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (!isLoading && isError) {
      localStorage.removeItem('access_token_jp');
      queryClient.clear();
      router.push(`/app/auth/login?next=${nextUrl}`);
    }
  }, [router, isLoading, isError, nextUrl]);

  // You can return additional authentication-related data if needed
  return { data, isLoading, isError };
};

/**
 * @param nextUrl When present, route the users to this path on Success
 */
export const useNoAuth = (nextUrl?: string) => {
  const router = useRouter();
  const { data, isLoading, isError } = useUser();

  useEffect(() => {
    if (!isLoading && data) {
      router.push(nextUrl ?? '/');
    }
  }, [router, isLoading, isError]);
};

/**
 * @param key key to be updated
 * @param value value to update
 *
 */

interface IPayload {
  key: string;
  value: string;
}

export const useUpdateURLParams = () => {
  const urlParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return ({ key, value }: IPayload) => {
    const current = new URLSearchParams(Array.from(urlParams.entries()));

    if (value) {
      current.set(key, value);
    } else {
      current.delete(key);
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`, { scroll: false });
  };
};

export const useTypewriter = (
  text: string = '',
  speed: number = 40,
  shouldType: boolean = true
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const textRef = useRef(text);
  const hasStartedTypingRef = useRef(false);

  useEffect(() => {
    if (textRef.current !== text) {
      textRef.current = text;
      setDisplayedText('');
      setTyping(true);
      hasStartedTypingRef.current = false;
    }
  }, [text]);

  useEffect(() => {
    if (!shouldType || hasStartedTypingRef.current || !text) return;

    hasStartedTypingRef.current = true;
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        currentIndex++;
      } else {
        setTyping(false);
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, shouldType]);

  return { displayedText, typing };
};

export const useLocalStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState<any>(null);

  useEffect(() => {
    // Check if running in a browser
    if (typeof window !== 'undefined') {
      try {
        const item = localStorage.getItem(key);
        setStoredValue(item);
      } catch (error) {
        setStoredValue(null);
      }
    }
  }, []);

  return storedValue;
};
