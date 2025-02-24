import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {" "}
          {/* Center everything on all screen sizes */}
          <div className="md:w-1/2 text-center">
            {" "}
            {/* Adjust width as needed, text centered */}
            <ul className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 lg:space-x-6 mb-4 md:mb-0">
              {" "}
              {/* Center links within the list */}
              <li>
                <a
                  href="https://www.linkedin.com/in/vijaisuria"
                  className="hover:underline font-bold hover:text-gray-800"
                >
                  Vijai Suria M
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/"
                  className="hover:underline font-bold hover:text-gray-800"
                >
                  Siva Jegadeesh C B
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/"
                  className="hover:underline font-bold hover:text-gray-800"
                >
                  Swathy K S
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/"
                  className="hover:underline font-bold hover:text-gray-800"
                >
                  Darshan B
                </a>
              </li>
            </ul>
          </div>
          {/* Optional: Add social media icons here -  Center them if you want */}
          {/* <div className="md:w-1/4 flex justify-center md:justify-end">  */}{" "}
          {/* Example for centering social icons */}
          {/* <a href="#" className="text-gray-600 hover:text-gray-800 mr-2"><svg>...</svg></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><svg>...</svg></a>
          </div> */}
        </div>

        <div className="mt-8 flex flex-col items-center">
          {" "}
          {/* Centered content */}
          <div className="mb-4">
            <img
              src="/sbilife-logo.png"
              alt="Company Logo"
              className="h-8 w-auto"
            />{" "}
            {/* Adjust size as needed */}
          </div>
          <p className="text-center text-gray-600 text-sm">
            This project is submitted as a part of prototype round in SBILife
            Hack-AI-Thon 2024. We are not affiliated with any company.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} Team - Anomaly Avengers. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
