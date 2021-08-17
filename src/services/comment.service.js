import axios from "axios";

const API_URL = "http://localhost:8080/comments";

class CommentService {
  getAllComments() {
    return axios.get(`${API_URL}/all`);
  }

  addNewComment(comment) {
    return axios.post(`${API_URL}`, comment);
  }

  updateComment(comment, id) {
    return axios.put(`${API_URL}?id=${id}`, comment);
  }

  deleteComment(id) {
    return axios.delete(`${API_URL}?id=${id}`);
  }
}

export default new CommentService();
