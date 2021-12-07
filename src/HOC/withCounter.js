import React from "react";

// this is a

const WithCounter = (Component) => {
  return class Newcomponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      }
    }

    onCounter = () => {
      this.setState({ counter: this.state.counter + 1});
    };
    
    render(){
      return <Component counter={this.state.counter} onCounter={this.onCounter} />
    }
  }

};

export default WithCounter;
