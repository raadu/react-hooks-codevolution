import React, { Component } from "react";

//Simple class based counter component
class LifecycleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ""
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
      //Run this only when the count value changes
      if(prevState.count!==this.state.count) {
        console.log("Updating document title");
        document.title = `Clicked ${this.state.count} times`;
    }
      
  }

  render() {
    return (
      <div>
      <input 
        type="text" 
        value={this.state.name}
        onChange={(e) => {
            this.setState({name: e.target.value});
        }}
    />
        <button onClick={() => this.setState({count: this.state.count+1})}>
            Count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
