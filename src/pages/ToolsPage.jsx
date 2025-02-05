export default function ToolsPage() {
  return (
    <div className="bg-slate-900  text-amber-50 pt-25">
      <div className="container mx-auto flex flex-col items-center  p-10 min-h-screen ">
        <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromleft mb-10">
          Strumenti utilizzati
        </h1>
        <div className="flex flex-wrap justify-around   gap-10 animate-entryfromright mt-15">
          {/* React */}
          <div className=" bg-sky-400  w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">React</p>
            <i className="fa-brands fa-react text-[15rem] top-5 left-[-25px] absolute opacity-30"></i>
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* Bootstrap */}
          <div className=" bg-purple-500   w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">Bootstrap</p>
            <i className="fa-brands fa-bootstrap text-[15rem] top-5 left-[-25px] absolute opacity-30"></i>
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* HTML */}
          <div className=" bg-orange-500   w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">HTML</p>
            <i className="fa-brands fa-html5 text-[15rem] top-5 left-[-25px] absolute opacity-30"></i>
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* CSS */}
          <div className=" bg-blue-600   w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">CSS</p>
            <i className="fa-brands fa-css text-[15rem] top-5 left-[-25px] absolute opacity-30"></i>
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* Java */}
          <div className=" bg-orange-400   w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">Java</p>
            <i className="fa-brands fa-java text-[15rem] top-5 left-[-25px] absolute opacity-30"></i>
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* Node.JS */}
          <div className=" bg-lime-500   w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">Node.js</p>
            <i className="fa-brands fa-node-js text-[15rem] top-5 left-[-25px] absolute opacity-30"></i>
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* Javascript */}
          <div className=" bg-yellow-500   w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">Javascript</p>
            <i className="fa-brands fa-js text-[15rem] top-5 left-[-25px] absolute opacity-30"></i>
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* Tailwind */}
          <div className=" bg-blue-400   w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">Tailwind</p>
            {/* <i className="fa-brands fa-bootstrap text-[15rem] top-5 left-[-25px] absolute opacity-30"></i> */}
            <img
              src="../../public/logo-tailwind.svg"
              className="absolute top-10 left-[-100px] opacity-30"
              alt=""
            />
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
          {/* TypeScript */}
          <div className=" bg-sky-700  w-45/100 lg:w-30/100 h-50 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-200 ease">
            <p className="text-4xl p-5 text-end">TypeScript</p>
            {/* <i className="fa-brands fa-bootstrap text-[15rem] top-5 left-[-25px] absolute opacity-30"></i> */}
            <img
              src="../../public/logo-typescript.svg"
              className="absolute top-10 left-[-20px] opacity-30 w-60/100 "
              alt=""
            />
            <button className="absolute bottom-10 right-10 cursor-pointer">
              <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-slate-600 hover:border-transparent duration-200 ease"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
