import useSWR from 'swr';

import fetcher from '@/utils/fetcher';

export default function useNewPosts() {
  const {
    data,
    error: isError,
    isLoading,
  } = useSWR<
    {
      slug: string;
      title: string;
      createdAt: string;
    }[]
  >('https://node-api-j076.onrender.com/api/activity', fetcher, {
    fallbackData: [],
  });

  return {
    isLoading,
    isError,
    data,
  };
}
