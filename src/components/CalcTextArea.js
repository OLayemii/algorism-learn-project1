import React, { Component } from 'react'
import './CalcTextArea.css';

export default class CalcTextArea extends Component {
  render() {
    return (
      <div>
        <input type={this.props.type} value={this.props.value} placeholder={this.props.placeholder}  id={this.props.id} disabled={this.props.disabled}/>        
      </div>
    )
  }
}
