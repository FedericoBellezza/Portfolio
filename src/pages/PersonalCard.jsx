export default function PersonalCard() {
  return (
    <div className="animate-entryfromleft  ">
      <div className="lg:aspect-2/3 p-5 sticky  top-10 mx-auto  lg:min-w-100 w-full text-center bg-white rounded-3xl flex gap-5 flex-col items-center justify-between text-sky-950 hover:scale-105 duration-300 ease-in-out overflow-hidden ">
        <img
          src="/foto-profilo2.jpg"
          alt="profile photo"
          className="lg:aspect-10/13 aspect-square w-70 object-cover rounded-3xl"
        />
        <h1 className="text-4xl font-extrabold  text-sky-950">
          Federico Bellezza
        </h1>
        <p className="text-xl text-center  text-slate-500">
          Sono un giovane sviluppatore web che lavora come Full Stack Developer
        </p>
        <div className="flex gap-7 justify-center">
          <i
            onClick={() =>
              window.open("https://www.facebook.com/Federico.Bellezza.01")
            }
            className="fa-brands fa-square-facebook text-2xl cursor-pointer duration-300 ease-out hover:text-orange-500 hover:scale-150"
          />
          <i
            onClick={() =>
              window.open("https://www.instagram.com/federico.bellezza/")
            }
            className="fa-brands fa-instagram text-2xl cursor-pointer duration-300 ease-out hover:text-orange-500 hover:scale-150"
          />
        </div>
      </div>
    </div>
  );
}
