import React from "react";
import { Link, useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  return (
    <div>
      <div>
        <nav className="bg-[#F7F7F8] border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center  space-x-3 rtl:space-x-reverse">
              <img src="/images/news-logo.png" className="w-[80px]" alt="News Logo" />
            </a>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                  <Link
                    to="/"
                    className={`block py-2 px-3 text-white rounded  md:p-0   ${
                      location.pathname === "/" ? "!text-blue-900 " : " !text-black"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/business"
                    className={`block py-2 px-3 text-white rounded  md:p-0   ${
                      location.pathname === "/business" ? "!text-blue-900 " : " !text-black"
                    }`}
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/entertainment"
                    className={`block py-2 px-3 text-white rounded  md:p-0   ${
                      location.pathname === "/entertainment" ? "!text-blue-900 " : " !text-black"
                    }`}
                  >
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sports"
                    className={`block py-2 px-3 text-white rounded  md:p-0   ${
                      location.pathname === "/sports" ? "!text-blue-900 " : " !text-black"
                    }`}
                  >
                    Sports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/technology"
                    className={`block py-2 px-3 text-white rounded  md:p-0   ${
                      location.pathname === "/technology" ? "!text-blue-900 " : "!text-black"
                    }`}
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
