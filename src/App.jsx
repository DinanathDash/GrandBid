import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/landing/index";
import PreSignUp from "./pages/auth/PreSignUp";
import OrganiserLogin from "./pages/auth/OrganiserLogin";
import BidderLogin from "./pages/auth/BidderLogin";
import PlayerLogin from "./pages/auth/PlayerLogin";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/pre-signup" element={<PreSignUp />} />
      <Route path="/organiser-login" element={<OrganiserLogin />} />
      <Route path="/bidder-login" element={<BidderLogin />} />
      <Route path="/player-login" element={<PlayerLogin />} />
    </Routes>
  </BrowserRouter>
);

export default App;