import iconCookTime from '@/assets/images/icon-cook-time.svg';
import iconPrepTime from '@/assets/images/icon-prep-time.svg';
import iconServings from '@/assets/images/icon-servings.svg';
import { Button } from '@/components/ui/button';
import type { Recipe } from '@/types';

type recipeCardProps = {
  recipesData: Recipe[];
};

export default function RecipeCard({ recipesData }: recipeCardProps) {
  console.log(recipesData);
  return (
    <div className="card">
      {recipesData.map((recipe) => {
        return (
          <div key={recipe.id} className="w-[320px] rounded-md border bg-white p-2 lg:w-[400px]">
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
            <Button size="lg" className="w-full rounded-full">
              View Recipe
            </Button>
          </div>
        );
      })}
    </div>
  );
}
