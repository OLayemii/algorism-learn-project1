import React, { Component } from 'react'
import CalcTextArea from "../components/CalcTextArea"
import ComputeButton from "../components/ComputeButton"

export default class SimpleInterest extends Component {
    constructor(props){
        super(props);

        this.calculateInterest = this.calculateInterest.bind(this);
    }
    calculateInterest() {

        let principalTxt = document.querySelector("#principal");
        let timeTxt = document.querySelector("#time");
        let rateTxt = document.querySelector("#rate");
        
        let sI = (principalTxt.value * timeTxt.value * rateTxt.value) / 100.00;
        
        let ans = document.querySelector("#answer");
        // ans.textContent="Hello there"
        
        ans.textContent = `The simple Interest is ${sI}`;
    }
  render() {
    return (
      <div className="simpleInterestInterface container">
        <CalcTextArea id="principal" placeholder="Principal Amount" type="number" />
        <CalcTextArea id="time" placeholder="Time In Years" type="number" />
        <CalcTextArea id="rate"  placeholder="Rate In Percent" type="number" />
        <ComputeButton id="compute" handler={this.calculateInterest}/>

        <h1 id="answer"></h1>
      </div>
    )
  }
}
