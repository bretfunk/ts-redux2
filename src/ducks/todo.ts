import { initialState } from "./../State";

const KEYS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_ITEM: "UPDATE_ITEM"
};

export const addTodo = () => {
  return {
    type: KEYS.ADD_TODO
  };
};

export const deleteTodo = (e: any) => {
  return {
    payload: e.target.parentElement.innerText.replace("Delete", ""),
    type: KEYS.DELETE_TODO
  };
};

export const updateItem = (e: any) => {
  return {
    payload: e.target.value,
    type: KEYS.UPDATE_ITEM
  };
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case KEYS.UPDATE_ITEM: {
      return {
        ...state,
        item: action.payload
      };
    }
    case KEYS.ADD_TODO: {
      return {
        ...state,
        items: [...state.items, state.item],
        item: ""
      };
    }
    case KEYS.DELETE_TODO: {
      const toDelete = action.payload;
      const filteredItems = state.items.filter(item => item !== toDelete);
      return {
        ...state,
        items: filteredItems
      };
    }
    default:
      return state;
  }
};
