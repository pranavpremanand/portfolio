import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { SpinnerContext } from "../Contexts/Context";

const Contact = ({ theme }) => {
  const { setSpinner } = useContext(SpinnerContext);
  const form = useRef();
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [err, setErr] = useState({
    nameErr: "",
    emailErr: "",
    subErr: "",
    msgErr: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSpinner();
      const response = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      if (response.text === "OK") {
        setSpinner();
        toast("Message Sent", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: theme === "dark" ? "#F3F4F6" : "#1F2937",
            color: theme === "dark" ? "#1F2937" : "#F3F4F6",
          },
        });
        e.target.reset();
      }
    } catch (err) {
      setSpinner();
      toast("Something went wrong", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: theme === "dark" ? "#F3F4F6" : "#1F2937",
          color: theme === "dark" ? "#1F2937" : "#F3F4F6",
        },
      });
    }
  };
  return (
    <div
      id="contact"
      className="md:mt-0 m-5 flex sm:m-10 sm:p-10 shadow-lg dark:shadow-slate-700 justify-around shadow-slate-300 drop-shadow-md rounded-lg bg-gray-100 dark:bg-gray-900 flex-wrap p-5 md:p-10 md:m-10"
    >
      <div className="w-full sm:w-5/12">
        <div className="">
          <h5 className="text-xl sm:text-2xl text-center md:text-3xl tracking-wider font-medium underline sm:text-start">
            Send Message
          </h5>
          <div className="mt-6">
            <form ref={form} id="form" onSubmit={handleSubmit}>
              <div className="w-full mb-5">
                <p className="bg-gray-100 dark:bg-gray-900 pt-0 pr-2 pb-0 pl-2 -mt-2 sm:-mt-3 mr-0 mb-0 ml-2 text-sm sm:text-md font-medium absolute">
                  Your name
                </p>
                <input
                  onChange={(e) => {
                    const nameReg =
                      /^[^-\s][a-zA-Z0-9_\s-]+$/;
                    if(e.target.value.length>1){
                      if(!nameReg.test(e.target.value)){
                        setErr({ ...err, nameErr: "Enter a valid name" })
                      }else{
                        setFormdata({ ...formData, name: e.target.value });
                        setErr({ ...err, nameErr: "" });
                      }
                    }else{
                      setErr({ ...err, nameErr: "Enter a valid name" });
                    }
                  }}
                  required
                  type="text"
                  name="name"
                  className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-gray-800 dark:focus:border-gray-50 p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-gray-100 dark:bg-gray-900
                  border-gray-300 rounded-md"
                />
                {err.nameErr && (
                  <small style={{ color: "red" }}>{err.nameErr}</small>
                )}
              </div>
              <div className="w-full mb-5">
                <p className="bg-gray-100 dark:bg-gray-900 pt-0 pr-2 pb-0 pl-2 -mt-2 sm:-mt-3 mr-0 mb-0 ml-2 text-sm sm:text-md font-medium absolute">
                  Your email
                </p>
                <input
                  onChange={(e) => {
                    const regEmail =
                    /^\S+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (
                      e.target.value.length > 0 &&
                      !regEmail.test(e.target.value)
                    ) {
                      setErr({
                        ...err,
                        emailErr: "Enter a valid email address",
                      });
                    } else {
                      let email=e.target.value.trim()
                      setFormdata({ ...formData, email:email });
                      setErr({ ...err, emailErr: "" });
                    }
                    if (e.target.value.length === 0) {
                      setErr({
                        ...err,
                        emailErr: "This field is required",
                      });
                    }
                  }}
                  type="email"
                  required
                  name="email"
                  className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-gray-800 dark:focus:border-gray-50 p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-gray-100 dark:bg-gray-900
                  border-gray-300 rounded-md"
                />
                {err.emailErr && (
                  <small style={{ color: "red" }}>{err.emailErr}</small>
                )}
              </div>
              <div className="w-full mb-5">
                <p className="bg-gray-100 dark:bg-gray-900 pt-0 pr-2 pb-0 pl-2 -mt-2 sm:-mt-3 mr-0 mb-0 ml-2 text-sm sm:text-md font-medium absolute">
                  Subject
                </p>
                <input
                  onChange={(e) => {
                    if (e.target.value.length === 0) {
                      setErr({ ...err, subErr: "This field is required" });
                    } else {
                      if(/^[^\s].*$/.test(e.target.value)){
                        setFormdata({ ...formData, subject: e.target.value });
                        setErr({ ...err, subErr: "" });
                      }else{
                        setErr({ ...err, subErr: "No spaces allowed at the beginning" });
                      }
                    }
                  }}
                  required
                  type="text"
                  name="subject"
                  className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-gray-800 dark:focus:border-gray-50 p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-gray-100 dark:bg-gray-900
                  border-gray-300 rounded-md"
                />
                {err.subErr && (
                  <small style={{ color: "red" }}>{err.subErr}</small>
                )}
              </div>
              <div className="w-full mb-5">
                <p className="bg-gray-100 dark:bg-gray-900 pt-0 pr-2 pb-0 pl-2 -mt-2 sm:-mt-3 mr-0 mb-0 ml-2 text-sm sm:text-md font-medium absolute">
                  Message
                </p>
                <textarea
                  onChange={(e) => {
                    if (e.target.value.length === 0) {
                      setErr({ ...err, msgErr: "This field is required" });
                    } else {
                      setFormdata({ ...formData, message: e.target.value });
                      setErr({ ...err, msgErr: "" });
                    }
                  }}
                  required
                  type="text"
                  name="message"
                  className="border w-full placeholder-gray-400 focus:outline-none
                  focus:border-gray-800 dark:focus:border-gray-50 p-3 mt-1 mr-0 mb-0 ml-0 text-base block bg-gray-100 dark:bg-gray-900
                  border-gray-300 rounded-md"
                />
                {err.msgErr && (
                  <small style={{ color: "red" }}>{err.msgErr}</small>
                )}
              </div>
              <button
                type="submit"
                className="rounded-full uppercase tracking-widest text-md sm:text-lg md:text-xl py-3.5 sm:py-4 w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-50 text-gray-50 font-medium dark:text-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full my-10 sm:my-0 sm:w-5/12">
        <h5 className="text-xl sm:text-2xl text-center tracking-wider md:text-3xl font-medium underline sm:text-start">
          Get in Touch
        </h5>
        <div className="mt-6 flex flex-col gap-4">
          <div className="hidden text-sm sm:text-lg sm:flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +91 9633063113
          </div>
          <div className="hidden text-sm sm:text-lg sm:flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            mpranavprem@gmail.com
          </div>
          <div className="flex sm:justify-start justify-center gap-5 sm:gap-3">
            <div>
              <a
                href="https://wa.me/+919633063113"
                className="flex items-center font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/pranavpremanand"
                className="flex items-center font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  style={{ color: "#0077b5" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/pranavpremanand"
                className="flex items-center font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  style={
                    theme === "dark" ? { color: "#fff" } : { color: "#333" }
                  }
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            <div>
              <a
                href="https://instagram.com/pranav_premanand"
                className="flex items-center font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            {/* <div>
              <a
                href="https://mailto:mpranavprem@gmail.com"
                className="flex items-center font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  style={{ color: "#ea4335" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
