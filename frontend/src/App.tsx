import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ~ Element Pages
import Landing from './pages/Landing/Landing';
import Mentors from './pages/Mentors/Mentors';
import Buckets from './pages/Buckets/Buckets';
import NotFound from './pages/others/NotFound';
import Profile from './pages/Profile/Profile';

// & Element Components
import SignIn from './components/SignIn-Up/SignIn';
import SignUp from './components/SignIn-Up/SignUp';
import Navbar from './components/Navbar/Navbar';

/** root routes
 * en react router v6
 * todas las rutas son exactas y en RouteObject ya no existe esa propiedad
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
      {
        path: 'mentors',
        element: <Mentors />,
      },
      {
        path: 'buckets',
        element: <Buckets />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      ],
    },
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/register',
    element: <SignUp />,
  }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
