import { ApiHandler } from '@/lib/api-handler';

export async function getUserDetail() {
  const handler = new ApiHandler({
    path: '/v2/jp/users/profile',
  });
  const hasLocalStorage =
    typeof localStorage !== 'undefined' &&
    localStorage.getItem('access_token_jp') !== null;
  if (!hasLocalStorage) return null;
  const { data } = await handler.get();
  return data;
}

export async function patchUserProfile(payload: any) {
  const handler = new ApiHandler({
    path: `/jp/users/profile`,
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}

export async function getUserCompany() {
  const handler = new ApiHandler({
    path: '/jp/users/profile/company',
  });
  const { data } = await handler.get();
  return data;
}

export async function patchUserCompany(payload: FormData) {
  const handler = new ApiHandler({
    path: `/jp/users/profile/company`,
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}
