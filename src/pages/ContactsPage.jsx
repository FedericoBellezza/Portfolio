// import email
import emailjs from "emailjs-com";

export default function ContactsPage() {
  // send email function
  const sendEmail = (e) => {
    e.preventDefault();
    console.log({
      name: e.target.from_name.value,
      email: e.target.from_email.value,
      object: e.target.object.value,
      message: e.target.message.value,
    });
    emailjs
      .sendForm(
        "service_n4qr5hq",
        "template_gdpzsbm",
        e.target,
        "I5U0ciuEcNnc8z7_k"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="bg-slate-900  text-amber-50 pt-25 min-h-screen">
      <div className="container px-10   mx-auto flex flex-col xl:flex-row mt-25  justify-evenly items-center xl:items-start">
        <h1 className="lg:text-7xl text-5xl text-center font-extrabold animate-entryfromleft mb-10">
          Contattami
        </h1>
        <div className="animate-entryfromright  max-w-xl">
          <form onSubmit={sendEmail} className=" space-y-4 w-full">
            <input
              required
              type="text"
              name="from_name"
              placeholder="Nome"
              className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border rounded-lg  text-sm outline-none transition-all"
            />
            <input
              required
              type="email"
              name="from_email"
              placeholder="Email"
              className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border rounded-lg text-sm outline-none transition-all"
            />
            <input
              required
              type="text"
              placeholder="Oggetto"
              name="object"
              className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border rounded-lg text-sm outline-none transition-all"
            />
            <textarea
              required
              placeholder="Messaggio"
              rows="4"
              name="message"
              className="w-full px-4 text-gray-800 bg-gray-100 border rounded-lg text-sm pt-3 outline-none transition-all"
            ></textarea>
            <button
              type="submit"
              className="text-white font-bold cursor-pointer bg-slate-700 hover:bg-lime-300 hover:text-slate-800 rounded-lg tracking-wide text-sm px-4 py-2.5 w-full transition-all ease-in duration-100"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <p className="text-lg text-gray-400 mt-25  text-center">
        Oppure scrivimi alla email:{" "}
        <strong>federico.bellezza2001@gmail.com</strong>
      </p>
    </div>
  );
}
