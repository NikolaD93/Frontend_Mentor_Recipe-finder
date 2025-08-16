import { Link } from 'react-router';

import hero_img from '@/assets/images/image-home-hero-large.webp';
import pattern from '@/assets/images/pattern-squiggle-1.svg';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="py-10 lg:py-20 lg:text-center">
      <h1 className="text-5xl font-extrabold lg:text-7xl">
        <span className="after:bg-destructive relative after:absolute after:bottom-[10px] after:left-0 after:z-[-1] after:h-5 after:w-full after:rounded-[4px] after:opacity-50 after:content-[''] lg:after:h-10">
          Healthy
        </span>{' '}
        meals, zero fuss
      </h1>
      <p className="mx-auto mt-3 max-w-[480px]">
        Discover eight quick, whole-food recipes that you can cook tonight —no processed junk, no
        guesswork.
      </p>
      <Button asChild className="mt-8 mb-10 lg:mt-10 lg:mb-20">
        <Link to="recipes">Start exploring</Link>
      </Button>
      <div className="h-[200px] rounded-[16px] bg-white p-1 md:h-auto lg:p-4">
        <img className="absolute left-0 z-[-1] w-full lg:top-100" src={pattern} alt="pattern" />
        <img
          className="h-full w-full rounded-[12px] object-cover md:h-auto"
          src={hero_img}
          alt="girl cutting vegetables"
        />
      </div>
    </div>
  );
}
