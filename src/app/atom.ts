import { atom } from 'recoil';

export const openLeftSideNavState = atom<number>({
  key: 'openLeftSideNav',
  default: 64,
});
