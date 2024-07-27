import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleLogin = (e) => {
    const defaultEmail = "user@lifequest.com";
    const defaultPassword = "user123";

    if (email === defaultEmail && password === defaultPassword) {
        navigate('/life-quest');
    } else {
      alert("Invalid email or password");
    }
  };

  const peekPassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign in to your account
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray mt-1 w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lightblack"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={inputType}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray mt-1 w-full px-4 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-lightblack"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-3 cursor-pointer hover:fill-lavender"
                viewBox="0 0 128 128"
                onClick={peekPassword}
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-end mb-6">
            <a href="" className="text-lavender hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="button"
            className="w-full bg-lavender text-lightblack py-2 rounded-lg hover:ring-2 hover:ring-lavender hover:border-lightblack focus:outline-none"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <div className="my-6 flex items-center justify-center">
            <span className="h-px w-24 bg-lavender"></span>
            <span className="px-4 text-white">Or continue with</span>
            <span className="h-px w-24 bg-lavender"></span>
          </div>
          <div className="flex justify-center">
            <button className="bg-white border border-gray-300 text-lightblack font-semibold py-2 px-4 rounded-lg mr-2 flex items-center">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Google
            </button>
            <button className="bg-white border border-gray-300 text-lightblack font-semibold py-2 px-4 rounded-lg flex items-center">
              <img
                src="https://www.svgrepo.com/show/475633/apple-color.svg"
                alt="Apple"
                className="h-5 w-5 mr-2"
              />
              Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
