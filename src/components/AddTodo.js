import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const AddTodo = ({addTodo}) => {
  // const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const redirect = useNavigate();

  const handleContent = (e) => {
    setContent(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {title, content};
    addTodo(obj);
    
    // console.log(todos);
    // console.log(obj);
    setTitle("");
    setContent("");
    redirect("/");
  };

  return <div className="mt-5">
    <form onSubmit={handleSubmit}>
      <p>
        <label className="">Title: </label>
      </p>
      <p>
        <input type="text" name="title" onChange={handleTitle} value={title} required/>
      </p>
      <p>
        <label className="">Content:</label>
      </p>
      <p>
        <textarea name="content" onChange={handleContent} value={content} required>

        </textarea>
      </p>
      <input type="submit" value="Submit"/>
    </form>
  </div>;
}

export default AddTodo