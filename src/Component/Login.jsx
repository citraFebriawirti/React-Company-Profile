import React from "react";

export default function Login() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-200 to-teal-800">
        <div className="bg-white w-80 p-8 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Log in
            </button>
          </form>
          <p className="text-gray-700 mt-4">
            Sudah punya akun?{" "}
            <a href="/register" className="text-teal-500 font-medium">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
