export default function LeftColumn() {
  return (
    <div className="flex-1 animate-entryfromleft">
      {/* profile card */}
      <div className="sticky card top-10 mx-20 p-5 w-100 bg-white rounded-3xl flex flex-col items-center text-sky-950 hover:scale-105 duration-300 ease-in-out overflow-hidden ">
        <img
          src="/src/assets/img/foto profilo2.jpg"
          alt=""
          className="my-5  h-70 w-60 object-cover rounded-3xl"
        />
        <h1 className="text-4xl font-extrabold mb-10">Federico Bellezza</h1>
        <p className="text-xl text-center  text-slate-500 ">
          Sono un giovane sviluppatore web che lavora come Full Stack Developer
        </p>
        <div className="flex gap-7 mt-10 pb-10 justify-center animate-entryfromleft">
          <i
            onClick={() =>
              window.open("https://www.facebook.com/Federico.Bellezza.01")
            }
            className="fa-brands fa-square-facebook text-2xl cursor-pointer duration-300 ease-out hover:text-orange-500 hover:scale-150  opacity-0 "
          />
          <i
            onClick={() =>
              window.open("https://www.instagram.com/federico.bellezza/")
            }
            className="fa-brands fa-instagram       text-2xl cursor-pointer duration-300 ease-out hover:text-orange-500 hover:scale-150  opacity-0 "
          />
        </div>
      </div>
    </div>
  );
}
