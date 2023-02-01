import "./App.css";
import React, { useEffect, useState } from "react"; //버전17 이후에는 jsx 사용하더라도 별도로 사용안해줘도 됨

//사용자가 정의한 component들은 일반 component와 비교하기 위해 대문자로 시작한다.
import Input from "./components/input1"; //.js는 확장자를 생략할 수 있다.
import Todo from "./components/todo1";

//상태전달 : props
function App() {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  let boardList = [
    { id: 1, todoname: "운동하기", completed: 0 },
    { id: 2, todoname: "SNS꾸미기", completed: 0 },
    { id: 3, todoname: "사진정리하기", completed: 0 },
  ];

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState("");

  const insertTodo = (e) => {
    e.preventDefault();
    setTodos([
      { id: todos.length + 1, todoname: input, completed: 0 },
      ...todos,
    ]);

    setInput("");
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed == 1 ? 0 : 1 }
          : todo
      )
    );
  };
  //넘겨받는 값 여러개이면 {return } 사용하기

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    console.log("input:" + input);
  }, [input]);

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST1</h1>
      <Input
        input={input}
        insertTodo={insertTodo}
        handleChangeText={handleChangeText}
      />
      <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
//updateTodo값에 파라미터값 있어서 onClick에서 바로 처리

export default App;
