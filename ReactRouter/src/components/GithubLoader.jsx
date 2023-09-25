//method 1 using Loader in main.jsx ma hera ta
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="text-4xl p-4 text-white text-center bg-slate-800 rounded-md">
        Username: {data.name} <br />
        Github Followers: {data.followers} <br />
        Repository: {data.repos_url}
      </div>
      <div className="imggg text-center rounded-full flex justify-center m-5">
        <img src={data.avatar_url} alt="" />
      </div>
    </>
  );
};

export default Github;

// loader use garera aba chai
export const githubInfo = async () => {
  const res = await fetch("https://api.github.com/users/iam8uman");
  return res.json();
};
