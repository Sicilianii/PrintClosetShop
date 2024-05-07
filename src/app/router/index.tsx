import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "../layout";
import Login from "../../pages/Login/Login";

function RootRouter() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <h1>Error page</h1>,
            children: [
                {
                    index: true,
                    element: <>SomeComponent</>
                },
                {
                    path: '/catalogue',
                    element: <>Catalogue</>
                },
                {
                    path: '/catalogue/:id',
                    element: <>Some Product by ID</>
                }
            ]
        },
        {
            path: '/login',
            element: <Login />,
            errorElement: <h1>Error page</h1>,
            children: [
                {
                    index: true,
                    element: <Login />
                }
            ]
        }
    ])

    return <RouterProvider router={router} /> ;
}

export default RootRouter;