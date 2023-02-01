import "./App.css";
import React, { useEffect, useState } from "react"; //버전17 이후에는 jsx 사용하더라도 별도로 사용안해줘도 됨

//사용자가 정의한 component들은 일반 component와 비교하기 위해 대문자로 시작한다.
import Input from "./components/input3"; //.js는 확장자를 생략할 수 있다.
import Todo from "./components/todo3";
import { Provider } from "react-redux";
import { store } from "./reduxs/store";

//상태전달 : Redux + useSelector() + useDispatch()
function App() {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST3(Redux)</h1>

      <Provider store={store}>
        <Input />
        <Todo />
      </Provider>
    </div>
  );
}
//updateTodo값에 파라미터값 있어서 onClick에서 바로 처리

export default App;
