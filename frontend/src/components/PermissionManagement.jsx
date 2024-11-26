import React, { useState, useEffect } from "react";
import axios from "axios";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/permissions").then((response) => {
      setPermissions(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Permission Management</h2>
      <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Permission Name</th>
            <th className="border border-gray-300 px-4 py-2">Module</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((perm) => (
            <tr key={perm._id}>
              <td className="border border-gray-300 px-4 py-2">{perm.name}</td>
              <td className="border border-gray-300 px-4 py-2">{perm.module}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionManagement;
