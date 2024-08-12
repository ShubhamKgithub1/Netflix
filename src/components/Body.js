import SignUp from "./SignUp";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import LogIn from "./LogIn";

const Body =()=>{
    const appRouter= createBrowserRouter([
        {
            path: "/",
            element: <SignUp/>
        },
        {
            path:"/login",
            element:<LogIn/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
};

export default Body;