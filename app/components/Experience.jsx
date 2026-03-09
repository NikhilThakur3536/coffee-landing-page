export default function CoffeeExperience() {
  return (
    <section className="w-full bg-[#4a2503] text-white pt-12 sm:pt-16 pb-12 sm:pb-20">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Coffeenity elevates the coffee experience.
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

        {/* Left Content – text */}
        <div className="space-y-5 sm:space-y-6 text-gray-200 text-sm sm:text-base leading-relaxed order-2 md:order-1">
          <p>
            Coffeenity mobile app is free for all coffee lovers to enjoy.
          </p>

          <p>
            City or adventure—coffee awaits! Ready to taste? Coffee shops
            matched to your taste, not the other way around.
          </p>

          <p>
            You can trust Coffeenity’s AI-powered algorithm for accurate
            coffee shop ratings and popularity.
          </p>

          <p>
            Your coffee is made fresh and ready when you walk in—AI handles
            the timing, so there’s no need to estimate your pickup.
          </p>

          <p className="font-semibold pt-2 sm:pt-4">And BTW...</p>

          <ul className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base">
            <li>Get your first drink FREE</li>
            <li>Enjoy automatic rewards from your very first sip</li>
            <li>Monthly subscription plans for savers</li>
            <li>Exclusive app-only discounts</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2">
          <div className="aspect-[4/3] sm:aspect-[3/2] md:aspect-auto overflow-hidden rounded-lg">
            <img
              src="/experience.jpeg"
              alt="Coffee customer enjoying their drink"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}