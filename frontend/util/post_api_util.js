export const fetchPosts = page => {
  return $.ajax({
    url: "api/posts",
    method: "GET",
    data: { page }
  });
};

export const fetchPost = id => {
  return $.ajax({
    url: `api/posts/${id}`,
    method: "GET"
  });
};

export const createPost = post => {
  return $.ajax({
    url: "api/posts",
    method: "POST",
    data: { post }
  });
};

export const deletePost = id => {
  return $.ajax({
    url: `api/posts/${id}`,
    method: "DELETE"
  });
};

export const fetchProfilePosts = (page, id) => {
  return $.ajax({
    method: "GET",
    url: `api/profile/posts/${id}`,
    data: {page}
  });
};

export const fetchNumPosts = (id) => {
  debugger
  return $.ajax({
    method: "GET",
    url: `api/profile/posts/num_posts/${id}`
  })
}