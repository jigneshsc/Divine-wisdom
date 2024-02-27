import { Navigate, RouteProps } from "react-router-dom";
// import useAuthValue from "../Modules/AuthModule/Hooks/useAuthValue";
import { ROUTES } from "./Navigation";

export type AuthRouteProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;
function AuthRouter(props: AuthRouteProps) {
  // const { loggedIn, token } = useAuthValue();
  const { authenticationPath = ROUTES.DASHBOARD, children } = props;
  if (true) {
    return children;
  } else {
    return <Navigate to={authenticationPath} />;
  }
}

export default AuthRouter;
