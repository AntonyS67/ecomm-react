import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

export default function Navbar() {
  const { pathname } = useLocation();
  const { auth } = useAuth();
  const { logout } = useUser();

  const handleLogout = async () => {
    await logout(auth.token);
    window.location.reload();
  };

  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-indigo-600">
            FWR
          </a>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <a
            href="/"
            className={`${
              pathname === "/"
                ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            }`}
          >
            Home
          </a>
          <a
            href="/cart"
            className={`${
              pathname.includes("/cart")
                ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            }`}
          >
            Carrito
          </a>
          {auth ? (
            <>
              {auth.me.user.role === "1" && (
                <a
                  href="/admin"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Admin
                </a>
              )}
              <p className="p-2 lg:px-4 md:mx-2 strong">
                Bienvenido {auth.me.user.fullname}
              </p>
              <button
                onClick={handleLogout}
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className={`${
                  pathname.includes("/login")
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                    : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                }`}
              >
                Login
              </a>
              <a
                href="/signup"
                className={`${
                  pathname.includes("/signup")
                    ? "p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                    : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                }`}
              >
                Signup
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
