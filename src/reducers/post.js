import {
  ADD_POST,
  DELETE_POST,
  GET_ALL_POSTS,
  GET_ONE_POST,
  UPDATE_POST,
} from "../actions/types";

const initialState = [];

function postReducer(posts = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_POSTS:
      return payload;

    case GET_ONE_POST:
      return payload;

    case ADD_POST:
      return [...posts, payload];

    case UPDATE_POST:
      return posts.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload,
          };
        } else {
          return post;
        }
      });

    case DELETE_POST:
      return posts.filter(({ id }) => id !== payload.id);

    default:
      return posts;
  }
}

export default postReducer;
