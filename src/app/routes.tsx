import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '@features/home/HomeLayout';

const mainRoutes = [
    {
        path: '',
        element: <HomeLayout />,
    },
    {
        path: '/',
        element: <HomeLayout />,
    },
    {
        path: '/contact',
        element: <HomeLayout />,
    },
];


export default createBrowserRouter([
    ...mainRoutes,
]);


