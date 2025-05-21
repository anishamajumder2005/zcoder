import React from 'react';

function Signup() {
  return (
    <div className="w-full max-w-md mt-10 p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Signup for ZCoder</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border border-gray-300 dark:border-gray-600 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 dark:border-gray-600 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 dark:border-gray-600 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
