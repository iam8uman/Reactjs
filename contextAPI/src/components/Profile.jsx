import { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div> Please Login First</div>;
  else {
    return <div> Welcome {user}</div>
  }
}

export default Profile;
