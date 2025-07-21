import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/landing/index";
import PreSignUp from "./pages/auth/PreSignUp";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/pre-sign-up" element={<PreSignUp />} />
    </Routes>
  </BrowserRouter>
);

export default App;