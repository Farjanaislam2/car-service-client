import { createBrowserRouter } from "react-router-dom";
import Card from "../components/Card/Card";
import Main from "../components/Layout/Main";
import Home from './../components/Home/Home';
import Profile from './../components/Home/Profile/Profile';
import CardDetails from './../components/Card/CardDetails';
import About from './../components/Home/About/About';

const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children:[
     {
        path: "/",
        loader:async () => {
           return fetch('slider.json')
        },
        element: <Home></Home>
     },
     {
        path: "/card",
        element: <Card></Card>
     },
     {
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>
     },

     {
        path: "/about",
        element: <About></About>
     } ,
     {
      path:'/profile',
      element:<Profile></Profile>
   }  
    ]

} ,
{
    path:'*',
    element: <div>
        This route Not Found
    </div>
}
])
export default router;