import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

function Session() {
  const [list, setlist] = useState([]);
  const [radio, setradio] = useState("");
  const [check, setcheck] = useState(false);
  const [slider, setslider] = useState(50);
  const [date, setdate] = useState("");
  const [time, settime] = useState("12:00");

  const submithandle = (e) => 
  {
    e.preventDefault();
    var obj = {
      radio: radio,
      check: check,
      slider: slider,
      date: date,
      time: time,
    };
    setlist([...list, obj]);
  }

  const storeToSession = () => {
    sessionStorage.setItem("userList", JSON.stringify(list));
    alert("List stored to session storage!");
  };

  const isDataStored = list.length > 0;
  return (
    <div>
      <ul className="radio">
        <h3>Radio Button</h3>
        <li>
          <label>
            <input
              type="radio"
              value="female"
              checked={radio === "female"}
              onChange={(e) => setradio(e.target.value)}
            />
            female
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="male"
              checked={radio === "male"}
              onChange={(e) => setradio(e.target.value)}
            />
            male
          </label>
        </li>
        <h3>Checkbox</h3>
            <li>
                <label>
                    <input type='checkbox'
                    value={check}
                    onChange={() => setcheck(!check)}
                    />
                    pani-puri
                </label>
            </li>
            <li>
                <label>
                    <input type='checkbox'
                    value={check}
                    onChange={() => setcheck(!check)}
                    />
                    Bhel
                </label>
            </li>
            <li>
                <label>
                    <input type='checkbox'
                    value={check}
                    onChange={() => setcheck(!check)}
                    />
                    Sev-puri
                </label>
            </li>
            <h3>Slider</h3>
        <li>
          <input
            type="range"
            min="0"
            max="50"
            value={slider}
            onChange={(e) => setslider(e.target.value)}
          />
        </li>
        <h3>Pick Date</h3>
        <li>
          <DatePicker selected={date} onChange={(date) => setdate(date)} />
        </li>
        <h3>Pick Time</h3>
        <li>
          <TimePicker value={time} onChange={(time) => settime(time)} />
        </li>
      </ul>
      <ul className="add">
        <li>
          {list.map((data) => (
            <div className="addeddata">
              <div>{data.radio}</div>
              <div>{data.check.toString()}</div>
              <div>{data.slider}</div>
              <div>{data.date.toString()}</div>
              <div>{data.time}</div>
            </div>
          ))}
        
          <button type="submit" className="btn" onClick={submithandle}>
            Submit
          </button>
          <button className="btn1" onClick={storeToSession}>Session</button>
          {isDataStored && <p>Data is stored in the list.</p>}
          {!isDataStored && <p>No data is stored in the list.</p>}
        
        </li>
      </ul>
    </div>
  );
}

export default Session;
