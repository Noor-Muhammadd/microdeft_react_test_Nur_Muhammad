import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check for token in local storage
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="bg-[#183A91] text-[#fff] py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200">
        MicroDeft 
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              to="/course"
              className="hover:bg-[#94B3F5] py-2 px-4 rounded transition"
            >
              Create Course
            </Link>
          </li>
          {!isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/register"
                  className="hover:bg-[#94B3F5] py-2 px-4 rounded transition"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:bg-[#94B3F5] py-2 px-4 rounded transition"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="hover:bg-red-700 py-2 px-4 rounded transition bg-red-600"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
