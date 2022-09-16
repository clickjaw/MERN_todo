import "./App.css";
// import { useEffect, useState } from "react";
import readTodoRequest from "./api/readTodoRequest";
import {useQuery} from "react-query";
import ClipLoader from 'react-spinners/ClipLoader'
// import TodoItem from "./components/TodoItem.jsx"

function App() {
  const {isLoading, data: todos} = useQuery('todos', readTodoRequest)
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   readTodoRequest().then(setTodos)
  // }, []);

  return (
    <div className="App">
      {isLoading ? (
      <ClipLoader size={150} />
      ):(
      todos.map((todo)=>(
        <TodoItem todo={todo} key={todo._id} />
      )))}
    </div>
  );
}

export default App;
