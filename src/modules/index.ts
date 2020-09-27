import { combineReducers } from "redux";
import todoReducer from "./todo";

const rootReducer = combineReducers({ todoReducer });

export default rootReducer;

// useSelector로 스토어구독하는 컴포넌트가 state 변경 감지할때
// state의 type을 지정하기 위함
export type RootType = ReturnType<typeof rootReducer>;
