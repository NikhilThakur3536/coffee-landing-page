export default function CoffeeCommunity() {
  return (
    <section className="w-full bg-[#5b2e05] text-white pt-12 sm:pt-16 pb-12 sm:pb-20">

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-snug">
          Join Coffeenity’s AI community—where millions of coffee lovers order,
          connect, and discover new favorites.
        </h2>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center mb-12 sm:mb-16">

        {/* Left stat */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold">36%</h3>
            <span className="bg-green-100/20 text-green-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full border border-green-400/30">
              ▲ 6.00%
            </span>
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-md mx-auto md:mx-0">
            Up to 52% of US coffee drinkers may order coffee via mobile app in 2025, showing rapid growth in digital convenience.
          </p>
        </div>

        {/* Right stat */}
        <div className="text-center md:text-right">
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold">60%</h3>
          <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-md mx-auto md:ml-auto">
            American consumers increasingly order their food online.
          </p>
        </div>
      </div>

      {/* Image + Content – stack on mobile, side-by-side on larger screens */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-10">

        {/* Image */}
        <div className="lg:w-3/5 xl:w-7/12">
          <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto overflow-hidden rounded-lg">
            <img
              src="/community.jpeg"
              alt="Barista and Coffee Owner"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Content – bullet list */}
        <div className="lg:w-2/5 xl:w-5/12 flex items-start">
          <ul className="space-y-4 sm:space-y-5 text-gray-200 text-sm sm:text-base leading-relaxed">
            <li>• Coffeenity — your AI-powered coffee partner, an AI-powered mobile app designed specifically for your coffee shop.</li>
            <li>• Our ordering system manages orders, automates priorities, tracks transactions, and analyzes user data to uncover promotion opportunities.</li>
            <li>• A new wave of customers found your coffee shop through Coffeenity, driving growth and loyalty.</li>
            <li>• Our subscription plans transform new customers into loyal fans.</li>
            <li>• Delivers actionable analytics to optimize your operations, including inventory forecasting.</li>
            <li>• The AI Advisor recommends pricing adjustments and highlights trending items.</li>
            <li>• Switch to Coffeenity and reduce your operational costs.</li>
            <li>• Experience Coffeenity with a complimentary 30-day trial.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}