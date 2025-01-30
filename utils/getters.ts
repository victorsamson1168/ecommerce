import { useLocalStorage } from '@/lib/hooks';

export class Getters {
  static readonly getHeaderVisible = () => {
    return useLocalStorage('headerVisible') === 'true';
  };
}
