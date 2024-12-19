import React from "react";

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md lg:max-w-4xl flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="hidden lg:flex flex-col justify-center items-start p-8 w-1/2 bg-gray-50 rounded-l-lg">
          <h2 className="text-xl font-bold mb-4">AI to Detect & Autofix Bad Code</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✅ 30+ Language Support</li>
            <li>✅ 10K+ Developers</li>
            <li>✅ 100K+ Hours Saved</li>
          </ul>
          <div className="mt-6 text-center">
            <div className="bg-indigo-100 text-indigo-600 py-2 px-4 rounded-lg inline-block">
              <p className="text-sm">Issues Fixed</p>
              <p className="text-lg font-bold">500K+</p>
              <p className="text-xs">📈 14% This Week</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-center p-6 w-full lg:w-1/2">
          <div className="text-center mb-8">
            <img
              src="/codeant-logo.svg" // Replace with the actual logo URL
              alt="CodeAnt AI Logo"
              className="h-12 mx-auto"
            />
            <h1 className="text-2xl font-bold mt-4">Welcome to CodeAnt AI</h1>
          </div>

          <div className="flex space-x-2 mb-4">
            <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              SAAS
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300">
              Self Hosted
            </button>
          </div>

          <div className="w-full space-y-4">
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <img
                src="/github-icon.svg" // Replace with the GitHub icon URL
                alt="GitHub"
                className="h-5 mr-2"
              />
              Sign in with GitHub
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <img
                src="/bitbucket-icon.svg" // Replace with the Bitbucket icon URL
                alt="Bitbucket"
                className="h-5 mr-2"
              />
              Sign in with Bitbucket
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <img
                src="/azure-icon.svg" // Replace with the Azure DevOps icon URL
                alt="Azure DevOps"
                className="h-5 mr-2"
              />
              Sign in with Azure DevOps
            </button>
            <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-200">
              <img
                src="/gitlab-icon.svg" // Replace with the GitLab icon URL
                alt="GitLab"
                className="h-5 mr-2"
              />
              Sign in with GitLab
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            By signing up you agree to the <span className="underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
