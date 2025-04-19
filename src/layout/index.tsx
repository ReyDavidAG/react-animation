import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
