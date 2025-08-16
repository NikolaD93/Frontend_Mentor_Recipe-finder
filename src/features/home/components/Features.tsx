import feature2 from '@/assets/images/icon-minimum-fuss.svg';
import feature3 from '@/assets/images/icon-search-in-seconds.svg';
import feature1 from '@/assets/images/icon-whole-food-recipes.svg';
import featureImg from '@/assets/images/image-home-real-life-large.webp';

export default function Features() {
  const features = [
    {
      image: feature1,
      title: 'Whole-food recipes',
      desc: 'Each dish uses everyday, unprocessed ingredients.',
    },
    {
      image: feature2,
      title: 'Minimum fuss',
      desc: 'All recipes are designed to make eating healthy quick and easy.',
    },
    {
      image: feature3,
      title: 'Search in seconds',
      desc: 'Filter by name or ingredient and jump straight to the recipe you need.',
    },
  ];

  return (
    <div>
      <h2 className="text-[40px] font-extrabold lg:text-center lg:text-5xl">What you'll get</h2>
      <div className="mt-8 flex flex-col gap-6 lg:mt-12 lg:flex-row lg:justify-between lg:border-b lg:pb-24">
        {features.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="flex h-15 w-15 items-center justify-center rounded-[12px] border bg-white">
                <img src={item.image} alt={item.title} />
              </div>
              <h4 className="mt-6 mb-3 text-[32px] font-bold">{item.title}</h4>
              <p className="lg:max-w-[350px]">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="items-center pt-16 lg:flex lg:py-24">
        <div className="lg:w-1/2">
          <h2 className="text-[40px] font-extrabold lg:text-5xl">Built for real life</h2>
          <div className="lg:max-w-[550px]">
            <p className="py-5">
              Cooking shouldn’t be complicated. These recipes come in under 30 minutes of active
              time, fit busy schedules, and taste good enough to repeat.{' '}
            </p>
            <p>
              Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
            </p>
          </div>
        </div>
        <div className="pt-8 lg:w-1/2 lg:pt-0">
          <img className="rounded-[16px]" src={featureImg} alt="lorem ipsum dolor" />
        </div>
      </div>
    </div>
  );
}
