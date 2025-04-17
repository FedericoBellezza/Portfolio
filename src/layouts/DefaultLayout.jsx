import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <div className="max-w-screen overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
