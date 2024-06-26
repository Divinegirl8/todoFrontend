import HomePage from "../features/HomePage";
import AddTask from "../features/HomePage/AddTask";
import CreateTask from "../features/HomePage/CreateTask";
import AllTask from "../features/HomePage/AllTask";

export const Routes = [
    {
        path : "",
        element : <HomePage/>
    },{
    path: "/add",
        element: <AddTask/>
    },
    {
        path: "/create/:userId",
        element: <CreateTask/>
    },
    {
        path: "/allTask/:userId",
        element: <AllTask/>
    }
]