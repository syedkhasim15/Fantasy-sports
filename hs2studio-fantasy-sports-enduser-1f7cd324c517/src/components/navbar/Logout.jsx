import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("persist:root");
        navigate("/login");
    }

  return <button className="w-full" onClick={handleClick}>Log Out</button>;
}

export default Logout;
