import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    api
      .get("posts")
      .then(({ data }) => resolve(data))
      .catch((e) => reject(e));
  });
};

export const createPost = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post("posts", data)
      .then(({ data }) => resolve(data))
      .catch((e) => reject(e));
  });
};

export const likePost = (id) => {
  return new Promise((resolve, reject) => {
    api
      .post(`posts/${id}/like`)
      .then(({ data }) => resolve(data))
      .catch((e) => reject(e));
  });
};
