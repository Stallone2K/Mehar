import { useState } from "react";
import FadeIn from "./FadeIn";

function ContactForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
  };

  return (
    <FadeIn>
      <div className="bg-[#f2f2f2] flex justify-center items-center min-h-[100vh]">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 md:p-8 lg:p-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us.</h2>
          <p className="font-semibold text-lg md:text-xl mb-6">
            Let's Connect - Drop Us A Line
            <span className="text-red-600"> _________.</span>
          </p>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-400 text-lg font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="surname"
              className="block text-gray-400 text-lg font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="surname"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-400 text-lg font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-400 text-lg font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-400 text-lg font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-24"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
    </FadeIn>
  );
}

export default ContactForm;
