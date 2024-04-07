import React, { useRef, useState } from "react";
import { validate } from "../utils/validate";

const Form = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClicked = () => {
    // validate form data
    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    console.log(message);
  };

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClicked();
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="w-2/6 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        {errorMessage && <p className="text-red-600">{errorMessage.message}</p>}
        <button
          className="p-4 my-6 bg-[#e50914] w-full rounded-lg font-bold cursor-pointer"
          type="submit"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex py-4 ">
          <p className="mx-1 opacity-70">
            {signIn ? "New to Netflix?" : "Already a User?"}
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              console.log("Sign Up Now");
              toggleSignInForm();
            }}
          >
            {" "}
            {signIn ? "Sign Up" : "Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
