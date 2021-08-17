import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_ALL_COMMENTS,
  UPDATE_COMMENT,
} from "../actions/types";

const initialState = [];

function commentReducer(comments = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_COMMENTS:
      return payload;

    case ADD_COMMENT:
      return [...comments, payload];

    case UPDATE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === payload.id) {
          return {
            ...comment,
            ...payload,
          };
        } else {
          return comment;
        }
      });

    case DELETE_COMMENT:
      return comments.filter(({ id }) => id !== payload.id);

    default:
      return comments;
  }
}

export default commentReducer;
