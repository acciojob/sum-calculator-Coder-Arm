
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
      <h1>Sum Calculator</h1>
        <input type="number" onChange={(e) => handleSum(e)}/>
        <p>Sum : {sum}</p>
    </div>
  )
}

export default App
