import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/signIn";
import ResetSuccessfullysolar from "./pages/reset-successfullysolar";
import ResetPasswordsolar from "./pages/reset-passwordsolar";
import ForgotPasswordSolar from "./pages/forgot-password-solar";
import PvProductionInfo1 from "./pages/pv-production-info1";
import PvProductionInfo from "./pages/pv-production-info";
import SignUpSolar1 from "./pages/sign-up-solar1";
import Website from "./pages/website";
import DashBoard from "./pages/dashboard";
import SmartDevices from "./pages/smartDevices";
import SettingsPage from "./pages/settingsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/reset-successfullysolar":
        title = "";
        metaDescription = "";
        break;
      case "/reset-passwordsolar":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password-solar":
        title = "";
        metaDescription = "";
        break;
      case "/pv-production-info1":
        title = "";
        metaDescription = "";
        break;
      case "/pv-production-info":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-solar":
        title = "";
        metaDescription = "";
        break;
      case "/website":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/reset-successfullysolar"
        element={<ResetSuccessfullysolar />}
      />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/website" element={<Website />} />
      <Route path="/smart-devices" element={<SmartDevices />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/sign-up-solar" element={<SignUpSolar1 />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
}
export default App;
