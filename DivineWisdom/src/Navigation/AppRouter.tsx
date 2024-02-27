import { Navigate, RouteProps } from "react-router-dom";
import { ROUTES } from "./Navigation";
// import useAuthValue from "../Modules/AuthModule/Hooks/useAuthValue";

export type AppRouterProps = {
  authenticationPath?: string;
  children: any;
} & RouteProps;

export default function AppRouter(props: AppRouterProps) {
  const { authenticationPath = ROUTES.LOGIN, children } = props;
  // const { token, loggedIn } = useAuthValue();
  // if (token && loggedIn) {
    return children;
  // } else {
    // return <Navigate to={authenticationPath} />;
  // }
}
