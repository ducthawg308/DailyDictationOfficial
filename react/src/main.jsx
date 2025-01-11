import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import ErrorPage from './pages/error.jsx';
import ProductPage from './pages/product.jsx';
import './styles/global.css';
import TodoApp from './components/Example/TodoApp.jsx';

// Tạo router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },  
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },  
  {
    path: "/register",
    element: <RegisterPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
