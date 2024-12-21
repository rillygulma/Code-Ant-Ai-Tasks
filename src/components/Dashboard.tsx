import { useState } from "react";
import {
  FaDatabase,
  FaCloud,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
  FaSync,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { FaCode } from "react-icons/fa6";

import Logo from "../assets/CodeAnt.png";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header for Small Devices */}
      <div className="p-4 flex justify-between items-center lg:hidden bg-white border ">
        {isSidebarOpen ? null : (
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-lg font-bold ml-2 text-gray-700">CodeAnt AI</span>
          </div>
        )}
        <button
          className="text-gray-700 text-2xl"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 p-4 relative">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen
              ? "absolute top-0 left-0 w-full z-50 bg-white lg:static lg:w-auto"
              : "hidden lg:block"
          } lg:col-span-1 bg-white text-black p-4 rounded-md border border-gray-200`}
        >
          {/* Logo */}
          <div className="flex mb-4 lg:hidden">
            <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-bold mt-2 text-gray-700">CodeAnt AI</span>
          </div>

          {/* User Selection Dropdown */}
          <select
            className="w-full p-2 text-lg text-gray-500 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            defaultValue="UkTarshDhaiyaPanwar"
          >
            <option value="UkTarshDhaiyaPanwar">UkTarshDhaiyaPanwar</option>
            <option value="JohnDoe">John Doe</option>
            <option value="JaneSmith">Jane Smith</option>
          </select>

          {/* Navigation */}
          <nav className="mt-6 space-y-4">
            {[
              { icon: TiHomeOutline, label: "Repositories" },
              { icon: FaCode, label: "AI Code Review" },
              { icon: FaCloud, label: "Cloud Security" },
              { icon: FaQuestionCircle, label: "How to Use" },
              { icon: FaCog, label: "Settings" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 text-gray-500 text-xl hover:bg-blue-500 hover:text-white transition-colors p-2 rounded-md w-2/3"
              >
                <item.icon />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Support and Logout */}
          <div className="mt-20">
            <button className="flex items-center space-x-2 text-xl text-gray-500 hover:bg-blue-500 hover:text-white transition-colors p-2 rounded-md w-2/3">
              <IoIosCall />
              <span>Support</span>
            </button>
            <button className="flex items-center space-x-2 text-xl text-gray-500 mt-2 hover:bg-blue-500 hover:text-white transition-colors p-2 rounded-md w-2/3">
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Section */}
        <main className="lg:col-span-3 bg-white p-6 rounded-md">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-xl text-gray-700 font-bold">Repositories</h2>
              <p className="text-sm text-gray-500">33 total repositories</p>
          </div>
            <div className="flex space-x-3">
              <button className="flex items-center bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded-md">
                <FaSync className="mr-2" />
                Refresh All
              </button>
              <button className="flex items-center bg-blue-500 text-sm text-white px-4 py-2 rounded-md">
                <FaPlus className="mr-2" />
                Add Repository
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="my-4 relative">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          {/* Repository List */}
          <ul className="space-y-4">
            {[
              { name: "design-system", type: "Public", size: "7320 KB", lang: "React", updated: "1 day ago" },
              { name: "codeant-ci-app", type: "Private", size: "5871 KB", lang: "JavaScript", updated: "2 days ago" },
              { name: "analytics-dashboard", type: "Private", size: "4521 KB", lang: "Python", updated: "5 days ago" },
              { name: "mobile-app", type: "Public", size: "3096 KB", lang: "Swift", updated: "3 days ago" },
              { name: "e-commerce-platform", type: "Private", size: "6210 KB", lang: "Java", updated: "6 days ago" },
            ].map((repo, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 p-4 border border-gray-0 rounded-md flex-wrap gap-4 hover:bg-gray-200 transition-colors"
              >
                <div>
                  <h3 className="text-2xl text-gray-800 mb-2">
                    {repo.name}{" "}
                    <span className="text-xl text-blue-500 px-2 py-1 bg-green-100 border border-green-300 rounded-2xl">
                      {repo.type}
                    </span>
                  </h3>
                  <div className="text-xl text-gray-500 flex items-center space-x-4 flex-nowrap">
                    <span className="flex items-center space-x-2">
                      <span>{repo.lang}</span>
                      <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <FaDatabase className="text-gray-500" />
                      <span>{repo.size}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      Updated {repo.updated}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
