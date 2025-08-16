import { useState } from 'react';

import recipes from '@/data.json';
import type { Recipe } from '@/types';

import RecipeCard from './RecipeCard';
import RecipeFilters from './RecipeFilters';

export default function Recipes() {
  const recipesData: Recipe[] = recipes;
  const [searchInputValue, setSearchInputValue] = useState('');
  const filteredRecipe = recipesData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchInputValue.toLowerCase()) ||
      item.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchInputValue.toLowerCase())
      )
  );

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
      <RecipeFilters
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      {filteredRecipe.length > 0 ? (
        <RecipeCard recipesData={filteredRecipe} />
      ) : (
        <div className="h-screen">
          <p className="pt-10 text-center text-3xl lg:text-4xl">
            No recipe with name <span className="font-bold uppercase">{searchInputValue}</span>{' '}
            found :(
          </p>
        </div>
      )}
    </div>
  );
}
