import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route index path="/" element={<Home />} />
      <Route element={<NotFound />} />
    </Routes>
  );
};

export { AllRoutes };
