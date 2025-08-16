import searchIcon from '@/assets/images/icon-search.svg';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function RecipeFilters() {
  return (
    <div className="mt-16 mb-6 flex flex-col justify-between gap-3 lg:flex-row lg:gap-0">
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-4">
        <Select>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Max Prep Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">0 minutes</SelectItem>
            <SelectItem value="5">5 minutes</SelectItem>
            <SelectItem value="10">10 minutes</SelectItem>
            <SelectItem value="clear">Clear</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full lg:w-[180px]">
            <SelectValue placeholder="Max Cook Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">0 minutes</SelectItem>
            <SelectItem value="5">5 minutes</SelectItem>
            <SelectItem value="10">10 minutes</SelectItem>
            <SelectItem value="15">15 minutes</SelectItem>
            <SelectItem value="20">20 minutes</SelectItem>
            <SelectItem value="clear">Clear</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative">
        <Input placeholder="Search by name or ingredient…" />
        <img className="absolute top-[14px] left-4" src={searchIcon} alt="lorem ipsum dolor" />
      </div>
    </div>
  );
}
