import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import * as s from "./styled-feed";
import { icons } from "../../assets";
import { likePost } from "../../services";
import { getPosts } from "../../services";
import { Loader } from "../../components";

const socket = io("http://localhost:3333");

export default () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((postsApi) => {
        setPosts(postsApi);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // gambiarra pq nem tudo na vida são flores 😘

    if (posts.length) {
      socket.on("post", (newPost) => {
        setPosts([newPost, ...posts]);
      });
    }
  }, [posts]);

  const handleLike = (id) => {
    socket.on("like", (likedPost) => {
      setPosts(
        posts.map((post) => (post._id === likedPost._id ? likedPost : post))
      );
    });
    likePost(id)
      .then(() => {})
      .catch((e) => console.log(e.response));
  };

  if (loading)
    return (
      <s.LoaderContainer>
        <Loader />
      </s.LoaderContainer>
    );

  return (
    <s.PostList>
      {!posts.length ? (
        <label>Não foi possivel buscar os posts {":("}</label>
      ) : (
        posts.map((post) => (
          <s.PostWrapper key={post.id}>
            <s.PostHeader>
              <s.UserInfo>
                <s.UserLabel>{post.author}</s.UserLabel>
                <s.PlaceLabel>{post.place}</s.PlaceLabel>
              </s.UserInfo>

              <s.Icon src={icons.more} />
            </s.PostHeader>

            <s.PostImage src={`http://localhost:3333/file/${post.image}`} />

            <s.PostFooter>
              <s.Actions>
                <s.Icon
                  onClick={() => handleLike(post._id)}
                  height={20}
                  src={icons.like}
                  alt="like"
                />

                <s.Icon height={20} src={icons.comment} alt="comment" />
                <s.Icon height={20} src={icons.send} alt="send" />
              </s.Actions>
              <strong>{post.likes}</strong>

              <s.PostDescription>
                {post.description} <br />
                <s.PostHashTags>{post.hashtags}</s.PostHashTags>
              </s.PostDescription>
            </s.PostFooter>
          </s.PostWrapper>
        ))
      )}
    </s.PostList>
  );
};
