
import React, { useState } from "react";

function Practice() {
    const [color, setColor] = useState("red");

    return (
    <>
    <h1>My favorite color is {color}!</h1>
    <button onClick={() => setColor("purple")}>purple</button>
    </>
)
}

export default Practice;
