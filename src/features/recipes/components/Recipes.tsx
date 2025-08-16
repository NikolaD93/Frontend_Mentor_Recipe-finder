import img4 from '@/assets/images/icon-cook-time.svg';
import img3 from '@/assets/images/icon-prep-time.svg';
import img2 from '@/assets/images/icon-servings.svg';
import img1 from '@/assets/images/sweet-potato-tacos-small.webp';
import { Button } from '@/components/ui/button';

import RecipeFilters from './RecipeFilters';

export default function Recipes() {
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
      <div className="card">
        <div className="w-[320px] rounded-md border bg-white p-2 lg:w-[400px]">
          <div>
            <img className="rounded-md" src={img1} alt="" />
          </div>
          <div className="px-1 py-4">
            <div>
              <h5 className="text-xl font-bold">Mediterranean Chickpea Salad</h5>
              <p>A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.</p>
              <div className="mt-4 mb-2 flex gap-4">
                <div className="flex gap-1.5">
                  <img src={img2} alt="" />
                  <p>Servings: 2</p>
                </div>
                <div className="flex gap-1.5">
                  <img src={img3} alt="" />
                  <p>Prep: 10mins</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <img src={img4} alt="" />
                <p>Cook: 0 min</p>
              </div>
            </div>
          </div>
          <Button size="lg" className="w-full rounded-full">
            View Recipe
          </Button>
        </div>
      </div>
    </div>
  );
}
