export interface InitialState {
  item: string;
  items: string[];
}

export interface InputProps {
  item: string;
  items: string[];
  updateItem: (e: any) => any;
  addTodo: () => any;
}

export interface IListProps {
  items: string[];
  deleteTodo: (e: any) => any;
}
