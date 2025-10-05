import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Pages/Root/RootLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import BookDetails from '../Pages/Books/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';

export const router = createBrowserRouter([
    {
      path: '/',
      Component: RootLayout,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            path: '/',
            loader:()=>fetch('booksData.json'),
            Component: Home,
            
        },
        {
          path: '/readList',
          loader:()=>fetch('booksData.json'),
          Component: ReadList
        },
        {
          path: '/pagesRead',
          loader:()=>fetch('booksData.json'),
          Component: PagesToRead
        },
        {
            path:'/bookDetails/:bookId',
            loader:()=>fetch('booksData.json'),
            Component:BookDetails,
           
        }
      ]
    }
])