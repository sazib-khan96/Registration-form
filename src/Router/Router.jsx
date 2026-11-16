import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Registration from '../Pages/Registration/Registration';
import Login from '../Pages/Login/Login';

const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path:'regester',
                Component: Registration
            },
            {
                path: 'login',
                Component:Login
            }
        ]
    }
])


export default Router;