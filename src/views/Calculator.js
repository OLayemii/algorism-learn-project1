import React, { Component } from 'react'
import CalcButton from "../components/CalcButton";
import CalcTextArea from "../components/CalcTextArea";
export default class Calculator extends Component {

    constructor(props){
        super(props);
        // this.addText = this.addText.bind(this);
        this.findAnswer = this.findAnswer.bind(this);

        this.state = {
            textAreaValue: '',
            eqPressed: false
        }

        // this.textAreaValueChange = this.textAreaValueChange.bind(this);
    }

    textAreaValueChange = (state,newVal) => { 
        let o = {};
        if (this.state.eqPressed && ["+", "-", "*", "/"].indexOf(newVal) < 0){
            o[state] = newVal;
            this.setState(o)
            this.setState({'eqPressed': false});
        }else{
            o[state] = this.state.textAreaValue+newVal;
            this.setState(o)
            this.setState({'eqPressed': false});
        }
    }; 

    findAnswer(){
        let textArea = document.querySelector("#calcTextArea");
        try {
            let ans = eval(this.state.textAreaValue);
            this.setState({'textAreaValue': ans});
            this.setState({'eqPressed': true});
        }catch(e){
            textArea.style.fontSize= "12px";
            this.setState({'textAreaValue': e});
        };
    }
  render() {
      return (
    <div className="calculatorBody container">
        <CalcTextArea id="calcTextArea" value={this.state.textAreaValue} type="text" disabled={true} />
        <CalcButton calc={this.findAnswer} changeText={this.textAreaValueChange} />
      </div>
    )
  }
}
