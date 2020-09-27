import React from "react";

// Props 모두 Type Alias로 타입지정
type TodoType = {
  // 객체배열 타입지정하는 방법
  todo: { id: number; todo: string; flag: boolean }[];
  newTodo: string;
  // html요소의 이벤트 객체 타입지정
  changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  initTodo: () => void;
  addTodo: (newTodo: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export default function Todo({
  todo,
  newTodo,
  changeInput,
  initTodo,
  addTodo,
  deleteTodo,
  toggleTodo,
}: TodoType) {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          changeInput(e);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            addTodo(newTodo);
            initTodo();
          }
        }}
      />
      {todo.map((value) => {
        return (
          <div key={value.id}>
            <span
              style={{
                textDecorationLine: value.flag ? "line-through" : "none",
                color: value.flag ? "gray" : "black",
              }}
            >
              {value.todo}
            </span>
            <button
              onClick={() => {
                deleteTodo(value.id);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                toggleTodo(value.id);
              }}
            >
              toggle
            </button>
          </div>
        );
      })}
    </div>
  );
}
