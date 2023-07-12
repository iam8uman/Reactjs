import  { useEffect, useReducer } from "react";
import axios from "axios";

// default constructor jsto pani samjhina payeu
const initialState = {
  Loading: true,
  post: {},
  error: "",
};

// ani reducer method ma tyo constructor lai overloading gareko jsto vayo !
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        Loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_FAILS":
      return {
        Loading: false,
        post: {},
        error: "Something went wrong !",
      };

    default:
      return state;
  }
};

function DataFetchTwo() {
  const [state, dispach] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispach({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispach({ type: "FETCH_FAILS" });
        console.log(error)
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-slate-800 bg-slate-300">
        {state.Loading ? "loading" : state.post.title}
        {state.error ? state.error : null}
      </h1>
    </div>
  );
}

export default DataFetchTwo;
