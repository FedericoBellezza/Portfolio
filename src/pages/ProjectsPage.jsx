export default function ProjectsPage() {
  return (
    <div className="bg-slate-900  text-amber-50 pt-25 min-h-screen">
      <div className="container p-10 mx-auto py-10">
        {/* title */}
        <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromright ">
          I miei progetti
        </h1>
        {/* card container */}
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10  animate-entryfromleft mt-15">
          {/* weather app */}
          <div
            onClick={() =>
              window.open("https://weatherapp-federicobellezza.web.app/")
            }
            className="cursor-pointer project-card  bg-sky-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl hover:scale-105   rounded-xl relative duration-200 ease  "
          >
            <p className="p-5 px-10 text-end">WeatherApp</p>
            <i className="fa-solid fa-cloud text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
          {/* In corso */}
          <div className="opacity-50 project-card  bg-red-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl    rounded-xl relative duration-200 ease  ">
            <p className="p-5  px-10  text-end ">In corso</p>
            <i className="fa-solid fa-cloud text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
          {/* In corso */}
          <div className="opacity-50 project-card  bg-yellow-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl    rounded-xl relative duration-200 ease  ">
            <p className="p-5  px-10  text-end ">In corso</p>
            <i className="fa-solid fa-cloud text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
          {/* In corso */}
          <div className="opacity-50 project-card  bg-green-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl    rounded-xl relative duration-200 ease  ">
            <p className="p-5  px-10  text-end ">In corso</p>
            <i className="fa-solid fa-cloud text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
          {/* In corso */}
          <div className="opacity-50 project-card  bg-pink-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl    rounded-xl relative duration-200 ease  ">
            <p className="p-5  px-10  text-end ">In corso</p>
            <i className="fa-solid fa-cloud text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
          {/* In corso */}
          <div className="opacity-50 project-card  bg-orange-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl    rounded-xl relative duration-200 ease  ">
            <p className="p-5  px-10  text-end ">In corso</p>
            <i className="fa-solid fa-cloud text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
