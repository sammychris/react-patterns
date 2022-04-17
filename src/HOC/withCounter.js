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
      setCounter(counter + 1);
    };
    
    render(){
      return <Component counter={counter} onCounter={onCounter} />
    }
  }

};

export default WithCounter;
