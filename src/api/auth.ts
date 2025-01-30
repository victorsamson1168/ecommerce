import { ApiHandler } from '@/lib/api-handler';
import axios from 'axios';

export async function postLoginDetail(payload: any) {
  const handler = new ApiHandler({
    path: '/jp/auth/signin',
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}

export async function postSignUpDetail(payload: any) {
  const handler = new ApiHandler({
    path: '/v3/jp/auth/signup',
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}

export async function postOtpRequest(payload: any) {
  const handler = new ApiHandler({
    path: '/jp/auth/otp/send',
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}

export async function postOtpVerify(payload: any) {
  const handler = new ApiHandler({
    path: '/jp/auth/otp/verify',
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}

export async function postPasswordLost(payload: any) {
  const currentHost = typeof window !== 'undefined' ? window.location.host : '';
  payload.host = currentHost;
  const handler = new ApiHandler({
    path: 'v2/jp/users/password/lost',
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}

export async function patchPasswordReset(payload: any) {
  const handler = new ApiHandler({
    path: '/jp/users/password/reset',
    data: payload,
  });
  const { data } = await handler.patch();
  return data;
}

export async function postVerify(payload: any) {
  const handler = new ApiHandler({
    path: '/auth/verify',
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}
export async function getUserCountry() {
  let data = {};
  try {
    const res = await axios.get('https://api.iplocation.net/?cmd=get-ip');
    const countryInfo = await axios.get(
      ` https://api.iplocation.net/?cmd=ip-country&ip=${res.data.ip}`
    );
    return countryInfo;
  } catch (error) {
    throw error;
  }
  // const { data } = await handler.get();
  // return data;
}

export async function postGoogleAuth(payload: any) {
  const handler = new ApiHandler({
    path: '/v2/jp/auth/google',
    data: payload,
  });
  const { data } = await handler.post();
  return data;
}
