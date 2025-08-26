import iconBullet from '@/assets/images/icon-bullet-point.svg';
import about2 from '@/assets/images/image-about-beyond-the-plate-large.webp';
import about1 from '@/assets/images/image-about-our-mission-large.webp';
import CallToAction from '@/features/home/components/CallToAction';

export default function About() {
  return (
    <div>
      <div className="items-center py-12 lg:flex lg:gap-20 lg:py-24">
        <div className="flex-1/2">
          <span className="bg-destructive rounded-[6px] px-2 py-1 text-xl font-bold">
            Our mission
          </span>
          <h2 className="my-6 max-w-[530px] text-[40px] leading-[120%] font-extrabold lg:text-5xl">
            Help more people cook nourishing meals, more often.
          </h2>
          <p className="mb-4 max-w-[530px] font-semibold lg:text-xl">
            Healthy Recipe Finder was created to prove that healthy eating can be convenient,
            affordable, and genuinely delicious.
          </p>
          <p className="mb-10 max-w-[650px] font-semibold lg:mb-0 lg:text-xl">
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no
            ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>
        <div className="flex-1/2">
          <img className="rounded-2xl" src={about1} alt="lorem ipsum dolor" />
        </div>
      </div>
      <hr />
      <div className="justify-between py-12 lg:flex lg:py-24">
        <h2 className="mb-10 text-[40px] leading-[120%] font-extrabold lg:mb-0 lg:text-5xl">
          Why we exist
        </h2>
        <div className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-5">
              <img src={iconBullet} alt="lorem ipsum dolor" />
              <h4 className="text-2xl font-bold">Cut through the noise.</h4>
            </div>
            <p className="mt-3 max-w-[700px] font-medium lg:text-xl">
              The internet is bursting with recipes, yet most busy cooks still default to take-away
              or packaged foods. We curate a tight collection of fool-proof dishes so you can skip
              the scrolling and start cooking.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <img src={iconBullet} alt="lorem ipsum dolor" />
              <h4 className="text-2xl font-bold">Empower home kitchens.</h4>
            </div>
            <p className="mt-3 max-w-[700px] font-medium lg:text-xl">
              When you control what goes into your meals, you control how you feel. Every recipe is
              built around unrefined ingredients and ready in about half an hour of active prep.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <img src={iconBullet} alt="lorem ipsum dolor" />
              <h4 className="text-2xl font-bold">Make healthy look good.</h4>
            </div>
            <p className="mt-3 max-w-[700px] font-medium lg:text-xl">
              High-resolution imagery shows you exactly what success looks like—because we eat with
              our eyes first, and confidence matters.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="justify-between py-12 lg:flex lg:py-24">
        <h2 className="mb-10 text-[40px] leading-[120%] font-extrabold lg:mb-0 lg:max-w-[300px] lg:text-5xl">
          Our food philosophy
        </h2>
        <div className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-5">
              <img src={iconBullet} alt="lorem ipsum dolor" />
              <h4 className="text-2xl font-bold">Whole ingredients first.</h4>
            </div>
            <p className="mt-3 max-w-[700px] font-medium lg:text-xl">
              Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every
              recipe.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <img src={iconBullet} alt="lorem ipsum dolor" />
              <h4 className="text-2xl font-bold">Flavor without compromise.</h4>
            </div>
            <p className="mt-3 max-w-[700px] font-medium lg:text-xl">
              Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <img src={iconBullet} alt="lorem ipsum dolor" />
              <h4 className="text-2xl font-bold">Respect for time.</h4>
            </div>
            <p className="mt-3 max-w-[700px] font-medium lg:text-xl">
              Weeknight meals should slot into real schedules; weekend cooking can be leisurely but
              never wasteful.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <img src={iconBullet} alt="lorem ipsum dolor" />
              <h4 className="text-2xl font-bold">Sustainable choices.</h4>
            </div>
            <p className="mt-3 max-w-[700px] font-medium lg:text-xl">
              Short ingredient lists cut down on food waste and carbon footprint, while
              plant-forward dishes keep things planet-friendly.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="items-center pt-6 lg:flex lg:py-24">
        <div className="flex-1/3">
          <h2 className="my-6 max-w-[530px] text-[40px] leading-[120%] font-extrabold lg:text-5xl">
            Beyond the plate
          </h2>
          <p className="mb-4 max-w-[530px] font-semibold lg:text-xl">
            We believe food is a catalyst for community and well-being. By sharing approachable
            recipes, we hope to:
          </p>
          <ul className="mb-10 flex max-w-[360px] list-disc flex-col gap-3 ps-6 font-semibold lg:mb-0 lg:text-xl">
            <li className="">Encourage family dinners and social cooking.</li>
            <li className="">Reduce reliance on single-use packaging and delivery waste.</li>
            <li className="">Spark curiosity about seasonal produce and local agriculture.</li>
          </ul>
        </div>
        <div className="flex-1/2">
          <img className="rounded-2xl" src={about2} alt="lorem ipsum dolor" />
        </div>
      </div>
      <CallToAction />
    </div>
  );
}
