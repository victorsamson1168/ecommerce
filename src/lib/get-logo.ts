import { useEffect, useMemo, useRef, useState } from 'react';
import { Formatter } from 'utils/formatter';

interface ApiResponse {
  [key: string]: string;
}

interface UseThirdPartyApiResult<T> {
  data: string;
  loading: boolean;
  error: string | null;
}

export function useGetLogo(name: string): UseThirdPartyApiResult<string> {
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const cacheRef = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    if (!name) {
      setData('');
      setLoading(false);
      setError(null);
      return;
    }

    const cachedData = cacheRef.current.get(name);
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
      setError(null);
      return;
    }

    let isCancelled = false;

    const fetchData = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://autocomplete.clearbit.com/v1/companies/suggest?query=${Formatter.slugify(
            name
          )}`
        );
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result: any = await response.json();

        if (!isCancelled) {
          let value = '';
          if (Array.isArray(result) && result.length > 0) {
            value = result[0]?.logo;
          }
          cacheRef.current.set(name, value);
          setData(value);
        }
      } catch (err: unknown) {
        if (!isCancelled) {
          setError(
            err instanceof Error ? err.message : 'An unknown error occurred'
          );
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [name]);

  const memoizedData = useMemo(() => data, [data]);

  return {
    data: memoizedData,
    loading,
    error,
  };
}
