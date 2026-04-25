import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import { Home } from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
