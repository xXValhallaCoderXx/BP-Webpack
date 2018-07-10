import React from 'react'
//import math from "mathjs";

export const Button = () => {
  function helloWorld(){
    //math.atan2(3, -3) / math.pi
    console.log("HELLO WORLD")
  }
  return (
    <button onClick={() => helloWorld()} style={{ height: 500, width: 500 }}>
      This is a React Button
    </button>
  )
}