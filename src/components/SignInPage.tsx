import React from "react";
import { FcPieChart, FcUp } from "react-icons/fc";
import { FaGithub, FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaGitlab } from "react-icons/fa";
import Logo from "../assets/CodeAnt.png";

// Helper function for typing icons
type IconProps = React.ComponentProps<"svg">;

const PieChartIcon: React.FC<IconProps> = (props) => <FcPieChart {...props} />;
const UpIcon: React.FC<IconProps> = (props) => <FcUp {...props} />;
const GithubIcon: React.FC<IconProps> = (props) => <FaGithub {...props} />;
const BitbucketIcon: React.FC<IconProps> = (props) => <FaBitbucket {...props} />;
const AzureDevopsIcon: React.FC<IconProps> = (props) => <VscAzureDevops {...props} />;
const GitlabIcon: React.FC<IconProps> = (props) => <FaGitlab {...props} />;

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md lg:max-w-4xl flex flex-col lg:flex-row relative overflow-hidden">
        {/* Left Content */}
        <div className="hidden lg:flex flex-col justify-center p-4 w-1/2 bg-white relative">
          <div className="flex flex-col space-y-4">
            <div className="relative flex flex-col bg-white shadow-lg rounded-lg p-6 pb-20">
              <img
                src={Logo}
                alt="CodeAnt AI Logo"
                className="absolute h-13 left-0 bottom-0 bg-blend-overlay z-0"
              />
              <div className="flex items-center mb-2 z-10">
                <img src={Logo} alt="CodeAnt AI Logo" className="h-12 mr-2" />
                <h2 className="text-sm text-gray-600 font-bold">
                  AI to Detect & Autofix Bad Code
                </h2>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <ul className="grid grid-cols-3 gap-4 text-gray-600 border border-gray-300 p-4 rounded-lg bg-gray-50 shadow-md z-10 relative">
                <li className="flex flex-col items-center">
                  <b className="text-lg text-gray-800">30+</b>
                  <span className="text-xs">Language Support</span>
                </li>
                <li className="flex flex-col items-center">
                  <b className="text-lg text-gray-800">10K+</b>
                  <span className="text-xs">Developers</span>
                </li>
                <li className="flex flex-col items-center">
                  <b className="text-lg text-gray-800">100K+</b>
                  <span className="text-xs">Hours Saved</span>
                </li>
              </ul>
              <div className="relative bottom-4 left-40 mb-1" style={{ width: "220px" }}>
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-lg"></div>
                <div className="relative flex flex-col justify-between items-start bg-gray-50 shadow-md rounded-lg p-6 z-10">
                  <PieChartIcon className="text-3xl" />
                  <p className="text-sm text-gray-500">Issues Fixed</p>
                  <p className="text-2xl font-bold">500K+</p>
                  <p className="text-sm flex font-bold items-end text-blue-700 absolute right-0 top-5">
                    <UpIcon className="text-lg" /> 14%
                  </p>
                  <span className="absolute right-0 top-10 text-sm text-gray-500">
                    This Week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex flex-col justify-center p-6 w-full lg:w-1/2">
          <div className="flex items-center justify-center mb-8 space-x-1">
            <img src={Logo} alt="CodeAnt AI Logo" className="h-12" />
            <h1 className="text-sm text-gray-500 font-bold">CodeAnt AI</h1>
          </div>
          <h1 className="text-xl text-center font-semibold mt-2">
            Welcome to CodeAnt AI
          </h1>
          <div className="flex space-x-2 mb-4 justify-center mt-6">
            <button className="px-4 py-2 bg-blue-600 w-1/2 text-gray-200 font-bold rounded-lg hover:bg-blue-700">
              SAAS
            </button>
            <button className="px-4 py-2 bg-gray-200 w-1/2 text-gray-500 font-bold rounded-lg hover:bg-gray-300">
              Self Hosted
            </button>
          </div>
          <div className="space-y-4">
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <GithubIcon className="h-5 mr-2" />
              Sign in with GitHub
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <BitbucketIcon className="h-5 mr-2" />
              Sign in with Bitbucket
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <AzureDevopsIcon className="h-5 mr-2" />
              Sign in with Azure DevOps
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <GitlabIcon className="h-5 mr-2" />
              Sign in with GitLab
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-4 text-center">
            By signing up you agree to the <span className="font-bold">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
