export default function ProjectsPage() {
  return (
    <div className="bg-slate-900  text-amber-50 pt-25 min-h-screen">
      <div className="container p-10 mx-auto py-10">
        {/* 1st row */}
        <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromright ">
          I miei progetti
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  animate-entryfromleft mt-15 ">
          <div className="project-card  bg-emerald-400 w-full h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease  ">
            <p className="text-6xl p-5 text-end">Boolean</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>
          <div className="project-card  bg-purple-400 w-full h-70 overflow-hidden   text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease ">
            <p className="text-6xl p-5 text-end">GitHub</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>
          <div className="project-card  bg-sky-400 w-full h-70 overflow-hidden   text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease ">
            <p className="text-6xl p-5 text-end">Copilot</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>
          <div className="project-card  bg-pink-400 w-full h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease  ">
            <p className="text-6xl p-5 text-end">Boolean</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>{" "}
          <div className="project-card  bg-green-400 w-full h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease  ">
            <p className="text-6xl p-5 text-end">Boolean</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>{" "}
          <div className="project-card  bg-fuchsia-400 w-full h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease  ">
            <p className="text-6xl p-5 text-end">Boolean</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>{" "}
          <div className="project-card  bg-lime-400 w-full h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease  ">
            <p className="text-6xl p-5 text-end">Boolean</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>{" "}
          <div className="project-card  bg-yellow-400 w-full h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease  ">
            <p className="text-6xl p-5 text-end">Boolean</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>{" "}
          <div className="project-card  bg-red-400 w-full h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease  ">
            <p className="text-6xl p-5 text-end">Boolean</p>
            <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
