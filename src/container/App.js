import React, { Component, useState } from "react";
import Header from "../components/header/header";
import Persons from "../components/person/persons";
import Context from "../context/context";

const App = (props) => {
  const [isau, setIsau] = useState(false);

  const logHandler = () => {
    setIsau(!isau);
  };
  return (
    <>
      <Context.Provider value={{ isau: isau, log: logHandler }}>
        <Header />
        <Persons />
      </Context.Provider>
    </>
  );
};

export default App;
