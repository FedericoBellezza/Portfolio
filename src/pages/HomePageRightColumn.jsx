export default function HomePageRightColumn() {
  return (
    <div className="flex-2 animate-entryfromright" id="animate-entryfromright">
      <h1 className="text-8xl text-lime-300 font-extrabold">FULL STACK</h1>
      <h2 className="text-developer text-8xl font-extrabold">Web Developer</h2>
      <p className="text-xl text-gray-400 mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        quia quos facere labore libero repellendus ipsa perspiciatis explicabo
        aliquam odio laboriosam.
      </p>
      {/* numbers section */}
      <div className="flex gap-10 mt-15">
        <div>
          <p className="text-7xl font-extrabold mb-5">+3</p>
          <p className="text-xl text-gray-400">
            ANNI DI
            <br />
            ESPERIENZA
          </p>
        </div>
        <div>
          <p className="text-7xl font-extrabold mb-5">+15</p>
          <p className="text-xl text-gray-400">
            PROGETTI
            <br />
            COMPLETATI
          </p>
        </div>
        <div>
          <p className="text-7xl font-extrabold mb-5">+7</p>
          <p className="text-xl text-gray-400">
            CLIENTI
            <br />
            SODDISFATTI
          </p>
        </div>
      </div>

      {/* section buttons */}
      <div className="flex gap-10 my-15">
        {/* right button */}
        <div className="bg-orange-400 w-90 h-70 overflow-hidden   text-white font-bold py-2 px-4 rounded-xl relative animate-appear duration-75 ease">
          <p className="text-6xl p-5 text-end">GitHub</p>
          <i className="fa-brands fa-github text-[20rem] top-0 left-0 absolute opacity-30"></i>

          <button
            onClick={() => window.open("https://github.com/FedericoBellezza")}
            className="absolute bottom-10 right-10 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-orange-400 hover:border-transparent duration-200 ease "></i>
          </button>
        </div>
        {/* left button */}
        <div className="bg-lime-400 w-90 h-70 overflow-hidden text-white font-bold py-2 px-4 rounded-xl relative animate-appear">
          <p className="text-6xl p-5 text-end">Linkedin</p>
          <i className="fa-brands fa-linkedin text-white text-[20rem] top-0 right-25 absolute opacity-30 "></i>

          <button
            onClick={() =>
              window.open("https://linkedin.com/in/federico-bellezza21")
            }
            className="absolute bottom-10 right-10 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-right text-2xl p-2 border  rounded hover:bg-amber-50 hover:text-lime-500 hover:border-transparent duration-200 ease"></i>
          </button>
        </div>
      </div>

      {/* Tools */}
      <h2 className="text-8xl font-extrabold mt-50 animate-appear">
        Tecnologie
      </h2>

      <div className=" flex gap-10 mt-20 wrapper relative h-50 mb-100 overflow-hidden animate-appear ">
        <div className="scroller flex flex-col items-center  absolute left-full scroller1 ">
          <i className="fa-brands fa-html5 text-7xl mb-5"></i>
          <div className="text-2xl font-bold">HTML</div>
        </div>
        <div className="flex flex-col items-center absolute scroller left-full scroller2">
          <img
            className="typescript-logo h-18 mb-5  p-1"
            src="../../../public/logo-typescript.svg"
            alt=""
          />

          <div className="text-2xl font-bold">Typescript</div>
        </div>
        <div className="scroller flex flex-col items-center absolute left-full scroller3">
          <i className="fa-brands fa-css text-7xl mb-5"></i>
          <div className="text-2xl font-bold">CSS</div>
        </div>
        <div className="flex flex-col items-center absolute scroller left-full  scroller4">
          <img
            className="tailwind-logo mb-5  "
            src="../../../public/logo-tailwind.svg"
            alt=""
          />
          <div className="text-2xl font-bold">Tailwind</div>
        </div>
        <div className="flex flex-col items-center absolute scroller left-full  scroller5">
          <i className="fa-brands fa-react text-7xl mb-5"></i>
          <div className="text-2xl font-bold">React</div>
        </div>
        <div className="flex flex-col items-center absolute scroller left-full  scroller6">
          <i className="fa-brands fa-bootstrap text-7xl mb-5"></i>

          <div className="text-2xl font-bold">Bootstrap</div>
        </div>
        <div className="flex flex-col items-center absolute scroller left-full  scroller7">
          <i className="fa-brands fa-node-js text-7xl mb-5"></i>

          <div className="text-2xl font-bold">Node.js</div>
        </div>
        <div className="flex flex-col items-center absolute scroller left-full  scroller8">
          <i className="fa-brands fa-js text-7xl mb-5"></i>

          <div className="text-2xl font-bold">Javascript</div>
        </div>
      </div>
    </div>
  );
}
