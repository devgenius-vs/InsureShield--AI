import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-24"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
