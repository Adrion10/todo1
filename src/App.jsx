import React from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <Footer /> 
    </div>
  );
}

export default App;
