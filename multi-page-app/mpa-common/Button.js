import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button onClick={() => console.log("BUTTON CLICKED")}>
        COMMON
      </button>
    )
  }
}
