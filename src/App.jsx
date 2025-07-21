import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/landing/index";
import PreSignUp from "./pages/auth/PreSignUp";
import Login from "./pages/auth/Login";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/pre-signup" element={<PreSignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;