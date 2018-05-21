import * as React from "react";
import Input from "./components/Input";
import List from "./components/List";

class App extends React.Component {
  public render() {
    return (
      <div>
        <h1>TS Redux Todo</h1>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
