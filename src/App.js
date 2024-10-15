import { useState, useEffect } from "react";
import './App.css';
import InputField from './components/InputField';
import ListItem from "./components/ListItem";
import SearchBar from "./components/SearchBar";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("listItem")
    if (savedTodos) {
      setTodoList(savedTodos.split(","))
    }
  }, [])

  useEffect(() => {
    console.log('Update local storage');
    if (todoList.length !== 0) {
      localStorage.setItem("listItem", todoList)
    }
  }, [todoList])

  useEffect(() => {
    return () => {
      console.log('Component unmount');
    }
  }, )

  const addItem = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const deleteItem = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      const updatedList = todoList.filter((_, i) => i !== index);
      setTodoList(updatedList);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <InputField addItem={addItem}/>
      {todoList.map((todo,index) => {
        return (
          <ListItem key={index} title={todo} onDelete={() => deleteItem(index)} />
        );
      })}
      <SearchBar />
    </div>
  );
}

export default App;
