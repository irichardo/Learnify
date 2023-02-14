import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/SignIn-Up/SignIn";
import SignUp from "./components/SignIn-Up/SignUp";

/** root routes */
const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/register",
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
