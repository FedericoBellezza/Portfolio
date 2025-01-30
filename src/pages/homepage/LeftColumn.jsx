export default function LeftColumn() {
  return (
    <div className=" flex-1">
      {/* profile card */}
      <div className="sticky top-10 mx-20 p-5 w-100 bg-white rounded-3xl flex flex-col items-center text-sky-950 hover:scale-105 duration-300 ease-in-out">
        <img
          src="/src/assets/img/ss-01.jpg    "
          alt=""
          className="my-5  h-70 w-60 object-cover rounded-3xl"
        />
        <h1 className="text-4xl font-extrabold mb-10">Federico Bellezza</h1>
        <p className="text-xl text-center  text-slate-500 ">
          Sono un giovane sviluppatore web che lavora come front-end developer
        </p>

        <div className="flex gap-1 mt-10 justify-center">
          <i className="fa-brands fa-facebook text-2xl p-5 duration-300 ease-out hover:text-orange-500 hover:scale-150 " />
          <i className="fa-brands fa-linkedin text-2xl p-5 duration-300 ease-out hover:text-orange-500 hover:scale-150" />
          <i className="fa-brands fa-instagram text-2xl p-5 duration-300 ease-out hover:text-orange-500 hover:scale-150" />
          <i className="fa-brands fa-github text-2xl p-5 duration-300 ease-out hover:text-orange-500 hover:scale-150" />
        </div>
      </div>
    </div>
  );
}
