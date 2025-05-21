import React from 'react';
import AdminNavbar from './AdminNavbar';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <AdminNavbar />
      </header>

      <main className="container mx-auto px-4 py-8">
      </main>
    </div>
  );
}

export default AdminDashboard;
