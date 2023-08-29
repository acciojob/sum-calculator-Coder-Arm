
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum , setSum] = useState(0);
  
  function handleSum(e){
    const input = parseFloat(e.target.value)
    setSum((prevSum) => prevSum+input)
  }
  return (
    <div>
        <input type="number" onChange={(e) => handleSum(e)}/>
        <div>Sum : {sum}</div>
    </div>
  )
}

export default App
