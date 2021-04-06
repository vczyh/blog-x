import http from '.';

export const addPost = (data) => http.post('/blog/v1/posts', data);

export const getPost = () => http.get('/blog/v1/posts');

export const getPostByPostId = (id) => http.get(`/blog/v1/posts/${id}`);

export const updatePost = (id, data) => http.put(`/blog/v1/posts/${id}`, data);
