import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = (props) => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {post ? (
        <div>
          <div>ID: {post.id}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default PostDetail;
