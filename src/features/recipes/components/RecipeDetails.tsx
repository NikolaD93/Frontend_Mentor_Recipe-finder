import { Link, useParams } from 'react-router';

import iconBullet from '@/assets/images/icon-bullet-point.svg';
import iconCookTime from '@/assets/images/icon-cook-time.svg';
import iconPrepTime from '@/assets/images/icon-prep-time.svg';
import iconServings from '@/assets/images/icon-servings.svg';
import { Button } from '@/components/ui/button';
import recipes from '@/data.json';
import type { Recipe } from '@/types';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipeDetails: Recipe = recipes.filter((item) => item.id.toString() === id)[0];
  const moreRecipes = [...recipes];

  return (
    <div className="mt-12 mb-12 lg:mb-16">
      <div className="gap-10 border-b pb-16 lg:flex">
        <div className="basis-1/2">
          <p className="mb-4 text-lg">
            Recipes / <span className="font-bold">{recipeDetails.title}</span>
          </p>
          <img
            className="h-auto rounded-md"
            src={recipeDetails.image.large}
            alt="lorem ipsum dolor"
          />
        </div>
        <div className="mt-10 basis-1/2">
          <h2 className="text-[40px] leading-[120%] font-extrabold lg:text-5xl">
            {recipeDetails?.title}
          </h2>
          <div className="mt-5 flex flex-col gap-5 text-lg">
            <p>{recipeDetails.overview}</p>
            <div className="gap-4 lg:flex">
              <div className="flex gap-2 font-semibold">
                <img src={iconServings} alt="lorem ipsum dolor" />
                <p>Servings: {recipeDetails.servings}</p>
              </div>
              <div className="flex gap-2 font-semibold">
                <img src={iconPrepTime} alt="lorem ipsum dolor" />
                <p>Prep: {recipeDetails.prepMinutes} mins</p>
              </div>
              <div className="flex gap-2 font-semibold">
                <img src={iconCookTime} alt="lorem ipsum dolor" />
                <p>Cook: {recipeDetails.cookMinutes} mins</p>
              </div>
            </div>
            <div>
              <h5 className="mb-4 text-2xl font-bold">Ingredients:</h5>
              <ul>
                {recipeDetails.ingredients.map((item, id) => {
                  return (
                    <li className="mb-1 flex items-center gap-2" key={id}>
                      <img src={iconBullet} alt="lorem ipsum" /> {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-2xl font-bold">Instructions:</h5>
              <ul>
                {recipeDetails.instructions.map((item, id) => {
                  return (
                    <li className="mb-1 flex items-center gap-2" key={id}>
                      <img src={iconBullet} alt="lorem ipsum" /> {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h3 className="py-8 text-[2rem] font-bold lg:py-16">More recipes</h3>
      <div className="card">
        {moreRecipes.splice(0, 4).map((recipe) => {
          return (
            <div key={recipe.id} className="w-full rounded-md border bg-white p-2 lg:w-[400px]">
              <div>
                <img className="rounded-md" src={recipe.image.small} alt="lorem ipsum dolor" />
              </div>
              <div className="px-1 py-4">
                <div>
                  <h5 className="text-xl font-bold">{recipe.title}</h5>
                  <p>{recipe.overview}</p>
                  <div className="mt-4 mb-2 flex gap-4">
                    <div className="flex gap-1.5">
                      <img src={iconServings} alt="" />
                      <p>Servings: {recipe.servings}</p>
                    </div>
                    <div className="flex gap-1.5">
                      <img src={iconPrepTime} alt="" />
                      <p>Prep: {recipe.prepMinutes} mins</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <img src={iconCookTime} alt="" />
                    <p>Cook: {recipe.cookMinutes} min</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="w-full rounded-full">
                <Link to={`/recipes/${recipe.id}`}>View Recipe</Link>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
