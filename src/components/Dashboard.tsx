const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">CodeAnt AI</h1>
        <div className="hidden lg:flex space-x-4">
          <button className="bg-gray-700 text-sm px-4 py-2 rounded-md">
            Log in
          </button>
          <button className="bg-green-500 text-sm px-4 py-2 rounded-md">
            Sign up with email
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="lg:flex lg:space-x-6 lg:px-6">
        {/* Sidebar (visible on desktop) */}
        <aside className="hidden lg:block lg:w-1/4 bg-gray-800 text-white p-4 rounded-md">
          <h2 className="text-lg font-bold">UkTarshDhaiyaPanwar</h2>
          <nav className="mt-6 space-y-4">
            <button className="block text-sm text-blue-400 font-semibold">
              Repositories
            </button>
            <button className="block text-sm">AI Code Review</button>
            <button className="block text-sm">Cloud Security</button>
            <button className="block text-sm">How to Use</button>
            <button className="block text-sm">Settings</button>
          </nav>
          <div className="mt-6">
            <button className="block text-sm text-gray-400">Support</button>
            <button className="block text-sm text-gray-400 mt-2">Logout</button>
          </div>
        </aside>

        {/* Main Section */}
        <main className="lg:w-3/4 bg-white p-6 rounded-md">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Repositories</h2>
              <p className="text-sm text-gray-500">33 total repositories</p>
            </div>
            <div className="hidden lg:flex space-x-3">
              <button className="bg-gray-200 text-sm text-gray-700 px-4 py-2 rounded-md">
                Refresh All
              </button>
              <button className="bg-blue-500 text-sm text-white px-4 py-2 rounded-md">
                Add Repository
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="my-4">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
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
                className="flex justify-between items-center bg-gray-50 p-4 border border-gray-200 rounded-md"
              >
                <div>
                  <h3 className="text-sm font-semibold">
                    {repo.name} <span className="text-gray-500 text-xs">({repo.type})</span>
                  </h3>
                  <p className="text-xs text-gray-500">
                    {repo.lang} · {repo.size} · Updated {repo.updated}
                  </p>
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
