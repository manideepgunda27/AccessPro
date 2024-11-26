import React, { useState, useEffect } from "react";
import axios from "axios";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/roles").then((response) => {
      setRoles(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Role Management</h2>
      <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Role Name</th>
            <th className="border border-gray-300 px-4 py-2">Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role._id}>
              <td className="border border-gray-300 px-4 py-2">{role.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {role.permissions.map((perm) => perm.name).join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
