import { Portal, Slug } from '../types';

export interface SlugcloudState {
  slugs: Slug[];
  error: string;
  portals: Portal[];
}

export const initialState: SlugcloudState = {
  slugs: [],
  error: '',
  portals: [],
};
