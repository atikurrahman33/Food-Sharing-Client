import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Connect from "../Pages/Connect/Connect";
import AllFoods from "../Pages/AllFood/AllFoods";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/connect",
            element:<Connect></Connect>
        },
        {
            path:"/allfood",
            element:<AllFoods></AllFoods>
        }

      ]
    },
  ]);

  export default router;