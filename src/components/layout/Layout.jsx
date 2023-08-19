import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="w-1/5 bg-gray-800 text-white p-4">Navigation</nav>

      {/* Main Content Area */}
      <main className="w-4/5 p-4">
        {/* Top Bar */}
        <header className="bg-gray-200 p-2 mb-4">Top Bar</header>

        {/* Content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;