import React, { useEffect, useState } from "react";

export default function Windowresize() {
  const [windowresize, setwindowresize] = useState({
    width: 0,
    height: 0,
  });

  function handleresize() {
    setwindowresize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    handleresize();

    window.addEventListener("resize", handleresize);

    return () => {
      window.removeEventListener("resize", handleresize);
    };
  });
  return windowresize;

}
