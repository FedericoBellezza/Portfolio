import { useContext } from "react";
import PageContext from "../Context/GlobalContext";

export default function Navbar() {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  const navigateToPage = ({ to }) => {
    if (currentPage === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    let x = document.getElementsByClassName("animate-entryfromleft");
    Array.from(x).forEach((element) => {
      element.style.opacity = "0";
      element.style.translate = "-300px";
      element.style.transition = "0.5s";
    });

    let y = document.getElementsByClassName("animate-entryfromright");
    Array.from(y).forEach((element) => {
      element.style.opacity = "0";
      element.style.translate = "300px";
      element.style.transition = "0.5s";
    });

    setTimeout(() => {
      setCurrentPage(to);
      window.scrollTo(0, 0);
    }, 500);
  };
  return (
    <>
      <div className="bg-transparent py-5 flex gap-1 items-center  justify-center fixed w-full z-10">
        <div className="bg-slate-800 px-5 flex rounded-2xl h-14">
          <div className="nav-icon w-20  flex flex-col items-center">
            <button
              onClick={() => navigateToPage({ to: "home" })}
              className={`fa-solid fa-house text-md p-5 duration-300 ease-out cursor-pointer hover:scale-120 ${
                currentPage === "home" ? "text-lime-300" : "text-white"
              }`}
            ></button>
            <div
              className={`label  text-white bg-slate-800 font-light p-2 rounded-lg duration-500 ease `}
            >
              Home
            </div>
          </div>
          <div className="nav-icon w-20  flex flex-col items-center">
            <button
              onClick={() => navigateToPage({ to: "projects" })}
              className={`fa-solid fa-layer-group text-md p-5 duration-300 ease-out cursor-pointer hover:scale-120 ${
                currentPage === "projects" ? "text-lime-300" : "text-white"
              }`}
            ></button>
            <div className="label text-white bg-slate-800  font-light p-2 rounded-lg duration-500 ease ">
              Progetti
            </div>
          </div>
          <div className="nav-icon w-20  flex flex-col items-center">
            <button
              onClick={() => navigateToPage({ to: "contacts" })}
              className={`fa-solid fa-inbox text-md p-5 duration-300 ease-out cursor-pointer hover:scale-120 ${
                currentPage === "contacts" ? "text-lime-300" : "text-white"
              }`}
            ></button>
            <div className="label text-white bg-slate-800  font-light p-2 rounded-lg duration-500 ease ">
              Contatti
            </div>
          </div>
          <div className="nav-icon w-20  flex flex-col items-center">
            <button
              onClick={() => navigateToPage({ to: "tools" })}
              className={`fa-solid fa-wrench text-md p-5 duration-300 ease-out cursor-pointer hover:scale-120 ${
                currentPage === "tools" ? "text-lime-300" : "text-white"
              }`}
            ></button>
            <div className="label text-white bg-slate-800  font-light p-2  rounded-lg duration-500 ease ">
              Strumenti
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
