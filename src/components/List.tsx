import * as React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../ducks/todo";
import { IListProps } from "../types";

const mapStateToProps = (state: any) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteTodo: (e: any) => dispatch(deleteTodo(e))
  };
};

export class ConnectedList extends React.Component<IListProps> {
  public render() {
    const { items, deleteTodo } = this.props;
    const deleteButton = <button onClick={deleteTodo}>Delete</button>;
    const list = items.map((item, i) => (
      <li key={i}>
        {item}
        {deleteButton}
      </li>
    ));
    return <>{list}</>;
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;
