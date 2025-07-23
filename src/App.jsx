import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/landing/index";
import PreSignUp from "./pages/auth/PreSignUp";
import OrganizerLogin from "./pages/auth/OrganizerLogin";
import BidderLogin from "./pages/auth/BidderLogin";
import PlayerLogin from "./pages/auth/PlayerLogin";
import useScrollbarVisibility from "./hooks/use-scrollbar-visibility";
import BidderApp from "./pages/bidder/BidderApp";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // Use custom hook to hide scrollbars
  useScrollbarVisibility();
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing and Auth */}
          <Route path="/" element={<Index />} />
          <Route path="/pre-signup" element={<PreSignUp />} />
          <Route path="/organizer-login" element={<OrganizerLogin />} />
          <Route path="/bidder-login" element={<BidderLogin />} />
          <Route path="/player-login" element={<PlayerLogin />} />

          {/* Bidder Dashboard with Navigation */}
          <Route path="/bidder-dashboard" element={
            <ProtectedRoute>
              <BidderApp />
            </ProtectedRoute>
          } />
          <Route path="/bidder/*" element={
            <ProtectedRoute>
              <BidderApp />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;