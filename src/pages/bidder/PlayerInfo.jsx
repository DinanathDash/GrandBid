import React, { useState } from 'react';
// Ensure Font Awesome CSS is imported in your main index.js or App.js
// If not already, add: import '@fortawesome/fontawesome-free/css/all.min.css';
// in your src/index.js or at the top of this App.js if it's the only entry point.

function App() {
  // State for managing active tab in PlayerDetails component (formerly VehicleDetails)
  const [activeTab, setActiveTab] = useState('batting'); // Default to 'batting' for cricket player

  // --- Header Component ---
  // This component renders the top navigation bar of the application.
  // It includes the logo, navigation links, language selector, search/bell icons, and user profile.
  const Header = () => (
    <header className="flex justify-between items-center py-4 px-6 bg-white rounded-xl shadow-sm">
      <div className="flex items-center space-x-8">
        {/* Logo and App Name */}
        <div className="flex items-center font-bold text-xl">
          {/* Ensure 'logo.png' is in your public folder */}
          <img src="/logo.png" alt="Cricket Auction Logo" className="h-8 mr-2" />
          <span>Cricket Auction</span>
        </div>
        {/* Navigation Links (hidden on small screens, flex on medium and up) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">How it works</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Auction Rules</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Auction Schedule</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Support</a>
        </nav>
      </div>
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <div className="flex items-center text-gray-600 cursor-pointer">
          <i className="fas fa-globe mr-1"></i> {/* Font Awesome globe icon */}
          <span>English</span>
          <i className="fas fa-chevron-down ml-1 text-xs"></i> {/* Font Awesome caret-down icon */}
        </div>
        {/* Search and Notification Icons */}
        <i className="fas fa-search text-gray-600 text-lg cursor-pointer"></i> {/* Font Awesome search icon */}
        <i className="fas fa-bell text-gray-600 text-lg cursor-pointer"></i> {/* Font Awesome bell icon */}
        {/* User Profile Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
          {/* Ensure 'avatar.png' is in your public folder */}
          <img src="/avatar.png" alt="User Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );

  // --- PlayerAuctionInformation Component (formerly PerformanceVehicles) ---
  // This component displays auction information and agent/player details for cricket players.
  const PlayerAuctionInformation = () => (
    <div className="bg-white rounded-xl shadow-sm p-6 flex-1 lg:w-2/5"> {/* Flex-1 and responsive width for layout */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Cricket Player Auction</h2>
      <h3 className="text-md font-medium text-gray-700 mb-4 pb-2 border-b border-gray-200">Player Information</h3>
      <div className="space-y-3 text-sm text-gray-600">
        {/* Player Information Rows */}
        <div className="flex justify-between">
          <span className="font-medium">Player ID</span>
          <span>CKT902923</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Auction Date</span>
          <span>07/22/2025 02:00 pm</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Venue</span>
          <span>M. Chinnaswamy Stadium, Bengaluru</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Last Update</span>
          <span>07/22/2025 01:55 pm</span>
        </div>
      </div>
      {/* Agent/Team Representative Information */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center">
          {/* Ensure 'agent-avatar.png' is in your public folder */}
          <img src="/agent-avatar.png" alt="Agent Avatar" className="w-12 h-12 rounded-full mr-3 object-cover" />
          <div>
            <p className="font-medium text-gray-800">Team India Rep.</p>
            <p className="text-green-600 text-xs font-semibold">100% positive feedback</p>
          </div>
        </div>
        <div className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
          <span>12 Players Drafted</span>
        </div>
      </div>
    </div>
  );

  // --- PlayerDetails Component (formerly VehicleDetails) ---
  // This component displays detailed statistics of the cricket player using a tabbed interface.
  const PlayerDetails = () => {
    // Function to render content based on the active tab
    const renderContent = () => {
      switch (activeTab) {
        case 'key':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-trophy text-blue-600 text-2xl mb-2"></i>
                <span className="font-semibold text-gray-800 text-base">Rank: 2 (ODI Batting)</span>
                <p className="text-gray-600 text-xs">ICC Ranking</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-user-circle text-blue-600 text-2xl mb-2"></i>
                <span className="font-semibold text-gray-800 text-base">Right-hand Batsman</span>
                <p className="text-gray-600 text-xs">Playing Style</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-flag text-blue-600 text-2xl mb-2"></i>
                <span className="font-semibold text-gray-800 text-base">India</span>
                <p className="text-gray-600 text-xs">Nationality</p>
              </div>
            </div>
          );
        case 'batting':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-cricket text-blue-600 text-2xl mb-2"></i> {/* Placeholder for cricket bat/ball icon */}
                <span className="font-semibold text-gray-800 text-base">13,026 Runs (ODI)</span>
                <p className="text-gray-600 text-xs">Total Runs</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-percent text-blue-600 text-2xl mb-2"></i>
                <span className="font-semibold text-gray-800 text-base">58.67 Avg, 93.74 SR</span>
                <p className="text-gray-600 text-xs">Average & Strike Rate</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-medal text-blue-600 text-2xl mb-2"></i>
                <span className="font-semibold text-gray-800 text-base">47 Centuries (ODI)</span>
                <p className="text-gray-600 text-xs">Centuries</p>
              </div>
            </div>
          );
        case 'bowling':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-bowling-ball text-blue-600 text-2xl mb-2"></i> {/* Placeholder for bowling icon */}
                <span className="font-semibold text-gray-800 text-base">8 Wickets (ODI)</span>
                <p className="text-gray-600 text-xs">Total Wickets</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-chart-line text-blue-600 text-2xl mb-2"></i>
                <span className="font-semibold text-gray-800 text-base">6.23 Economy Rate</span>
                <p className="text-gray-600 text-xs">Economy</p>
              </div>
            </div>
          );
        case 'fielding':
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-hand-paper text-blue-600 text-2xl mb-2"></i> {/* Placeholder for fielding icon */}
                <span className="font-semibold text-gray-800 text-base">143 Catches (ODI)</span>
                <p className="text-gray-600 text-xs">Catches</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-start text-left">
                <i className="fas fa-running text-blue-600 text-2xl mb-2"></i>
                <span className="font-semibold text-gray-800 text-base">Excellent Agility</span>
                <p className="text-gray-600 text-xs">Agility</p>
              </div>
            </div>
          );
        case 'fitness':
          return <div className="p-4 bg-gray-50 rounded-lg text-gray-700">Fitness Details: High stamina, good recovery.</div>;
        case 'career':
          return <div className="p-4 bg-gray-50 rounded-lg text-gray-700">Career Highlights: Debut 2008, Captained India, numerous awards.</div>;
        default:
          return null;
      }
    };

    return (
      <div className="bg-white rounded-xl shadow-sm p-6 flex-1 lg:w-3/5"> {/* Flex-1 and responsive width for layout */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Player Details</h2>
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 mb-6 pb-2 -mx-6 px-6 no-scrollbar">
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${activeTab === 'key' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500 hover:border-blue-300'}`}
            onClick={() => setActiveTab('key')}
          >
            Key Stats
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${activeTab === 'batting' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500 hover:border-blue-300'}`}
            onClick={() => setActiveTab('batting')}
          >
            Batting
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${activeTab === 'bowling' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500 hover:border-blue-300'}`}
            onClick={() => setActiveTab('bowling')}
          >
            Bowling
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${activeTab === 'fielding' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500 hover:border-blue-300'}`}
            onClick={() => setActiveTab('fielding')}
          >
            Fielding
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${activeTab === 'fitness' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500 hover:border-blue-300'}`}
            onClick={() => setActiveTab('fitness')}
          >
            Fitness
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${activeTab === 'career' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500 hover:border-blue-300'}`}
            onClick={() => setActiveTab('career')}
          >
            Career
          </button>
        </div>
        {/* Tab Content */}
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>
    );
  };

  // --- MainContent Component ---
  // This component holds the main content area including breadcrumbs, player title,
  // image gallery, main player image, and the player auction/details sections.
  const MainContent = () => (
    <main className="flex-grow p-6 bg-white rounded-xl shadow-sm flex flex-col space-y-6">
      {/* Player Title */}
      <h1 className="text-3xl font-semibold text-gray-800">Virat Kohli</h1>

      {/* Player Hero Section: Gallery and Main Image */}
      <div className="flex flex-col lg:flex-row gap-6 bg-white rounded-xl p-6 shadow-sm">
        <div className="flex-1 max-w-2xl"> {/* Main player image */}
          {/* Ensure 'virat-kohli-main.png' is in your public folder */}
          <img src="/virat-kohli-main.png" alt="Virat Kohli" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Bottom Sections: Player Auction Information and Player Details */}
      <div className="flex flex-col lg:flex-row gap-6">
        <PlayerAuctionInformation /> {/* Updated to PlayerAuctionInformation */}
        <PlayerDetails /> {/* Updated to PlayerDetails */}
      </div>
    </main>
  );

  // --- Sidebar Component ---
  // This component displays the current bid, auction information summary, and bid input section.
  const Sidebar = () => (
    <aside className="w-full lg:w-80 p-6 bg-white rounded-xl shadow-sm flex-shrink-0 flex flex-col space-y-6">
      {/* Current Bid Section */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-3 text-gray-600 text-sm">
          <span>Current Bid (Team Bids)</span> {/* Updated label */}
          <i className="far fa-bookmark text-lg text-gray-400 hover:text-blue-500 cursor-pointer"></i> {/* Bookmark icon */}
        </div>
        <div className="text-3xl font-bold text-gray-900">$4,450,000</div> {/* Updated bid amount for player */}
      </div>

      {/* Auction Info Card */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm space-y-4 text-sm text-gray-700">
        <div className="flex justify-between items-center">
          <span className="font-medium">Player Status</span> {/* Updated label */}
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md font-semibold text-xs">Available</span> {/* Updated status */}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Time Left</span>
          <span className="font-bold text-red-600">8h. 44m. 14s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Auction Status</span> {/* Updated label */}
          <span>Live</span> {/* Updated status */}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Base Price</span> {/* Updated label */}
          <span>$1,000,000</span> {/* Updated fee/price */}
        </div>
      </div>

      {/* Your Bid Section */}
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Team Bid</h3> {/* Updated label */}
        <input
          type="text"
          placeholder="Enter Your Bid (USD)"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors duration-200">
          Place Bid
        </button>
        <p className="text-xs text-gray-500 text-center mt-4">
          Every bid is legally binding and final. <a href="#" className="text-blue-600 hover:underline">Learn more</a>
        </p>
      </div>
    </aside>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 font-sans antialiased">
      <Header />
      <div className="flex flex-col lg:flex-row flex-grow mt-4 gap-4">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
