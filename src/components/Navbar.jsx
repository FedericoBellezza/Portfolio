export default function Navbar() {
  return (
    <>
      <div className="  bg-transparent py-5 flex gap-1 items-center  justify-center fixed w-full z-10">
        <div className="bg-slate-800 px-5 flex rounded-2xl h-14">
          <div className="nav-icon w-20  flex flex-col items-center">
            <i className="fa-solid fa-house text-md p-5 duration-300 ease-out cursor-pointer text-white hover:scale-120 "></i>
            <div className="label text-white bg-slate-800  font-light p-2 rounded-lg duration-500 ease ">
              Home
            </div>
          </div>
          <div className="nav-icon w-20  flex flex-col items-center">
            <i className="fa-solid fa-layer-group text-md p-5 duration-300 cursor-pointer ease-out text-white hover:scale-120 "></i>
            <div className="label text-white bg-slate-800  font-light p-2 rounded-lg duration-500 ease ">
              Progetti
            </div>
          </div>
          <div className="nav-icon w-20  flex flex-col items-center">
            <i className="fa-solid fa-inbox text-md p-5 duration-300 ease-out cursor-pointer text-white hover:scale-120 "></i>
            <div className="label text-white bg-slate-800  font-light p-2 rounded-lg duration-500 ease ">
              Contatti
            </div>
          </div>
          <div className="nav-icon w-20  flex flex-col items-center">
            <i className="fa-solid fa-wrench text-md p-5 duration-300 ease-out cursor-pointer text-white hover:scale-120 "></i>
            <div className="label text-white bg-slate-800  font-light p-2  rounded-lg duration-500 ease ">
              Strumenti
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
