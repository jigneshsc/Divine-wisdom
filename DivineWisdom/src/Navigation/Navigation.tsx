import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AppRouter from "./AppRouter";
import HomePage from "../Pages/HomePage/HomePage";

export const ROUTES = {
 Home:'/'
};

const navigationRouter = createBrowserRouter([
  // {
  //   path: ROUTES.LOGIN,
  //   element: (
  //     <AuthRouter>
  //       <Login />
  //     </AuthRouter>
  //   ),
  //   errorElement: <Error />,
  // },
  {
    path: ROUTES.Home,
    element: (
      <AppRouter>
        <HomePage />
      </AppRouter>
    ),
  },

  
]);

export default navigationRouter;
