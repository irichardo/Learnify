// ~ Element Pages
import Landing from './pages/Landing/Landing';
import Mentors from './pages/Mentors/Mentors';
import Buckets from './pages/Buckets/Buckets';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/others/NotFound';
import Loading from './components/Loader/Cargando';
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/PaymentMethod/PaymentMethod';

// & Element Components
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignIn-Up/SignUp';
import SignIn from './components/SignIn-Up/SignIn';

// * Hooks
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ^ StateGlobal
import stateGlobal from './store';
import type { State, Actions } from './store/index';

/** root routes
 * version react router v6
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
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'buckets',
        element: <Buckets />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'payments',
        element: <Payment />,
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
  },
]);

function App() {
  const [loading, isLoading] = useState(true);
  const { initialApp } = stateGlobal<State & Actions>((state) => state);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await initialApp();
      } catch (error) {
        alert(
          'no se ah podido conectar con la base de datos, intente en otro momento'
        );
      } finally {
        isLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (loading) return <Loading />;

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
