export default function ToolsPage() {
  return (
    <div className="bg-slate-900  text-amber-50 pt-25">
      <div className="container mx-auto flex flex-col items-center p-10 min-h-screen ">
        <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromleft mb-10">
          Le mie conoscenze
        </h1>
        <div className="flex flex-wrap justify-around gap-y-10 animate-entryfromright mt-15">
          {/* React */}
          <div className=" bg-sky-400 w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">React</p>
            <i className="fa-brands fa-react text-[15rem] top-0 left-[-20px] absolute opacity-30"></i>
          </div>
          {/* Bootstrap */}
          <div className=" bg-purple-500  w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">Bootstrap</p>
            <i className="fa-brands fa-bootstrap text-[15rem] top-0 left-[-20px] absolute opacity-30"></i>
          </div>
          {/* HTML */}
          <div className=" bg-orange-500  w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">HTML</p>
            <i className="fa-brands fa-html5 text-[15rem] top-0 left-[-20px] absolute opacity-30"></i>
          </div>
          {/* CSS */}
          <div className=" bg-blue-600  w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">CSS</p>
            <i className="fa-brands fa-css text-[15rem] top-0 left-[-20px] absolute opacity-30"></i>
          </div>
          {/* Java */}
          <div className=" bg-orange-400  w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">Java</p>
            <p className="text-lg md:text-xl p-5 text-end">in progress</p>
            <i className="fa-brands fa-java text-[15rem] top-0 left-[-20px] absolute opacity-30"></i>
          </div>
          {/* Node.JS */}
          <div
            className={` bg-lime-500   w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease `}
          >
            <p className="text-2xl md:text-4xl p-5 text-end">Node.js</p>
            <i className="fa-brands fa-node-js text-[15rem] top-0 left-[-20px] absolute opacity-30"></i>
          </div>
          {/* Javascript */}
          <div className=" bg-yellow-500  w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">Javascript</p>
            <i className="fa-brands fa-js text-[15rem] top-0 left-[-20px] absolute opacity-30"></i>
          </div>
          {/* Tailwind */}
          <div className=" bg-blue-400  w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">Tailwind</p>

            {/* <i className="fa-brands fa-bootstrap text-[15rem] top-0 left-[-20px] absolute opacity-30"></i> */}
            <img
              src="../logo-tailwind.svg"
              className="absolute top-10 left-[-100px] opacity-30"
              alt=""
            />
          </div>
          {/* TypeScript */}
          <div className=" bg-sky-700 w-full sm:w-45/100 lg:w-30/100 h-40 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative  duration-200 ease">
            <p className="text-2xl md:text-4xl p-5 text-end">TypeScript</p>
            <p className="text-lg md:text-xl p-5 text-end">in progress</p>

            {/* <i className="fa-brands fa-bootstrap text-[15rem] top-0 left-[-20px] absolute opacity-30"></i> */}
            <img
              src="../logo-typescript.svg"
              className="absolute top-10 left-[-20px] opacity-30 w-60/100 "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
