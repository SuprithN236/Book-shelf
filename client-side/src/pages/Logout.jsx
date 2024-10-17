import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    logout()
      .then(() => alert("you have been successfully logged out"))
      .catch(() => {
        alert("an error occured while logging out");
      });
    navigate("/");
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded-xl"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
