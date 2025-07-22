import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/landing/index";
import PreSignUp from "./pages/auth/PreSignUp";
import OrganizerLogin from "./pages/auth/OrganizerLogin";
import BidderLogin from "./pages/auth/BidderLogin";
import PlayerLogin from "./pages/auth/PlayerLogin";
import useScrollbarVisibility from "./hooks/use-scrollbar-visibility";
import BidderApp from "./pages/bidder/BidderApp";

const App = () => {
  // Use custom hook to hide scrollbars
  useScrollbarVisibility();
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing and Auth */}
        <Route path="/" element={<Index />} />
        <Route path="/pre-signup" element={<PreSignUp />} />
        <Route path="/organizer-login" element={<OrganizerLogin />} />
        <Route path="/bidder-login" element={<BidderLogin />} />
        <Route path="/player-login" element={<PlayerLogin />} />

        {/* Bidder Dashboard with Navigation */}
        <Route path="/bidder-dashboard" element={<BidderApp />} />
        <Route path="/bidder/*" element={<BidderApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;