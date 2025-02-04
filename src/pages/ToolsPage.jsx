export default function ToolsPage() {
  return (
    <div className="bg-slate-900  text-amber-50 pt-25">
      <div className="container mx-auto flex flex-col justify-center items-center  py-10">
        <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromleft mb-10">
          Strumenti utilizzati
        </h1>
        <div className=" flex gap-10 mt-20 wrapper relative h-50 mb-100 overflow-hidden animate-appear animate-entryfromright">
          <div className="scroller flex flex-col items-center  absolute left-full scroller1">
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
    </div>
  );
}
