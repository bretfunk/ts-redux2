import * as React from "react";
import { connect } from "react-redux";
import { addTodo, updateItem } from "../ducks/todo";
import { InitialState, InputProps } from "../types";

const mapStateToProps = (state: InitialState) => {
  return {
    item: state.item,
    items: state.items
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateItem: (e: any) => dispatch(updateItem(e)),
    addTodo: () => dispatch(addTodo())
  };
};

class ConnectedInput extends React.Component<InputProps> {
  public render() {
    const { item, updateItem, addTodo } = this.props;
    return (
      <>
        <input
          type="text"
          name={item}
          placeholder="item"
          onChange={updateItem}
        />
        <input type="submit" name="Submit" onClick={addTodo} />
      </>
    );
  }
}

const Input = connect(mapStateToProps, mapDispatchToProps)(ConnectedInput);
export default Input;
