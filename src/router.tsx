import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { boardList } from "./components/Boards";

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    { path: '/dashboard', element: <Dashboard boards={boardList.map(board => board.board)} /> },
])