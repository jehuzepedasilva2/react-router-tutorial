import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import Root, { 
  loader as rootLoader, 
  action as rootAction,
} from "./routes/root";

const router = createBrowserRouter([
  // first route is called the root route, since the rest of the 
  // rest of the routes will render inside it
  {
    path: "/", 
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader, 
    action: rootAction,
    // if we want this to dynamically change within the root layout, we
    // add children and use <Outlet /> on root.jsx/parent where we 
    // want it to show
    children: [
      {
        path: 'contacts/:contactID', 
        element: <Contact />
      }
    ]
  }, 
  {
    path: '/jobs', 
    element: <h1>Hello JOBS</h1>,
  }
]);

// NOTE: Use <Link> instead of <a> so that switching URL's is done on
// the client side not web server

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
