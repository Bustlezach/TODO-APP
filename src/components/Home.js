import React from "react";

function Home({ todos, deleteTodo }) {
  const todoLength = todos.length;
  const todoBody = (
    <div className="accordion" id="accordionExample">
      {todos.map((todo) => (
        <div className="accordion-item" key={todo.id}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${todo.id}`}
              aria-expanded="true"
              aria-controls={`collapse${todo.id}`}
              onDoubleClick={() => {deleteTodo(todo.id)}}
            >
              {todo.title}
            </button>
          </h2>
          <div
            id={`collapse${todo.id}`}
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              { todo.content }
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const display = todoLength ? todoBody : <p>You have cleared your list 👍.</p>;

  return (
    <div>
      <p className="text-primary display-1">My Plan</p>
      <div>{display}</div>
    </div>
  );
}

export default Home;