import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />     
      <Route path="/login" element={<Login />} />     
      <Route path="/register" element={<Register />} />     
      <Route path="/about" element={<About />} />    
        
    </>
  )
);

function App() {

  return (
    <>  
      <RouterProvider router={router}/>
    </>
  )
}

export default App
