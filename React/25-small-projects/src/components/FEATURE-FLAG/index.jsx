import React, { Component, useContext } from "react";
import { featureflag } from "./context";
import Accordian from "../accordian";
import Github from "../github/github";
import Qrcode from "../qr-code";
import Loadbtn from "../load-more-button";
import Image from "../image-slider";

function FeatureFlags() {
  const { loading, enableflags } = useContext(featureflag);



  const componenttorender = [
    {
      key: "showaccordian",
      component: <Accordian />,
    },
    {
      key: "showimageslider",
      component: (
        <Image url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
      ),
    },
    {
      key: "showgithub",
      component: <Github />,
    },
    {
      key: "showqrcode",
      component: <Qrcode />,
    },
    {
      key: "showloadmorebutton",
      component: <Loadbtn />,
    },
  ];

  if (loading) {
    return <div>Loading please wait.</div>;
  }

  function checkenableflag(currentflag) {
    return enableflags[currentflag];
  }
  return (
    <div>
      <h1>Feature Flag</h1>
      {componenttorender.map((componentItem) =>
        checkenableflag(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

export default FeatureFlags;
