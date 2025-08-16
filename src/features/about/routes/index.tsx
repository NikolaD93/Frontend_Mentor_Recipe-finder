import { Navigate, Route, Routes } from 'react-router';

import About from '../components/About';

export const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<About />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
