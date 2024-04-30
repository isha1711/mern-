import React from "react";

function Content({ data }) {
  return (
    <div
      style={{
        height: "92vh",
        backgroundColor: "white",
        borderRadius: "20px",
        marginTop: "1px",
      }}
    >
      {/* <ul
        style={{
          display: "flex",
          listStyle: "none",
          padding: "10px 10px",
          position: "sticky",
          height: "10px",
          justifyContent: "space-evenly",
        }}
      >
        {btn.map((co) => (
          <div>{co}</div>
        ))}
      </ul> */}

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          height: "80vh",
        }}
      >
        {data.map((d) => (
          <div style={{display: 'flex',
          width: '70vw',
          justifyContent: 'space-between',}}>
            <div>{d.checkbox}</div>
            <div>{d.star}</div>
            <div>{d.name}</div>
            <div>{d.desc}</div>
            <div>{d.date}</div>
          </div>
        ))}
      </ul>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          top: "-562px",
        }}
      ></ul>
    </div>
  );
}

export default Content;
