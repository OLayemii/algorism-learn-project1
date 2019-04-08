import React, { Component } from 'react'
import "./CalcButton.css"
export default class CalcButton extends Component {
  render() {
    return (
      <div>
        <div className="calc-interface">
            {[7,8,9,4,5,6,1,2,3,".",0,"=","+","-","/","*"].map(
              (key) => <button onClick={
                (ev) => key === "=" ? this.props.calc() : this.props.changeText('textAreaValue', ev.target.value)
              }  value={key} key={key} className="bigButton">{key}</button> ) } 
        </div>
      </div>
    )
  }
}
