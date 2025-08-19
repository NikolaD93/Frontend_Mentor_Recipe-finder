import type { Dispatch, SetStateAction } from 'react';

import searchIcon from '@/assets/images/icon-search.svg';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cookimeFilters, prepTimeFilters } from '@/constants';

type recipeFiltersProps = {
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  setPrepTimeFilterValue: Dispatch<SetStateAction<string>>;
  setCookTimeFilterValue: Dispatch<SetStateAction<string>>;
};

export default function RecipeFilters({
  searchInputValue,
  setSearchInputValue,
  setPrepTimeFilterValue,
  setCookTimeFilterValue,
}: recipeFiltersProps) {
  return (
    <div className="mt-16 mb-6 flex flex-col justify-between gap-3 lg:flex-row lg:gap-0">
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
        <Select onValueChange={(value) => setPrepTimeFilterValue(value)}>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Max Prep Time" />
          </SelectTrigger>
          <SelectContent>
            {prepTimeFilters.map((item, idx) => {
              return (
                <SelectItem key={idx} value={item.value}>
                  {item.content}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setCookTimeFilterValue(value)}>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Max Cook Time" />
          </SelectTrigger>
          <SelectContent>
            {cookimeFilters.map((item, idx) => {
              return (
                <SelectItem key={idx} value={item.value}>
                  {item.content}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="relative">
        <Input
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder="Search by name or ingredient..."
        />
        <img className="absolute top-[14px] left-4" src={searchIcon} alt="lorem ipsum dolor" />
      </div>
    </div>
  );
}
