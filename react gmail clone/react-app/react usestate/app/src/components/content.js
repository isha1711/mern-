import React from "react";
import { useState } from "react";

function Content() {
  const [list, setList] = useState([]);
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [editId, setEditId] = useState(null);

  const submitHandeler = (e) => {
    e.preventDefault();
    var obj = {
      id: id,
      name1: name,
      description: desc,
    };
    setList([...list, obj]);
  };

  const deleteHandler = (listid) => {
    const del = list.filter((li) => li.id !== listid);
    // del.splice(e, 1);
    setList([del]);
  };
  const editHandler = (e, listid, newName) => {
    setList(
      list.map((li) => (li.id === listid ? { ...list, name1: newName } : li))
    );
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <ul style={{ listStyle: "none" }}>
        <li style={{ height: "42px" }}>
          <input
            placeholder="Id"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </li>
        <li style={{ height: "42px" }}>
          <input
            placeholder="Title"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </li>
        <li>
          <input
            placeholder="Description"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />
        </li>

        <button
          style={{
            backgroundColor: "#a2a2c2",
            color: "white",
            width: "5vw",
            position: "relative",
            top: "10px",
            left: "42px",
            borderRadius: "7px",
            border: "none",
            fontSize: "17px",
          }}
          onClick={submitHandeler}
          type="submit"
        >
          {editId ? "Save Changes" : "Add"}
        </button>

        {list.map((l) => (
          <div style={{ position: "relative", top: "24px", left: "-29px" }}>
            <div> {l.id}</div>
            <div>
              {l.name1}

              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  width: "5vw",
                  position: "relative",
                  top: "10px",
                  left: "32px",
                  borderRadius: "7px",
                  border: "none",
                  fontSize: "17px",
                }}
                onClick={deleteHandler}
              >
                Delete
              </button>

              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  width: "5vw",
                  position: "relative",
                  top: "10px",
                  left: "42px",
                  borderRadius: "7px",
                  border: "none",
                  fontSize: "17px",
                }}
                onClick={(e) => editHandler(list.id, e.target.value)}
              >
                Edit
              </button>
            </div>
            <div>{l.description}</div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Content;
