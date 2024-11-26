import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">RBAC Admin Dashboard</h1>
          <nav className="flex gap-4 mt-2">
            <a href="/users" className="text-blue-500 hover:underline">Manage Users</a>
            <a href="/roles" className="text-blue-500 hover:underline">Manage Roles</a>
            <a href="/permissions" className="text-blue-500 hover:underline">Manage Permissions</a>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
