import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faChartLine,
  faCreditCard,
  faSignInAlt,
  faUserPlus,
  faBars,
  faTimes,
  faTachometerAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToFeatures = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true }); // Redirect to home
      setTimeout(() => {
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay ensures navigation is completed before scrolling
    } else {
      // If already on home page, just scroll
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            <span className="flex items-center">
              <img
                src="/sbilife-logo.png"
                alt="SBILife"
                width={80}
                height={80}
              />
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-700">
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </Link>
            <button
              onClick={handleScrollToFeatures}
              className="text-gray-600 hover:text-pink-700 cursor-pointer"
            >
              <FontAwesomeIcon icon={faList} className="mr-2" /> Features
            </button>
            <Link to="/track" className="text-gray-600 hover:text-pink-700">
              <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Tracker
            </Link>
            <Link to="/pay" className="text-gray-600 hover:text-pink-700">
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" /> Pay
              Online
            </Link>
            {userId && (
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-pink-700"
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />{" "}
                Dashboard
              </Link>
            )}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden lg:flex space-x-4">
            {userId ? (
              <button
                onClick={() => {
                  localStorage.removeItem("userId");
                  setUserId(null);
                }}
                className="px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Sign
                  In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm text-white bg-pink-700 rounded-lg hover:bg-pink-600"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-gray-600 hover:text-pink-700">
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </Link>
            <button
              onClick={handleScrollToFeatures}
              className="text-gray-600 hover:text-pink-700 cursor-pointer"
            >
              <FontAwesomeIcon icon={faList} className="mr-2" /> Features
            </button>
            <Link to="/track" className="text-gray-600 hover:text-pink-700">
              <FontAwesomeIcon icon={faChartLine} className="mr-2" /> Tracker
            </Link>
            <Link to="/pay" className="text-gray-600 hover:text-pink-700">
              <FontAwesomeIcon icon={faCreditCard} className="mr-2" /> Pay
              Online
            </Link>
            {userId ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-pink-700"
                >
                  <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />{" "}
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("userId");
                    setUserId(null);
                  }}
                  className="px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />{" "}
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Sign
                  In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm text-white bg-pink-700 rounded-lg hover:bg-pink-600"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
