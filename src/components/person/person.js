import React, { Component } from "react";
import Context from "../../context/context";
import context from "../../context/context";

export default class person extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => {
          return context.isau ? <p>it's working</p> : <p>it doesnt work</p>;
        }}
      </Context.Consumer>
    );
  }
}
