import "./App.css";
import { useReducer, useState } from "react";

function reducer({ state }) {
  // eslint-disable-next-line default-case
  switch (state) {
    case "pressed_once":
      return {
        state: "pressed_two",
      };
    case "pressed_two":
      return {
        state: "pressed_three",
      };
    case "pressed_three":
      return {
        state: "pressed_once",
      };
  }
}

const Button = (props) => {
  const [state, dispatch] = useReducer(reducer, { state: "pressed_once" });
  return (
    <div
      style={{
        color: props.color,
        textDecoration: props.underline ? "underline" : undefined,
      }}
      onClick={() => dispatch()}
    >
      Click Me {state.state}
    </div>
  );
};

function App() {
  const props = {
    increment: 2,
    underline: true,
    color: "black",
  };
  return (
    <div className="App">
      <Button color="red" />
      <Button color="green" />
      <Button color="blue" />
    </div>
  );
}

export default App;
