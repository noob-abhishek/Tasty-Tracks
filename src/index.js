import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter , RouterProvider } from "react-router-dom";

import Contact from './Components/Contact';
import Body from './Components/Body';
import RestaurantMenu from './Components/RestaurantMenu';
import Error from './Components/Error';
import About from './Components/Aboutus'
// const About = lazy(()=> import('./Components/Aboutus'));




const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children:[{
    path: '/about',
    element:  <About />
  },
 { path: '/contact',
  element: <Contact  />
},
{
  path: '/',
  element: <Body />
},
{
  path: '/restaurant/:id',
  element: <RestaurantMenu />
}
]
},
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
  
    <RouterProvider router = {router} /> 
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

