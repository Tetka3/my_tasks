import React, { useEffect, useState } from 'react';
import Task from './Task';
import axios from "axios"

const Tasks = ({ tasks, handleSubmit, handleChange, todos, handleDelete }) => {

  const [blogs, setBlogs] = useState([]);

  const fetchPosts = async () => {
    const posted = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setBlogs(posted.data);
  }

  useEffect (()=>{
    fetchPosts();
  }, [])
  return (
    <div className='tasks'>
        <form onSubmit={handleSubmit}> 
          <fieldset>
            <legend>Add Tasks</legend> 
              <input 
                  type='text' 
                  placeholder='Add task' 
                  value={tasks} 
                  onChange={handleChange}                  
              />
              <button>Add</button>  
            </fieldset>          
        </form>
      <ul>
        {todos.length > 0 ?
        todos.map((item) => <li key={item.id}>{item.text}</li> ) 
        : 
        "No Task to show"
        }
      </ul>
      <ul>
      {
        blogs.map((blog, index) => (<li key={index} className='posts'>{blog.title}</li>))
      }
      </ul>
    </div>
  )
}

export default Tasks
