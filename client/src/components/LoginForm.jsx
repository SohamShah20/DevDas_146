import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signInStart,
  signInSuccess,
  signInFailure,
  setiscust,
} from "../redux/user/userSlice";

const LoginForm = () => {
  const { loading, error, iscust } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    iscust: true,
  });
  const[showToastAfterLogin, setShowToastAfterLogin]=useState(false);

  const changeHandler = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    formData.iscust = iscust;

    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // Check for a successful response
      if (data.success === false) {
        

        // Conditionally show relevant toasts based on the error message
          toast.error("An error occurred. Please try again.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            className: "toast-custom",
          });
      
        dispatch(signInFailure(data.message));
        return;
      }

      // Dispatch success action and navigate to dashboard
      dispatch(signInSuccess(data));
      localStorage.setItem("showToastAfterLogin", "true");
      navigate("/");
    } catch (error) {
      // Additional catch block for network errors or unexpected responses
      let errorMessage = error.message.toLowerCase();
      if (errorMessage.includes("user not found")) {
        toast.error("User not found", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          className: "toast-custom",
        });
      } else if (errorMessage.includes("wrong credentials")) {
        toast.error("Wrong credentials", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          className: "toast-custom",
        });
      }
      dispatch(signInFailure(error.message));
    }
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-green-100 to-white">
      <ToastContainer />
  
      <div className="bg-white w-full max-w-md p-4 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 hover:border-black transition-transform duration-200 ease-in-out">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Sign in to your account
        </h2>
        <form onSubmit={submitHandler} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-150"
            />
          </div>
  
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={changeHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-150"
            />
          </div>
  
          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:outline-none transition duration-150"
              onClick={() => {
                dispatch(setiscust(true));
              }}
            >
              {loading ? "Loading..." : "Sign In as Customer"}
            </button>
  
            <button
              type="submit"
              disabled={loading}
              className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 focus:outline-none transition duration-150"
              onClick={() => {
                dispatch(setiscust(false));
              }}
            >
              {loading ? "Loading..." : "Sign In as Dealer"}
            </button>
          </div>
        </form>
  
        <div className="flex justify-between mt-6 text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
          <Link
            to="/forgot-password"
            className="text-blue-500 font-semibold hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
  
};

export default LoginForm;
