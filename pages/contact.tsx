import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { serviceKey, publicKey } from "../keys";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const clearError = (e: React.FocusEvent) => {
    const closestError = e.target.nextSibling as HTMLElement;
    const formButton = document.querySelector(".form-submit") as HTMLElement;
    closestError.textContent = "";
    formButton.textContent = "Submit";
  };

  const handleFormSubmit = async (e: React.FocusEvent) => {
    e.preventDefault();
    const nameError = document.querySelector("#nameHelp") as HTMLElement;
    const emailError = document.querySelector("#emailHelp") as HTMLElement;
    const messageError = document.querySelector("#messageHelp") as HTMLElement;
    const formButton = document.querySelector(".form-submit") as HTMLElement;

    if (name.current!.value === "") {
      nameError.textContent = "Please fill out a name!";
      return;
    }
    if (email.current!.value === "") {
      emailError.textContent = "Please fill out an email!";
      return;
    }
    if (message.current!.value === "") {
      messageError.textContent = "Please fill out a message!";
      return;
    }

    const emailSent = await emailjs.sendForm(
      serviceKey,
      "template_upsya8q",
      form.current!,
      publicKey
    );

    if (emailSent.status === 200) {
      formButton.textContent = "Sent!";
      form.current!.reset();
    } else {
      formButton.textContent = "Something went wrong!";
      form.current!.reset();
    }
  };
  return (
    <div className="mt-14 md:mt-28 flex flex-col mr-0 lg:mr-40 2xl:mr-60 w-11/12 lg:w-5/12 animateMap">
       <h2 className="md:hidden text-4xl font-bold text-center mt-10 mb-16 h-[16px] animateTitle">
          Contact
        </h2>
      <form
        className="flex flex-col w-full font-extralight"
        id="contact-form"
        name="contact-form"
        onSubmit={(e) => handleFormSubmit}
        ref={form}
      >
        <div className="form-group flex flex-col mb-4">
          <label className="text-lg mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control text-xl px-2 py-2"
            id="name"
            aria-describedby="nameHelp"
            name="name"
            ref={name}
            onFocus={clearError}
          />
          <small id="nameHelp" className="error text-red-500 mt-2"></small>
        </div>
        <div className="form-group flex flex-col mb-4">
          <label className="text-lg mb-2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control text-xl px-2 py-2"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            ref={email}
            onFocus={clearError}
          />
          <small id="emailHelp" className="error text-red-500 mt-2"></small>
        </div>
        <div className="form-group flex flex-col">
          <label className="text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control text-xl px-2 py-2"
            id="message"
            aria-describedby="messageHelp"
            name="message"
            ref={message}
            onFocus={clearError}
          />
          <small id="messageHelp" className="error text-red-500 mt-2"></small>
        </div>
        <button
          type="submit"
          className="w-full form-submit border border-1 py-3 mt-6 text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
