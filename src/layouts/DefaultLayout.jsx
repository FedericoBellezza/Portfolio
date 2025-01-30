import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}
