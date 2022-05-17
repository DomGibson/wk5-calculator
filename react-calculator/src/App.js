import './App.css';
import React, { useState } from 'react';
import { evaluate } from "mathjs";

function App() {

  const Wrapper = ({ children }) => {
    return <div className="wrapper">{children}</div>;
  };
  
  const ButtonBox = ({ children }) => {
    return <div className="buttonBox">{children}</div>;
  };
  
  const Button = ({ className, value, onClick }) => {
    return (
      <button className={className} onClick={onClick}>
        {value}
      </button>
    );
  };
  
   var btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  
  const [value, setValue] = useState("")

  const Screen = () => {
    return (
      <div className="screen">
        {value} =
      </div>
      
    );
  };

  const handleClick = (str) => { 
    setValue(str === "=" ? evaluate(value)
            : str === "C" ? ""
            : value + str)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Screen />
          <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => handleClick(btn)}
              />
            );
          })
        }
      </ButtonBox>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
