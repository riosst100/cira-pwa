import useSWR from 'swr';
import fetcher from '@/lib/fetch';

export function getCoreData() {
  const { data, mutate } = useSWR('/api/core', fetcher);
  const core = data?.user;
  return [core, { mutate }];
}
