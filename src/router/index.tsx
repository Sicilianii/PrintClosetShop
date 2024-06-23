import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PageLayout} from "../layouts";
import Login from "@/pages/Login/Login";
import Registration from "@/pages/Registration/Registration";
import SingLayout from "@/layouts/Sing.layout";
import Catalogue from "@/pages/Catalogue/Catalogue";

function RootRouter() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <PageLayout />,
            errorElement: <h1>Error page</h1>,
            children: [
                {
                    index: true,
                    element: <>SomeComponent</>
                },
                {
                    path: '/catalogue',
                    element: <Catalogue />
                },
                {
                    path: '/catalogue/:id',
                    element: <>Some Product by ID</>
                }
            ]
        },
        {
            path: '/login',
            element: <SingLayout />,
            errorElement: <h1>Error page</h1>,
            children: [
                {
                    index: true,
                    element: <Login />
                },
                {
                    path: '/login/registration',
                    element: <Registration />
                }
            ]
        }
    ])

    return <RouterProvider router={router} /> ;
}

export default RootRouter;