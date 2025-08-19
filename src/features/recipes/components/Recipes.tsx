import { useState } from 'react';

import recipes from '@/data.json';
import type { Recipe } from '@/types';

import RecipeCard from './RecipeCard';
import RecipeFilters from './RecipeFilters';

export default function Recipes() {
  const recipesData: Recipe[] = recipes;
  const [searchInputValue, setSearchInputValue] = useState('');
  const [prepTimeFilterValue, setPrepTimeFilterValue] = useState('All');
  const [cookTimeFilterValue, setCookTimeFilterValue] = useState('All');

  let filteredRecipes = recipesData;

  filteredRecipes = filteredRecipes.filter((item) => {
    if (prepTimeFilterValue === 'clear' || prepTimeFilterValue === 'All') {
      return true;
    }
    return item.prepMinutes.toString() === prepTimeFilterValue;
  });

  filteredRecipes = filteredRecipes.filter((item) => {
    if (cookTimeFilterValue === 'clear' || cookTimeFilterValue === 'All') {
      return true;
    }
    return item.cookMinutes.toString() === cookTimeFilterValue;
  });

  filteredRecipes = filteredRecipes.filter(
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
        setPrepTimeFilterValue={setPrepTimeFilterValue}
        setCookTimeFilterValue={setCookTimeFilterValue}
      />
      {filteredRecipes.length > 0 ? (
        <RecipeCard recipesData={filteredRecipes} />
      ) : (
        <div className="h-screen">
          <p className="pt-10 text-center text-3xl lg:text-4xl">No recipe found :(</p>
        </div>
      )}
    </div>
  );
}
