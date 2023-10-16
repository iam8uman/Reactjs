// import React from 'react'

import Mycontexttt from "../context/Mycontexttt";

const ComC = () => {
  return(
  <>
    <Mycontexttt.Consumer>
      {(valuefromprovider) => {
        return <div> I love You My Dear {valuefromprovider}</div>;
      }}
    </Mycontexttt.Consumer>
  </>
  )
};

export default ComC;
