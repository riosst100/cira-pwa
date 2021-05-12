import useSWR from 'swr';
import fetcher from '@/lib/fetch';

export function useCurrentUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data?.user;
  return [user, { mutate }];
}

export function isLogin() {
  const { data } = useSWR('/api/user', fetcher);
  const user = data?.user;
  return user ? true : false;
}

export function useUser(id) {
  const { data } = useSWR(`/api/users/${id}`, fetcher, { revalidateOnFocus: false });
  return data?.user;
}
