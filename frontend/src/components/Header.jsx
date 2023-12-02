import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const {currentUser}= useSelector(state => state.user)
  return (
    <div className=" bg-gray-200 shadow-lg shadow-slate-500 h-10 p-2 flex flex-wrap justify-between align-center">
      <Link to="/Home">
        <h1 className="font-bold">Authenticate</h1>{" "}
      </Link>
      <ul className="flex gap-4 flex-wrap ">
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/profile">
          {currentUser ? (
            <img
              src={currentUser.photo}
              alt="profile"
              className="h-7 w-7 rouned-full object-cover"
            />
          ) : (
            <li>Sign in</li>
          )}
        </Link>
      </ul>
    </div>
  );
};

export default Header;
