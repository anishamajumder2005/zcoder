import React from 'react';

const Problems = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>
      <div className="grid gap-4">
        {["Two Sum", "Reverse String", "Flood Fill"].map((problem, i) => (
          <div key={i} className="bg-gray-700 p-4 rounded-md">
            <h3 className="text-lg font-semibold">{problem}</h3>
            <button className="mt-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded">
              Solve
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problems;
