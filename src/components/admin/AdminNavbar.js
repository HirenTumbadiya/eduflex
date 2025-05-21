import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">Admin Dashboard</div>
            <ul className="flex space-x-4">
                <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          </li>
          <li>
                <Link to="/users" className="text-gray-600 hover:text-gray-900">Users</Link>
          </li>
          <li>
                <Link to="/workshops" className="text-gray-600 hover:text-gray-900">Workshops</Link>
          </li>
          <li>
                <Link to="/blogposts" className="text-gray-600 hover:text-gray-900">Blog Posts</Link>
          </li>
        </ul>
  </nav>
  )
}

export default AdminNavbar
