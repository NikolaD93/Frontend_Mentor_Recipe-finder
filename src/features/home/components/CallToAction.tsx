import { Link } from 'react-router';

import cta1 from '@/assets/images/pattern-fork.svg';
import cta2 from '@/assets/images/pattern-knife.svg';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <div className="relative mt-16 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#E0E6E3] py-12 text-center lg:mt-0 lg:py-24">
      <h2 className="text-[40px] font-extrabold lg:text-5xl">Ready to cook smarter?</h2>
      <p className="mt-8 mb-10 max-w-[300px] lg:mt-3 lg:mb-10 lg:max-w-max">
        Hit the button, pick a recipe, and get dinner on the table—fast.
      </p>
      <Button asChild>
        <Link to="recipes">Browse recipes</Link>
      </Button>
      <img
        className="absolute hidden lg:left-[-70px] lg:block"
        src={cta1}
        alt="lorem ipsum dolor"
      />
      <img
        className="absolute hidden lg:right-[-70px] lg:block"
        src={cta2}
        alt="lorem ipsum dolor"
      />
    </div>
  );
}
