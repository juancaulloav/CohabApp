import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CohabRoutes } from "../Cohab/routes/CohabRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* CohabApp */}
      <Route path="/*" element={<CohabRoutes />} />
    </Routes>
  );
};
