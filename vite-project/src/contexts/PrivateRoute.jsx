// PrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContexts";

const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/createonlyloginpage" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role_id)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
