import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />     
        
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
