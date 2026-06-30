import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../config/api.config";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [validateError, setValidateError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !registerData.fullName ||
      !registerData.email ||
      !registerData.phone ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      setValidateError("All fields are required");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setValidateError("Passwords do not match");
      return;
    }

    setValidateError("");

    const payload = {
      fullName: registerData.fullName,
      email: registerData.email.toLowerCase(),
      phone: registerData.phone,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword,
    };

    try {
      const res = await api.post("/auth/register", payload);

      alert(res.data.message || "Registration Successful");

      navigate("/");
    } catch (error) {
      console.error(error.response?.data?.message || error.message);

      alert(
        error.response.status + "|" + error.response?.data?.message ||
          error.message,
      );
    }
  };

  return (
    <div className="h-[90vh] grid-cols-2 p-20 bg-[url('https://cravings.ricr.in/foodTable.webp')] bg-cover">
      <div className="w-md bg-(--color-base-200) rounded-2xl shadow p-10 flex flex-col justify-center float-end">
        <h1 className="font-bold text-3xl text-(--color-primary) text-center">
          Create Account
        </h1>

        <p className="text-(--color-secondary) text-center">
          Join us as a Customer, Restaurant, or Rider
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 w-full mt-4">
            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <input
              type="text"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <input
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            {validateError && (
              <p className="text-red-500 text-sm">{validateError}</p>
            )}

            <div className="flex gap-1">
              <input type="checkbox" required />
              <span>I agree to the</span>
              <span className="text-(--color-primary) hover:underline">
                terms and conditions.
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-(--color-primary) text-white py-2 px-4 rounded hover:scale-95 w-full font-medium"
          >
            Register
          </button>

          <div className="text-center mt-2 flex justify-center gap-1">
            <p className="text-(--color-secondary)">Already registered?</p>

            <Link
              to="/login"
              className="text-(--color-primary) hover:underline"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
