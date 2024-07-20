import React from "react";
import Windowresize from ".";

function Windowtest() {
  const windowsize = Windowresize();
  const { width, height } = windowsize;

  return <div>
    <h3>Window Width and Height test</h3>
    <h4>Width is {width}</h4>
    <h4>Height is {height}</h4>
  </div>;
}

export default Windowtest;
