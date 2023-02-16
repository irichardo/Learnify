import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ~ Element Pages
import Landing from './pages/Landing/Landing';

// & Element Components
import SignIn from './components/SignIn-Up/SignIn';
import SignUp from './components/SignIn-Up/SignUp';

/** root routes
 * en react router v6
 * todas las rutas son exactas y en RouteObject ya no existe esa propiedad
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
