import React, { useEffect, useState } from "react";
import { useInput } from "../../Hooks/useInput";
import { FcGoogle } from "react-icons/fc";
import { auth, signIn } from "../../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/usersReducer";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, emailAtrr] = useInput("");
  const [password, passwordAtrr] = useInput("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signIn();
      const user = {
        email: result.user.email,
        photoURL: result.user.photoURL,
        emailVerified: result.user.emailVerified,
        displayName: result.user.displayName,
      };
      dispatch(setUser(user));
      localStorage.setItem("isSignedIn", true);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  const signUpWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        email: result.user.email,
        photoURL: result.user.photoURL,
        emailVerified: result.user.emailVerified,
        displayName: result.user.displayName,
      };
      dispatch(setUser(user));
      localStorage.setItem("isSigned", true);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="min-h-[calc(100vh-70px)] flex items-center justify-center flex-col space-y-3">
      <div
        onClick={signInWithGoogle}
        className="bg-white flex cursor-pointer items-center justify-center space-x-1 w-1/2 py-2 rounded-lg font-semibold"
      >
        <FcGoogle className="w-6 h-6" /> <h1> Sign in with Google</h1>
      </div>
      <form
        className="flex items-center flex-col w-full space-y-2"
        onSubmit={signUpWithEmailAndPassword}
      >
        <input
          type="email"
          {...emailAtrr}
          placeholder="Email address"
          required
          className="input-field"
        />
        <input
          type="password"
          {...passwordAtrr}
          placeholder="Set Password"
          required
          className="input-field"
        />
        <input
          type="submit"
          className="w-1/2 text-center bg-red-500 text-black font-semibold py-1 rounded"
          value="Sign up"
        />
      </form>
    </div>
  );
};

export default SignUp;
