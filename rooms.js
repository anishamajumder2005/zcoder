import React from 'react';

const Rooms = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Interactive Room</h2>
      <div className="bg-gray-800 p-4 rounded-md">
        <div className="mb-4">
          <p><strong>Room Name:</strong> DSA Discuss</p>
        </div>
        <div className="bg-black p-2 h-60 overflow-y-scroll mb-2 rounded">
          <p>User1: Let's solve today's graph problem!</p>
          <p>User2: Sure, starting now...</p>
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 rounded bg-gray-900"
        />
      </div>
    </div>
  );
};

export default Rooms;
