import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

function Session() {
  const [list, setlist] = useState(()=>{
    const savedList = sessionStorage.getItem("userList");
    return savedList ? JSON.parse(savedList) : [];
  });
  const [radio, setradio] = useState("");
  const [check, setcheck] = useState({
    Entertainment: false,
    Education: false,
    Sports: false,
  });
  const [slider, setslider] = useState(50);
  const [date, setdate] = useState("");
  const [time, settime] = useState("12:00");
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");

  const submithandle = (e) => 
  {
    e.preventDefault();
    var obj = {
      id : Math.ceil(Math.random()*100),
      Name1 : name,
      Surname : desc,
      radio: radio,
      Education : check.Education,
      Entertainment : check.Education,
      Sports: check.Sports,
      slider: slider,
      date: date,
      time: time,
    };
    setlist([...list, obj]);
  }

  const checkhandle = (e) =>{
    setcheck(
      {...check,
        [e.target.name]:e.target.checked
      }
    )
  }
  const storeToSession = () => {
    sessionStorage.setItem("userList", JSON.stringify(list));
  };

  const deletehandle = (id) =>{
    setlist(list.filter ((l) => l.id !== id))
  }
  const isDataStored = list.length > 0;
  return (
    <div>
      <ul className="radio">
        <h3>Please fill all details:</h3>
       <div>
        <input type="text" placeholder="Enter name:" value={name} onChange={(e)=>setname(e.target.value)}/>
       </div>
       <div>
        <input type="text" placeholder="Enter surname:" value={desc} onChange={(e)=>setdesc(e.target.value)}/>
       </div>
        <h3>Select Priority:</h3>
        <li>
          <label>
            <input
              type="radio"
              value="High"
              checked={radio === "High"}
              onChange={(e) => setradio(e.target.value)}
            />
            High
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="Low"
              checked={radio === "Low"}
              onChange={(e) => setradio(e.target.value)}
            />
            Low
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="Medium"
              checked={radio === "Medium"}
              onChange={(e) => setradio(e.target.value)}
            />
            Medium
          </label>
        </li>
        <h3>Select Type:</h3>
            <li>
                <label>
                    <input type='checkbox'
                    value="Education"
                    onChange={checkhandle}
                    />
                    Education
                </label>
            </li>
            <li>
                <label>
                    <input type='checkbox'
                    value="Entertainment"
                    onChange={checkhandle}
                    />
                    Entertainment
                </label>
            </li>
            <li>
                <label>
                    <input type='checkbox'
                    value="Sports"
                    onChange={checkhandle}
                    />
                    Sports
                </label>
            </li>
            <h3>Slider</h3>
        <li>
          <input
            type="range"
            min="0"
            max="50"
            label={slider}
            value={slider}
            onChange={(e) => setslider(e.target.value)}
          />
        </li>
        <h3>Pick Date</h3>
        <li>
          <DatePicker selected={date} onChange={(date) => setdate(date)} />
        </li>
        <h3>Pick Time</h3>
        <li className="time">
          <TimePicker value={time} onChange={(time) => settime(time)} />
        </li>
      </ul>
      <button type="submit" className="btn" onClick={submithandle}>
            Submit
          </button>
          <button className="btn1" onClick={storeToSession}>Session</button>
          {isDataStored && <p className="storedata">Data is stored in the list.</p>}
          {!isDataStored && <p className="storedata">No data is stored in the list.</p>}
      <ul className="add">
        <li>
          {list.map((data) => (
            <div className="addeddata">
              <div>Name:{data.Name1}</div>
              <div>Surname:{data.Surname}</div>
              <div>Selected Priority:{data.radio}</div>
              <div>Selected Type:{data.check}</div>
              <div>Selected Range:{data.slider}</div>
              <div>Selected Date:{data.date.toString()}</div>
              <div>Selected Time:{data.time}</div>
              <div> <button type="submit" className="delbtn" onClick={()=>{deletehandle(data.id)}} >
            Delete
          </button></div>
            </div>
          ))}
        
         
          {/*<button className="btn1" onClick={storeToSession}>Session</button>
          {isDataStored && <p>Data is stored in the list.</p>}
          {!isDataStored && <p>No data is stored in the list.</p>} */}
        
        </li>
      </ul>
    </div>
  );
}

export default Session;
