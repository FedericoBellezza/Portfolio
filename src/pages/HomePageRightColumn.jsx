import InfiniteScrollCarouselFront from "../components/InfiniteScrollCarouselFront";

export default function HomePageRightColumn() {
  return (
    <div className="animate-entryfromright flex flex-col gap-15 items-center xl:items-start lg:text-start text-center">
      <h1 className="text-5xl xl:text-8xl text-lime-300 font-extrabold">
        FULL STACK
        <br />
        <span className="text-developer text-5xl xl:text-8xl font-extrabold text-amber-50">
          Web Developer
        </span>
      </h1>

      <p className="text-sm md:text-lg xl:text-xl text-gray-400 text-wrap w-90/100 md:w-full">
        Ciao, sono <strong>Federico Bellezza</strong>, un web developer{" "}
        <strong>appassionato di tecnologia e innovazione. </strong>
        <br />
        <br />
        Dopo aver conseguito il diploma in elettronica e aver maturato
        esperienza in vari settori, ho deciso di seguire la mia vera passione
        per la programmazione, completando il corso di
        <strong> Boolean.</strong> <br />
        Fin da giovane, mi sono sempre occupato di risolvere problemi legati
        alla tecnologia. <br /> <br />
        Ora, come web developer, sono entusiasta di{" "}
        <strong>crescere professionalmente</strong>,{" "}
        <strong>esplorare nuove tecnologie</strong> e contribuire con il mio
        lavoro alla realizzazione di{" "}
        <strong>progetti stimolanti e innovativi.</strong>
      </p>
      {/* numbers section */}
      {/* <div className="flex gap-5 md:gap-20 w-full p-5">
        <div>
          <p className="text-5xl  md:text-7xl font-extrabold mb-5">+3</p>
          <p className="text-lg md:text-xl text-gray-400">
            ANNI DI
            <br />
            ESPERIENZA
          </p>
        </div>
        <div>
          <p className="text-5xl  md:text-7xl font-extrabold mb-5">+15</p>
          <p className="text-lg md:text-xl text-gray-400">
            PROGETTI
            <br />
            COMPLETATI
          </p>
        </div>
        <div>
          <p className="text-5xl  md:text-7xl font-extrabold mb-5">+7</p>
          <p className="text-lg md:text-xl text-gray-400">
            CLIENTI
            <br />
            SODDISFATTI
          </p>
        </div>
      </div> */}

      {/* section buttons */}
      <div className="flex xl:flex-row flex-col gap-10 ">
        {/* left button */}
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
        {/* right button */}
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
    </div>
  );
}
