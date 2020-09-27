//redux ducks pattern
// Actions : 접두사로 파일명/action타입이름
const ADD_TODO = "todo/ADD_TODO" as const;
const DELETE_TODO = "todo/DELETE_TODO" as const;
const TOGGLE_TODO = "todo/TOGGLE_TODO" as const;

let nextId = 0;
// Action creators
export const addTodoAction = (todo: string) => {
  return {
    type: ADD_TODO,
    payload: { id: ++nextId, todo: todo, flag: false },
  };
};
export const deleteTodoAction = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: { id: id },
  };
};
export const toggleTodoAction = (id: number) => {
  return {
    type: TOGGLE_TODO,
    payload: { id: id },
  };
};

// Action type
type ActionType =
  | ReturnType<typeof addTodoAction>
  | ReturnType<typeof deleteTodoAction>
  | ReturnType<typeof toggleTodoAction>;

// State type
type StateType = {
  id: number;
  todo: string;
  flag: boolean;
};

// state 초기값 . 초기값도 StateType을 따라야함
const initialState: StateType[] = [];

const todoReducer = (state: StateType[] = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          todo: action.payload.todo,
          flag: action.payload.flag,
        },
      ];
    case DELETE_TODO:
      return state.filter((value) => value.id !== action.payload.id);
    case TOGGLE_TODO:
      return state.map((value) => {
        if (value.id === action.payload.id)
          value.flag = !value.flag ? true : false;
        return value;
      });
    default:
      return state;
  }
};

export default todoReducer;
