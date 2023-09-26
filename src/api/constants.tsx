import {DEFAULT_ENV, BASEURL_DEV} from '@env';
export const googleScopes = [
  'openid',
  'email',
  'profile',
  'https://www.googleapis.com/auth/drive.readonly',
];

export const getBaseUrl = () => {
  if (DEFAULT_ENV === 'DEV') {
    return BASEURL_DEV;
  }
};

////////   Api end point ////
export const USER_SIGN_UP = 'v1/user/';
