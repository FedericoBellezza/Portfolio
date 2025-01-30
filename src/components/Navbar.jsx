export default function Navbar() {
  return (
    <div className=" bg-slate-900 py-5 flex gap-1 items-center  justify-center">
      <div className="bg-slate-800 px-5 flex rounded-2xl">
        <div className="nav-icon  ">
          <i className="fa-solid fa-house text-md p-5 duration-300 ease-out text-white hover:scale-120 "></i>
          <div className="label text-white absolute font-light p-1.5  rounded-lg duration-500 ease ">
            Home
          </div>
        </div>
        <div className="nav-icon ">
          <i className="fa-solid fa-paper-plane text-md p-5 duration-300 ease-out text-white hover:scale-120 relative"></i>
          <div className="label  text-white absolute font-light p-1.5  rounded-lg duration-500 ease ">
            Contacts
          </div>
        </div>
        <div className="nav-icon">
          <i className="fa-solid fa-diagram-project text-md p-5 duration-300 ease-out text-white hover:scale-120 relative"></i>
          <div className="label text-white absolute font-light p-1.5  rounded-lg duration-500 ease ">
            Projects
          </div>
        </div>
        <div className="nav-icon">
          <i className="fa-solid fa-wrench text-md p-5 duration-300 ease-out text-white hover:scale-120 relative"></i>
          <div className="label text-white absolute font-light p-1.5  rounded-lg duration-500 ease ">
            Tools
          </div>
        </div>
      </div>
    </div>
  );
}
