import React from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaRobot,
  FaBook,
  FaChartPie,
  FaDropbox,
  FaChartLine,
  FaBullseye,
  FaRetweet,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-700 text-white rounded-md lg:hidden"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out bg-black text-white w-64 p-6 lg:w-72 lg:static lg:translate-x-0 lg:overflow-y-auto lg:h-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="text-lg lg:text-xl font-semibold mb-6 flex justify-between items-center">
          <img src={"/full-logo.png"} alt="logo" className="h-20" />
          <FaBars className="lg:hidden cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2 text-base">
          <Link
            to="/dashboard"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaTachometerAlt className="mr-2 lg:mr-3" /> Dashboard
          </Link>
          <Link
            to="/chatbot"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaRobot className="mr-2 lg:mr-3" /> Chatbot
          </Link>
          <Link
            to="/financial-literacy"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaBook className="mr-2 lg:mr-3" /> Financial Literacy
          </Link>
          <Link
            to="/budget-tracking"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaChartPie className="mr-2 lg:mr-3" /> Budget Tracking
          </Link>
          <Link
            to="/document-dropbox"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaDropbox className="mr-2 lg:mr-3" /> Document DropBox
          </Link>
          <Link
            to="/investment"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaChartLine className="mr-2 lg:mr-3" /> Investment Portfolio
          </Link>
          <Link
            to="/goal-setting"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaBullseye className="mr-2 lg:mr-3" /> Goal Setting
          </Link>
          <Link
            to="/retirement"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaRetweet className="mr-2 lg:mr-3" /> Retirement
          </Link>
          <Link
            to="/profile-settings"
            onClick={toggleSidebar}
            className="block flex items-center p-2 rounded-lg hover:bg-gray-400"
          >
            <FaUserCog className="mr-2 lg:mr-3" /> Profile Settings
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="mt-4 lg:mt-6">
          <button
            className="w-full text-left flex items-center p-2 rounded-lg hover:bg-gray-400"
            onClick={toggleSidebar}
          >
            <FaSignOutAlt className="mr-2 lg:mr-3" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
