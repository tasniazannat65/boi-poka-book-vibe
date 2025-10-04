import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Pages/Root/RootLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
    {
      path: '/',
      Component: RootLayout,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            path: '/',
            Component: Home
        }
      ]
    }
])