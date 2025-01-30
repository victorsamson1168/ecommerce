// Third-party packages
import { getUserDetail } from '@/api/user';
import { useQuery } from '@tanstack/react-query';

// Custom packages


export function useUser() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => getUserDetail().then(res => res),
    retry: false,
    refetchOnWindowFocus: false,
    // onError: error => {
    //   if (error) {
    //     localStorage.removeItem('access_token_jp');
    //     queryClient.clear();
    //     router.push('/auth/login');
    //   }s
    // },s
  });
}
