export default function ProjectsPage() {
  return (
    <div className="bg-slate-900  text-amber-50 pt-25 min-h-screen">
      <div className="container p-10 mx-auto py-10">
        {/* title */}
        <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromright ">
          Progetti personali
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
            <p className="  px-10  text-lg text-end ">In progress</p>

            <i className="fa-solid fa-cloud text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
          {/* In corso */}
          <div
            onClick={() =>
              window.open("https://flaverprotection-b057e.web.app/")
            }
            className="cursor-pointer project-card  bg-green-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl  hover:scale-105  rounded-xl relative duration-200 ease  "
          >
            <p className="p-5  px-10  text-end ">Flaver Protection</p>
            <p className="  px-10  text-lg text-end ">In progress</p>

            <i className="fa-solid fa-tools text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
          {/* In corso */}
          <div
            onClick={() => window.open("https://australian-diary.web.app/")}
            className="cursor-pointer project-card  bg-amber-400 w-full h-70 overflow-hidden text-white font-bold py-2 text-4xl xl:text-5xl  hover:scale-105  rounded-xl relative duration-200 ease  "
          >
            <p className="p-5  px-10  text-end ">Australian Diary</p>
            <p className="  px-10  text-lg text-end ">In progress</p>

            <i className="fa-solid fa-earth-oceania text-[20rem] top-0 left-0 absolute opacity-30"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
