// import React from 'react'

import Mycontexttt from "../context/Mycontexttt";

const ComC = () => {
  return (
    <>
      <Mycontexttt.Consumer>
        {({ name, setName }) => {
          setName("Upasana Devkota❤️");
          
          return <div> I love You My Dear {name}</div>;
        }}
      </Mycontexttt.Consumer>
    </>
  );
};

export default ComC;
