import React, { useState } from "react";

const Form = () => {
  const [signIn, isSignIn] = useState(true);

  const toggleSignInForm = () => {
    isSignIn(!signIn);
  };

  return (
    <div className="">
      <form className="w-2/6 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-70 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-70 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-70 rounded-md"
        />
        <button className="p-4 my-6 bg-[#e50914] w-full rounded-lg font-bold cursor-pointer">
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
