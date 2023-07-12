import axios from "axios";
import { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Fetchsuccess":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "Fetchfails":
      return {
        loading: true,
        post: {},
        error: "Error during fetchig datas",
      };

    default:
      return state;
  }
};

function DataFetchingCopy() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      dispatch({ type: "fetchsuccess", payload: res.data }).catch(() => {
        dispatch({ type: "fetchfails", payload: "fails to fetch" });
      });
    });
  }, []);

  return (
    <div>
      <div className="btn button">
        {state.loading ? "Loding hudai xa " : state.post.title}
        {state.error ? state.error : null}
      </div>
    </div>
  );
}

export default DataFetchingCopy;
