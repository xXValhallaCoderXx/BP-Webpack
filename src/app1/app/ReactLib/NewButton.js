import React from 'react'
//import math from "mathjs";

export const NewButton = () => {
  function helloNewButton(){
    //math.atan2(3, -3) / math.pi
    console.log("HELLO NEEEEW WORLD")
  }
  return (
    <button onClick={() => helloNewButton()} style={{ height: 500, width: 500 }}>
      This is a React NEEEEEEEW Button
      This is a React NEEEEEEEW Button
      This is a React NEEEEEEEW Button
      This is a React NEEEEEEEW Button
      This is a React NEEEEEEEW Button
      This is a React NEEEEEEEW Button
      This is a React NEEEEEEEW Button
      This is a React NEEEEEEEW Button
    </button>
  )
}