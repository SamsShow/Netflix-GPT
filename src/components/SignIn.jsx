import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth"; // Add import statement
import { auth } from "../utils/firebase";
// import { useDispatch } from "react-redux";
// import { addUser } from "../../utils/store/userSlice";

const Form = () => {
  // const dispatch = useDispatch();
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const changeForm = () => {
    setIsSignUpForm(!isSignUpForm);
    setError(false);
  };

  const [error, setError] = useState(false);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [validationObj, setValidationObj] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    const [validationObjTemp, status] = checkValidation(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setValidationObj(validationObjTemp);
    console.log(validationObj);

    // if status is false then stop function
    if (!status) return;

    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name?.current?.value,
          }).then(() => {
            const { uid, displayName, email } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                displayName: displayName,
                email: email,
              })
            );
          });
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode === "auth/email-already-in-use") {
            setError("User with this email is already exist !");
          }
        });
    } else {
      // signInWithEmailAndPassword(auth, email.current.value, password.current.value,)
      //     .then((userCredential) => {
      //         // Signed in
      //         // ...
      //     })
      //     .catch((error) => {
      //         const errorCode = error.code;
      //         if (errorCode === "auth/invalid-login-credentials") {
      //             setError("Invalid email or password");
      //         }
      //     });
    }
  };

  return (
    <div className="">
      <form
        onSubmit={validateForm}
        className="w-2/6 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUpForm && (
          <input
            ref={name}
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
        {error && <p className="text-red-600">{error}</p>}
        <button
          className="p-4 my-6 bg-[#e50914] w-full rounded-lg font-bold cursor-pointer"
          type="submit"
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <div className="flex py-4 ">
          <p className="mx-1 opacity-70">
            {isSignUpForm ? "Already a User?" : "New to Netflix?"}
          </p>
          <p className="cursor-pointer" onClick={changeForm}>
            {" "}
            {isSignUpForm ? "Sign In" : "Sign Up"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
