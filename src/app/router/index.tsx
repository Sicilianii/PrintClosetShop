import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "../layout";
import GetStart from "../../pages/getStart/getStart";

function RootRouter() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <h1>Error page</h1>,
        },
        {
            path: '/getStart',
            element: <GetStart />,
            errorElement: <h1>Error page</h1>
        }
    ])

    return <RouterProvider router={router} /> ;
}

export default RootRouter;