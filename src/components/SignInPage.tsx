import React from "react";

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md lg:max-w-4xl flex flex-col lg:flex-row relative overflow-hidden">
        {/* Left Content */}
        <div className="hidden lg:flex flex-col justify-center p-8 w-1/2 bg-gray-50 relative">
          {/* First container */}
          <div className="flex flex-col space-y-4">
            {/* Title and Badge */}
            <div className="relative flex flex-col bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold text-center mb-2">
                AI to Detect & Autofix Bad Code
              </h2>
              <ul className="text-gray-600 space-y-1 text-center">
                <li>✅ 30+ Language Support</li>
                <li>✅ 10K+ Developers</li>
                <li>✅ 100K+ Hours Saved</li>
              </ul>
              {/* Floating Stats - Positioned Bottom Right */}
              <div className="absolute bottom-1 right-1 bg-gray-50 shadow-md rounded-lg p-4">
                <p className="text-sm text-gray-500">Issues Fixed</p>
                <p className="text-2xl font-bold">500K+</p>
                <p className="text-sm text-green-500">📈 14% This Week</p>
              </div>
            </div>
          </div>

          {/* Background Graphic */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-200 rounded-tl-full">
            {/* Add SVG or wave graphic here if needed */}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center p-6 w-full lg:w-1/2">
          <div className="text-center mb-8">
            <img
              src="/codeant-logo.svg" // Replace with the actual logo URL
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
              <img
                src="/github-icon.svg" // Replace with GitHub icon URL
                alt="GitHub"
                className="h-5 mr-2"
              />
              Sign in with GitHub
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <img
                src="/bitbucket-icon.svg" // Replace with Bitbucket icon URL
                alt="Bitbucket"
                className="h-5 mr-2"
              />
              Sign in with Bitbucket
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <img
                src="/azure-icon.svg" // Replace with Azure DevOps icon URL
                alt="Azure DevOps"
                className="h-5 mr-2"
              />
              Sign in with Azure DevOps
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <img
                src="/gitlab-icon.svg" // Replace with GitLab icon URL
                alt="GitLab"
                className="h-5 mr-2"
              />
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
