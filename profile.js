import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="bg-gray-800 p-4 rounded-md">
        <p><strong>Username:</strong> Anisha</p>
        <p><strong>Email:</strong> anishamajumder1302@gmail.com</p>
        <h3 className="mt-4 font-semibold">Bookmarked Problems</h3>
        <ul className="list-disc ml-6">
          <li>Two Sum</li>
          <li>Graph Traversal</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
