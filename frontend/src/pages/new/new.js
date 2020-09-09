import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { createPost } from "../../services";
import { Loader } from "../../components";
import * as s from "./styled-new";

export default () => {
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const submit = ({ author, place, description, hashtags }) => {
    const formData = new FormData();

    formData.append("image", image);
    formData.append("author", author);
    formData.append("place", place);
    formData.append("description", description);
    formData.append("hashtags", hashtags);

    setLoading(true);
    createPost(formData)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <s.NewPost onSubmit={handleSubmit(submit)}>
        <s.InputFile for="file">{image.name || "Escolher Foto"}</s.InputFile>

        <s.Input
          name="author"
          ref={register({ required: true })}
          placeholder="Autor"
        />
        <s.Input
          name="place"
          ref={register({ required: true })}
          placeholder="Lugar"
        />
        <s.Input
          name="description"
          ref={register({ required: true })}
          placeholder="Descrição"
        />
        <s.Input
          name="hashtags"
          ref={register({ required: true })}
          placeholder="#Hastags"
        />

        <s.Button
          disabled={loading || !image.name}
          type="submit"
          value="Enviar"
        />
        {loading && (
          <Loader customStyle={{ alignSelf: "center", marginTop: 5 }} />
        )}
      </s.NewPost>
      <input
        style={{ display: "none" }}
        onChange={({ target }) => target.files[0] && setImage(target.files[0])}
        type="file"
        id="file"
      />
    </>
  );
};
