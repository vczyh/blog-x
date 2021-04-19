import http from '.';

export const addPost = (data) => http.post('/blog/v1/posts', data);

export const getPostList = (format, page, pageSize, tagId) => http.get('/blog/v1/posts', {
  params: {
    format,
    page,
    page_size: pageSize,
    tag_id: tagId,
  },
});

export const getPostByPostId = (id) => http.get(`/blog/v1/posts/${id}`);

export const updatePost = (id, data) => http.put(`/blog/v1/posts/${id}`, data);

export const addPostTag = (postId, data) => http.put(`/blog/v1/posts/${postId}/tags`, data);

export const deletePostTag = (postId, tagId) => http.delete(`/blog/v1/posts/${postId}/tags?tag_id=${tagId}`);
