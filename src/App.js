import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Main from './component/layout/Main';
import Home from './component/Home';
import Details from './component/Details';

function App() {
  const router = createBrowserRouter ([
    {
      path:'/',
      element: <Main> </Main>,
      children: [
        {
          path: '/',
          element: <Home> </Home>
        },

        {
          path: '/details/:id',
          element: <Details> </Details>,
          loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
