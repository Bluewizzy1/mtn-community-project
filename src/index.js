import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';    
import './index.css';
import App from './App';
import CreateAccount from './component/CreateAccount';
import Signin from './component/SignIn';
import About  from './component/About';
import Dashboard from './component/Dashboard';
import Blog from './component/Blog';
// import Faqs from './component/Faqs';
 
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About Us />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/terms",
    element: <Blog />,
  },
  // {
  //   path: "/faqs",
  //   element: <Faqs />,
  // },
  {
    path: "/signUp",
    element: <Signin />,
  },
  {
    path: "/create",
    element: <CreateAccount />,
  },
]);
 
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
);