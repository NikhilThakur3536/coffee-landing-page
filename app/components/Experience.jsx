export default function CoffeeExperience() {
  return (
    <section className="w-full bg-[#4a2503] text-white pt-16 ">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Coffeenity elevates the coffee experience.
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-screen  grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6 text-gray-200 text-sm leading-relaxed pl-16">

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

          <p className="font-semibold">And BTW...</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Get your first drink FREE</li>
            <li>Enjoy automatic rewards from your very first sip</li>
            <li>Monthly subscription plans for savers</li>
            <li>Exclusive app-only discounts</li>
          </ul>

        </div>

        {/* Right Image */}
        <div className="w-[] h-full">
          <img
            src="/experience.jpeg"
            alt="Coffee customer"
            className="w-full h-[520px] object-cover rounded-md"
          />
        </div>

      </div>

    </section>
  );
}