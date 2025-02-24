import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";

import LandingPage from "./pages/landing";
import LoginForm from "./pages/login";
import TrackingForm from "./pages/tracking";
import PremiumPaymentForm from "./pages/pay";
import ClaimForm from "./pages/claim";
import UnclaimedAmountForm from "./pages/unclaimed-amount";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="track" element={<TrackingForm />} />
          <Route path="pay" element={<PremiumPaymentForm />} />
          <Route path="claim" element={<ClaimForm />} />
          <Route path="unclaimed-amount" element={<UnclaimedAmountForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
