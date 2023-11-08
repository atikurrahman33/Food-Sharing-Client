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
import ManageFood from "../Pages/My_Food/ManageFood";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import ManageUp from "../Pages/My_Food/ManageUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            element:<PrivateRoute><AddFoods></AddFoods></PrivateRoute>
          },
          {
            path:'/myfood',
            element:<PrivateRoute><MyFood></MyFood></PrivateRoute>,
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
          },
          {
            path:'/managefood/:name',
            element:<ManageFood></ManageFood>,
            loader: ({params}) => fetch(`http://localhost:4000/manageFood/${params.name}`)
            
          },
          {
            path:'/myrequest',
            element:<PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
          },
          {
            path:'/manageup/:id',
            element:<ManageUp></ManageUp>,
            loader: ({params}) => fetch(`http://localhost:4000/reqFood/${params.id}`)
          },

      ]
    },
  ]);

  export default router;