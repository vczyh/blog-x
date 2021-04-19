import http from '.';

// eslint-disable-next-line import/prefer-default-export
export const getTagList = () => http.get('/blog/v1/tags');
