import React, { useState } from "react";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: "Milk", content: "Milk is a ubiquitous and nutritionally rich liquid that plays a crucial role in the daily lives of people around the world. Derived from mammals, most commonly cows, milk is a complete and balanced food source known for its exceptional nutritional value. One of its primary components is calcium, essential for the development and maintenance of strong bones and teeth. Additionally, milk is a reliable source of protein, offering a combination of whey and casein proteins that contribute to muscle growth and repair."},
    {id: 2, title: "Mario", content: "Mario, the iconic video game character created by Nintendo, has become a beloved and enduring symbol in the world of gaming. Debuting in the classic game 'Donkey Kong' in 1981, Mario has since evolved into one of the most recognizable and cherished figures in the gaming industry"},
  ]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 50);
    let newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="container-sm text-center">
          <Routes>
            <Route exact path="/" 
             element={<Home todos={todos} deleteTodo={deleteTodo} />} />
            <Route path="/AddTodo"
             element={<AddTodo addTodo={addTodo} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

  // return (
  //   <div>
  //     <NavBar />
  //     <div className="container-sm text-center">
  //       <Home todos={todos} deleteTodo={ deleteTodo }/>
  //       <AddTodo  addTodo={addTodo} />
  //     </div>
  //   </div>
  // );

  // return (
  //   <BrowserRouter>
  //     <div>
  //       <NavBar />
  //       <div className="container-sm text-center">
  //         <Home todos={todos} deleteTodo={ deleteTodo }/>
  //         <AddTodo  addTodo={addTodo} />
  //       </div>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;
