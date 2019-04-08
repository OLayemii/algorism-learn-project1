import React, { Component } from 'react'

export default class ComputeButton extends Component {
  render() {
    return (
      <div>
        <button id={this.props.id} onClick={this.props.handler} className="computeBtn">Calculate</button>
      </div>
    )
  }
}
