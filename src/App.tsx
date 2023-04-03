import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateContainer } from './containers/CreateContainer';
import { MainContainer } from './containers/MainContainer';
import { NotFound } from './pages/NotFound';
import { ProductContainer } from './containers/ProductContainer';
import LayOut from './pages/LayOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/create',
        element: <CreateContainer />,
      },
      {
        path: '/product/:id',
        element: <ProductContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
