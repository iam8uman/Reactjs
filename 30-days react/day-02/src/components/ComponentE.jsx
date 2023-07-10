import { Context, ChannelContext } from "../App";
import { useContext } from "react";

const ComponentE = () => {
  const user = useContext(Context);
  const channel = useContext(ChannelContext);

  return (
    <>
      <useContext.Consumer>{{ user } - { channel }}</useContext.Consumer>
    </>
  );
};

export default ComponentE;
