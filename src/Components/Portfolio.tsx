import React from "react";

const Portfolio = () => {
  const users = [
    { id: 1, name: "Nidhi Bhide", email: "nidhi@example.com", role: "Admin" },
    { id: 2, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 3, name: "Alice Smith", email: "alice@example.com", role: "Editor" },
  ];

  return (
    <div className="py-12 px-5  w-full  h-full">
      <h1 className="text-2xl font-bold text-center mb-4">My Portfolio</h1>
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {users.map((user, index) => (
            <tr
              key={user.id}
              className="border-t border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Portfolio;
