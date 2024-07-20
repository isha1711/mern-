import React, { useState } from "react";
import data from "./data";

function Accordian() {
  const [singleselected, setsingleselected] = useState(null);
  const [btnenable, setbtnenable] = useState(false);
  const [multipleselected, setmultipleselected] = useState([]);

  function handlesingleselection(currentid) {
    setsingleselected(currentid === singleselected ? null : currentid);
  }

  function handlemultipleselection(currentid) {
    let cpy = [...multipleselected];
    const index = cpy.indexOf(currentid);
    if (index === -1) cpy.push(currentid);
    else cpy.splice(index, 1);

    setmultipleselected(cpy);
  }

  return (
    <div>
      <button onClick={() => setbtnenable(!btnenable)}>
        Enable Multiple Selection
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  btnenable
                    ? () => handlemultipleselection(item.id)
                    : () => handlesingleselection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
              </div>

              {
                // singleselected === item.id ||
                // multipleselected.indexOf(item.id !== -1) ? (
                //   <div className="answer"> {item.answer} </div>
                // ) : null
                  btnenable ? multipleselected.indexOf(item.id !== -1) &&
                  <div className="answer"> {item.answer} </div>
                  : singleselected === item.id && <div className="answer"> {item.answer} </div>
              }
            </div>
          ))
        ) : (
          <div>Data Not Found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
