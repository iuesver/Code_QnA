import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateContainer } from './containers/CreateContainer';
import { MainContainer } from './containers/MainContainer';
import { NotFound } from './pages/NotFound';
import { ProductContainer } from './containers/ProductContainer';
import Loading from './pages/Loading';

const LayOut = lazy(() => {
  return Promise.all([
    import('./pages/LayOut'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
        <LayOut />
      </Suspense>
    ),
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
