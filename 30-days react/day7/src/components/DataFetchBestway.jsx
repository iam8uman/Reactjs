import { useState, useEffect } from "react";
import axios from "axios";

const Datafetchfromapi = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const changeId = (e) => {
    setId(e.target.value);
  };
  return (
    <>
      <div className="container p-5 m-5 bg-slate-900 text-left font-mono">
        <div className="button btn-primary m-4 p-4 bg-purple-500 text-center">
          Top news title
        </div>
        <input type="text" className="text-center container" name="" id="" value={id} onChange={changeId} />
        <div>{post.title}</div>
      </div>
    </>
  );
};

export default Datafetchfromapi;
