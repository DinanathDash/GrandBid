import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BidderNavigation from './Navigation';
import BidderDashboard from './Dashboard';
import BidderPlayers from './Players';
import PlayerInfo from './PlayerInfo';

export default function BidderApp() {
  return (
    <Routes>
      <Route path="/*" element={<BidderLayout />} />
    </Routes>
  );
}

function BidderLayout() {
  return (
    <BidderNavigation>
      <Routes>
        <Route path="/" element={<Navigate to="/bidder/dashboard" replace />} />
        <Route path="/dashboard" element={<BidderDashboard />} />
        <Route path="/players" element={<BidderPlayers />} />
        <Route path="players/player-info/:playerId" element={<PlayerInfo />} />
      </Routes>
    </BidderNavigation>
  );
}
