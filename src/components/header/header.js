import React, { Component } from "react";
import Context from "../../context/context";

class header extends Component {
  render() {
    return (
      <>
        <Context.Consumer>
          {(context) => {
            return <button onClick={context.log}>Click</button>;
          }}
        </Context.Consumer>
      </>
    );
  }
}
export default header;
