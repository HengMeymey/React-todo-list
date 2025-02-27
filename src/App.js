import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import InputField from './components/InputField';
import ListItem from "./components/ListItem";
import SearchBar from "./components/SearchBar";
import Calculator from "./components/Calculator";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("listItem");
    if (savedTodos) {
      setTodoList(savedTodos.split(","));
    }
  }, []);

  useEffect(() => {
    console.log('Update local storage');
    if (todoList.length !== 0) {
      localStorage.setItem("listItem", todoList);
    }
  }, [todoList]);

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
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Todo List</Link> | <Link to="/calculator">Calculator</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Todo List</h1>
                <InputField addItem={addItem} />
                {todoList.map((todo, index) => {
                  return (
                    <ListItem key={index} title={todo} onDelete={() => deleteItem(index)} />
                  );
                })}
                <SearchBar />
              </div>
            }
          />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;