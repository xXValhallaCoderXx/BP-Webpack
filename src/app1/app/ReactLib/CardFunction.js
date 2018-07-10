import React from "react";
//import moment from "moment";

export const CardFunction = () => {
  function testFunction(){
    // var day = new Date(2011, 9, 16);
    // var dayWrapper = moment(day);
    console.log("I AM A FUNCTION COMPONENT")
  }
  return (
    <div onClick={() => testFunction()}>
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
      THIS IS A CARD FUNCTION COMPONENTION
    </div>
  )
};
