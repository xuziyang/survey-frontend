import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ManageLayout from "../layouts/ManageLayout";
import List from "../pages/manage/List";
import Star from "../pages/manage/Star";
import Trash from "../pages/manage/Trash";
import Edit from "../pages/question/Edit/Index";
import Stat from "../pages/question/Stat/Index";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "manage",
                element: <ManageLayout />,
                children: [
                    {
                        path: "list",
                        element: <List />,
                    },
                    {
                        path: "star",
                        element: <Star />,
                    },
                    {
                        path: "trash",
                        element: <Trash />,
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "question/edit/:id",
        element: <Edit />,
    },
    {
        path: "question/stat/:id",
        element: <Stat />,
    },
]);

export default router

