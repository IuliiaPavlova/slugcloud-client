import fetch from 'isomorphic-unfetch';
import { Slug, SlugResponse } from '../types';

export const FETCH_SLUG_REQUEST = 'FETCH_SLUG_REQUEST';
export const FETCH_SLUG_SUCCESS = 'FETCH_SLUG_SUCCESS';
export const FETCH_SLUG_FAILURE = 'FETCH_SLUG_FAILURE';
export const UNSET_ERROR = 'UNSET_ERROR';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// const { SLUGCLOUD_BACKEND_URL } = process.env;

export interface SlugcloudAction<T> {
  type: string;
  payload: T
}

export const fetchSlugSuccess = (id, url, slug): SlugcloudAction<Slug> => ({
  type: FETCH_SLUG_SUCCESS,
  payload: { _id: id, url, slug },
});

export const fetchSlugFailure = () => ({
  type: FETCH_SLUG_FAILURE,
  payload: { message: 'Cannot connect to the server, please try again later!' },
});

export const unsetError = () => ({
  type: FETCH_SLUG_FAILURE,
});

export const fetchSlugRequest = (url, slug) => async (dispatch) => {
  try {
    // TODO: CHANGE TO ENV
    const response = await fetch('http://localhost:3300/api/slugs', {
      method: 'POST',
      body: JSON.stringify({
        url,
        slug,
        pid: 'qwertyuiop',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const slugResponse: SlugResponse = await response.json();
    dispatch(fetchSlugSuccess(slugResponse._id, slugResponse.url, slugResponse.slug));
  } catch (err) {
    dispatch(fetchSlugFailure());
  }
};

export const openModal = (type, component) => ({
  type: OPEN_MODAL,
  payload: { type, component },
});

export const closeModal = (type) => ({
  type: CLOSE_MODAL,
  payload: { type },
});
