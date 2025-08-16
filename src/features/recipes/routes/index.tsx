import { Navigate, Route, Routes } from 'react-router';

import RecipeDetails from '../components/RecipeDetails';
import Recipes from '../components/Recipes';

export const RecipesRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Recipes />} />
      <Route path="/:id" element={<RecipeDetails />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
