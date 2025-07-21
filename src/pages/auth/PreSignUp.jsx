import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function PreSignUp() {
  return (
    <div className="min-h-screen bg-[#06131D]">
      <Navigation />
<div>
        <h1 className="text-3xl font-bold text-center mt-10">Pre-Sign Up Page</h1>
        <p className="text-center mt-4">
          This page is for users to pre-sign up before the auction starts.
        </p>
      </div>
      <Footer />
    </div>
  );
}