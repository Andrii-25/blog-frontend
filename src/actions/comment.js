import {
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from "./types";
import CommentService from "../services/comment.service";

export const getComments = () => async (dispatch) => {
  try {
    const res = await CommentService.getAllComments();

    dispatch({
      type: GET_ALL_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addComment = (comment) => async (dispatch) => {
  try {
    const res = await CommentService.addNewComment(comment);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateComment = (comment, id) => async (dispatch) => {
  try {
    const res = await CommentService.updateComment(comment, id);

    dispatch({
      type: UPDATE_COMMENT,
      payload: comment,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    await CommentService.deleteComment(id);

    dispatch({
      type: DELETE_COMMENT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
