// import { useState, useEffect } from "react";
// import axios from "axios";

// const Datafetchfromapi = () => {
//   const [post, setPost] = useState({}); //here useState ma object pass garna parxa. aagadi sabai data ko lagi empty array pass gareko thiyo.

//   const [id, setId] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   const changeId = (e) => {
//     setId(e.target.value);
//   };
//   return (
//     <>
//       <div className="container p-5 m-5 bg-slate-900 text-left font-mono">
//         <div className="button btn-primary m-4 p-4 bg-purple-500 text-center">
//           Top news title
//         </div>
//         <input type="text" className="text-center container" name="" id="" value={id} onChange={changeId} />
//         <div>{post.title}</div>
//       </div>
//     </>
//   );
// };

// export default Datafetchfromapi;


// to make display title only after the button clicked 

import { useState, useEffect } from "react";
import axios from "axios";

const Datafetchfromapi = () => {
  const [post, setPost] = useState({}); //here useState ma object pass garna parxa. aagadi sabai data ko lagi empty array pass gareko thiyo.

  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1);

  const FetchId=()=>{
    setIdButton(id) //this id from input fields 
  }


  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButton]);

  const changeId = (e) => {
    setId(e.target.value);
  };

 
  return (
    <> 
      <div className="container p-5 m-5 bg-slate-900 text-left font-mono">
        <div className="button btn-primary m-4 p-4 bg-purple-500 text-center">
          Top news title
        </div>
        <input type="text" className="text-center " name="" id="" value={id} onChange={changeId} />
        <button type="button" className="bg-black border-2 border-white m-4 p-4 rounded-md" onClick={FetchId}>Fetch title</button>
        <div>{post.title}</div>
      </div>
    </>
  );
};

export default Datafetchfromapi;