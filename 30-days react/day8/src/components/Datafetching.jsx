import { useEffect, useState } from "react";
import axios from "axios";

const Datafetching = () => {
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoad(false);
        setPost(res.data);
        setErr("Kaisa error hey yar ye toh");
        console.log(res.data);
      })
      .catch((error) => {
        setLoad(true);
        setPost({});
        setErr(error);
      });
  }, []);
  return (
    <>
      <h1 className="text-3xl text-slate-800 bg-slate-300">

        {load ? "loading" : post.title}
        {err ? err : null}

      </h1>
    </>
  );
};

export default Datafetching;
