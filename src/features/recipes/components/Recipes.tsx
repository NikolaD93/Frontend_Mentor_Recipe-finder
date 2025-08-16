import recipes from '@/data.json';
import type { Recipe } from '@/types';

import RecipeCard from './RecipeCard';
import RecipeFilters from './RecipeFilters';

export default function Recipes() {
  const recipesData: Recipe[] = recipes;

  return (
    <div className="mt-12 lg:mt-20 lg:mb-24">
      <h2 className="text-[40px] leading-[120%] font-extrabold lg:text-center lg:text-5xl">
        Explore our simple, healthy recipes
      </h2>
      <p className="mt-3 max-w-[700px] lg:mx-auto lg:text-center">
        Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use
        the search bar to find a recipe by name or ingredient, or simply scroll the list and let
        something delicious catch your eye.
      </p>
      <RecipeFilters />
      <RecipeCard recipesData={recipesData} />
    </div>
  );
}
