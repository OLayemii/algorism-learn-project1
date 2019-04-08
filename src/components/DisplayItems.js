import React, { Component } from 'react'

export default class DisplayItems extends Component {
    // constructor(props){
    //     super(props)

    // }

    strikeItem = (item) => item.target.classList.add("strike") 
    removeStrike = (item) => item.target.classList.remove("strike");
    render() {
    return (
      <div>
       { this.props.items.map((item) => <li className="todo-item" onClick={() => {item.done_status = !item.done_status; this.props.updateState() }}  onMouseOut={this.removeStrike} onMouseOver={this.strikeItem} key={item.id}>{item.item}</li> )}
      </div>
    )
  }
}
