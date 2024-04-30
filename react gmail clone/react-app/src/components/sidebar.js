import React from "react";

function Sidebar({ isha, side }) {
  return (
    <div
      style={{
        width: "440px",
        backgroundColor: "#f6f8fc",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          backgroundColor: "rgb(234, 241, 251)",
          width: "14%",
          marginTop: "3px",
          flexDirection: "column",
        }}
      >
        {side.map((icon) => (
          <div>{icon}</div>
        ))}
      </ul>
      <ul style={{ listStyle: "none" }}>
        {isha.map((item, index) => (
          <div>
            <h2>
              {" "}
              <span>{item.icon}</span>
              <span style={{ position: "relative", left: "10px", top: "-3px" }}>
                {item.name}
              </span>
            </h2>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
