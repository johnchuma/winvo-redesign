import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Only show loading screen on home page
  const showLoading = isLoading && location.pathname === "/";

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <ScrollProgress />
      <CustomCursor />

      <div className="relative cursor-none">
        <Navbar />

        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </PageTransition>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
