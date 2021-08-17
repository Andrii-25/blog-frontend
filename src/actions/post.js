import {
  GET_ALL_POSTS,
  GET_ONE_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
} from "./types";
import PostService from "../services/post.service";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await PostService.getAllPosts();

    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await PostService.getOnePost(id);

    dispatch({
      type: GET_ONE_POST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addPost = (post) => async (dispatch) => {
  try {
    const res = await PostService.addNewPost(post);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updatePost = (post, id) => async (dispatch) => {
  try {
    const res = await PostService.updatePost(post, id);

    dispatch({
      type: UPDATE_POST,
      payload: post,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await PostService.deletePost(id);

    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
