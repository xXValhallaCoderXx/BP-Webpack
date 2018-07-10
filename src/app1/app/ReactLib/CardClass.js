import React, { Component } from 'react'

class CardClass extends Component {
  testFunction(){
    console.log("THIS IS A CLASS COMPONENTN")
  }
  render() {
    return (
      <div onClick={() => this.testFunction()}>
        HELLO CARD CLASS
      </div>
    )
  }
}

export const ExportCardClass = CardClass;