import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';    
import './src/index.css';
import App from './App';
import CreateAccount from './src/component/CreateAccount';
import Signin from './src/component/SignIn';
import About  from './src/component/About';
import Dashboard from './src/component/Dashboard';
import Blog from './src/component/Blog';
// import Faqs from './src/component/Faqs';
 
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