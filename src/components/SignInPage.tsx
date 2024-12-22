import { FcPieChart } from "react-icons/fc";
import { FcUp } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa6";
import Logo from "../assets/CodeAnt.png"
const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md lg:max-w-4xl flex flex-col lg:flex-row relative overflow-hidden">
        {/* Left Content */}
        <div className="hidden lg:flex flex-col justify-center p-8 w-1/2 bg-gray-50 relative">
          {/* First Container */}
          <div className="flex flex-col space-y-4">
            {/* Title and Badge */}
            <div className="relative flex flex-col bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-2">
                <img
                  src={Logo} // Replace with the actual logo URL
                  alt="CodeAnt AI Logo"
                  className="h-12 mr-2"
                />
                <h2 className="text-xl font-bold">AI to Detect & Autofix Bad Code</h2>
              </div>
              {/* Line Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              <ul className="flex text-gray-600 gap-3 space-x-3">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500"></span>30+ 
                  <br/>
                  Language Support
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500"></span>10K+ 
                  <br/>
                  Developers
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500"></span>100K+ 
                  <br/>
                  Hours Saved
                </li>
              </ul>
              {/* Overlapping */}
              <div className="relative mt-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg"></div>
                <div className="relative flex flex-col justify-between items-start bg-gray-50 shadow-md rounded-lg p-10 z-15">
                  <FcPieChart />
                  <p className="text-sm text-gray-500">Issues Fixed</p>
                  <p className="text-2xl font-bold">500K+</p>
                  <p className="text-sm flex items-end text-green-500 absolute right-0 top-10">
                    <FcUp /> 14%
                  </p>
                  <span className="absolute right-0 top-16 text-sm text-gray-500">
                    This Week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center p-6 w-full lg:w-1/2">
          <div className="text-center mb-8">
            <img
              src={Logo} // Replace with the actual logo URL
              alt="CodeAnt AI Logo"
              className="h-12 mx-auto"
            />
            <h1 className="text-2xl font-bold mt-4">Welcome to CodeAnt AI</h1>
          </div>

          {/* Switcher Buttons */}
          <div className="flex space-x-2 mb-4 justify-center">
            <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              SAAS
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300">
              Self Hosted
            </button>
          </div>

          {/* Login Buttons */}
          <div className="space-y-4">
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
            <FaGithub className="h-5 mr-2" />
              Sign in with GitHub
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
            <FaBitbucket className="h-5 mr-2" />
              Sign in with Bitbucket
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
            <VscAzureDevops className="h-5 mr-2" />
              Sign in with Azure DevOps
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
            <FaGitlab className="h-5 mr-2" />
              Sign in with GitLab
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By signing up you agree to the <span className="underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
