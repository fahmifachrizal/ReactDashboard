import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

// Route definition
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element: <Home />
      }
    ]
  }
])


export default router