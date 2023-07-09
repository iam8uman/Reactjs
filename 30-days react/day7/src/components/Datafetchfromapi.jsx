import { useState, useEffect } from "react";
import axios from "axios";

const Datafetchfromapi = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <>
      <div className="container p-5 m-5 bg-slate-900 text-left font-mono">
        <div className="button btn-primary m-4 p-4 bg-purple-500 text-center">Top news title</div>
        <ul>
          {post.map((p) => (
            <li key={p.id}>{p.id}. {p.title}{" "}
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
};

export default Datafetchfromapi;
