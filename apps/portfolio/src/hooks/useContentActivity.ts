import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

import type { TContentActivity } from '@/types';

export default function useContentActivity() {
  const {
    data,
    error: isError,
    isLoading,
  } = useSWR<TContentActivity[]>(
    'https://node-api-k45z.onrender.com/api/activity',
    fetcher,
    {
      fallbackData: [],
    }
  );

  return {
    isLoading,
    isError,
    data,
  };
}
