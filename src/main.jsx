import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Listed from './components/Listed/Listed';
import Pages from './components/Pages/Pages';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetailes from './components/BookDetailes/BookDetailes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/listed',
        element: <Listed></Listed>
      },
      {
        path: '/pages',
        element: <Pages></Pages>
      },
      {
        path: '/book/:id',
        element: <BookDetailes></BookDetailes>,
        loader:() => fetch('../books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
