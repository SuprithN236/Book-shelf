import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Spinner } from "flowbite-react";
import {
  Navigate,
  UNSAFE_LocationContext,
  useLocation,
  useNavigate,
} from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signin" />;
}

export default PrivateRoute;
