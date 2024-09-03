import { useEffect, useState } from 'react';
import '../App.css';
import Navbar from "../components/Navbar";
import axios from "axios";

const About = () => {

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const commentsBody = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setComments(commentsBody.data);
  }

  useEffect(() => {
    getComments();
  });

  return (
    <div className='about'>
    <Navbar /> 
      <h2>About the author </h2>
      <ul>
        {
          comments.map((comment) => (<li>{comment.body}</li>))
        }
      </ul>

    </div>
  )
}

export default About
