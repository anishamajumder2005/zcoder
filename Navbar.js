import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="text-2xl font-bold text-blue-600 dark:text-white">
        <Link to="/">ZCoder</Link>
      </div>

      <ul className="flex gap-6 text-gray-800 dark:text-gray-100 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/problems">Problems</Link></li>
        <li><Link to="/editor">Editor</Link></li>
        <li><Link to="/room">Room</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      <button onClick={toggleDarkMode} className="text-gray-600 dark:text-white">
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
