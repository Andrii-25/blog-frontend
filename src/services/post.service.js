import axios from "axios";

const API_URL = "http://localhost:8080/posts";

class PostService {
  getAllPosts() {
    return axios.get(`${API_URL}/all`);
  }

  getOnePost(id) {
    return axios.get(`${API_URL}?id=${id}`);
  }

  addNewPost(post) {
    return axios.post(`${API_URL}`, post);
  }

  updatePost(post, id) {
    return axios.put(`${API_URL}?id=${id}`, post);
  }

  deletePost(id) {
    return axios.delete(`${API_URL}?id=${id}`);
  }
}

export default new PostService();
