import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ~ Element Pages
import Landing from './pages/Landing/Landing';
import Mentors from './pages/Mentors/Mentors';
import Buckets from './pages/Buckets/Buckets';
import NotFound from './pages/others/NotFound';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';
import Loading from './components/Loader/Cargando';

// & Element Components
import SignIn from './components/SignIn-Up/SignIn';
import SignUp from './components/SignIn-Up/SignUp';
import Navbar from './components/Navbar/Navbar';

// ^ StateGlobal
import stateGlobal from './store';
import { useEffect, useState } from 'react';
import Payment from './pages/PaymentMethod/PaymentMethod';
import { UserApi } from './helpers/Types/Cards';
import { useStore } from 'zustand';

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
  const { initialApp } = stateGlobal((state) => state) as {
    initialApp: () => void;
  };

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
