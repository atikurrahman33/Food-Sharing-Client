import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Connect from "../Pages/Connect/Connect";
import AllFoods from "../Pages/AllFood/AllFoods";
import CardDetails from "../Pages/CardDetails/CardDetails";
import AddFoods from "../Pages/AddFoods/AddFoods";
import Update from "../Pages/My_Food/Update";
import MyFood from "../Pages/My_Food/MyFood";
import Request from "../Request/Request";

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
        },
        {
            path:'/details/:id',
            element:<CardDetails></CardDetails>,
            loader: ({params})=>fetch(`http://localhost:4000/foodItem/${params.id}`),
          },
          {
            path:'/addfoods',
            element:<AddFoods></AddFoods>,
          },
          {
            path:'/myfood',
            element:<MyFood></MyFood>
          },
          {
            path: "/update/:id",
            element: <Update></Update>,
            loader: ({ params }) => fetch(`http://localhost:4000/foodItem/${params.id}`),
    
          },
          {
            path:'/request/:id',
            element:<Request></Request>,
            loader: ({params})=>fetch(`http://localhost:4000/foodItem/${params.id}`),
          }

      ]
    },
  ]);

  export default router;