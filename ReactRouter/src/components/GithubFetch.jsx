
//fetch yesari garda ali lagging hunxa hai

import { useEffect, useState } from "react";

const Github = () => {
  // Fetch use garera vayo
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/iam8uman")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="text-4xl p-4 text-white text-center bg-slate-800 rounded-md">
        Username: {data.name} <br />
        Github Followers: {data.followers} <br />
        Repository: {data.repos_url}
        {/* Total Star: {data.starred_url('iam8uman','MERN')} */}
      </div>
      <div className="imggg text-center rounded-full flex justify-center m-5">
        <img src={data.avatar_url} alt="" />
      </div>
    </>
  );
};

export default Github;



