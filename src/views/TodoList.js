import React, { Component } from 'react'
import DisplayItems from '../components/DisplayItems'
export default class TodoList extends Component {

  constructor(props){
      super(props);
      this.state = {
          todoItems: [
            {
                item: "Finish my todo list",
                "done_status": false, 
                id: 1
            },
            {
                item: "Finish my calculator app",
                "done_status": false,
                id: 2 
            },
            {
                item: "Finish my simple interest app",
                "done_status": false,
                id: 3
            }
          ]
      }

      this.updateState = this.updateState.bind(this);
  }

  markDone = () => alert("yhh")
  getLastId = () => +this.state.todoItems.length + 1

    addItem = (item) => {
        let textInput = document.querySelector("#itemValue");
        this.state.todoItems.unshift({
            item: textInput.value,
            done_status: false,
            id: this.getLastId()
        });

        this.updateState();
        textInput.value = '';
    }

    updateState = () => {
        this.setState({'todoItems': this.state.todoItems})
        console.log(this.state.todoItems)
    }
  render() {
    return (
      <div className="container">
        <input type="text" id="itemValue" placeholder="Enter an Item"/>
        <br />
        <button onClick={this.addItem}>Add</button>


        {/* Lists Component through props */}
        <h1>Todo List</h1>
        <DisplayItems updateState={this.updateState} items={this.state.todoItems.filter((item) => !item.done_status)} />

        <h1>Completed Tasks</h1>
        <DisplayItems updateState={this.updateState} items={this.state.todoItems.filter((item) => item.done_status)} />
      </div>
    )
  }
}
