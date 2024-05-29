import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

import type { TContentActivity } from '@/types';

export default function useContentActivity() {
  const {
    data,
    error: isError,
    isLoading,
  } = useSWR<TContentActivity[]>(
    'https://node-api-j076.onrender.com/api/activity',
    // 'http://10.0.20.132:5000/api/activity',
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
