export default function CoffeeCommunity() {
  return (
    <section className="w-full bg-[#5b2e05] text-white pt-16 h-fit">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          Join Coffeenity’s AI community—where millions of coffee lovers order,
          connect, and discover new favorites.
        </h2>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">

        {/* Left */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <h3 className="text-6xl font-bold">36%</h3>

            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              ▲ 6.00%
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-200 max-w-sm">
            Up to 52% of US coffee drinkers may order coffee via mobile app in
            2025, showing rapid growth in digital convenience.
          </p>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <h3 className="text-6xl font-bold">60%</h3>

          <p className="mt-4 text-sm text-gray-200 max-w-sm ml-auto">
            American consumers increasingly order their food online.
          </p>
        </div>
      </div>

      {/* Image + Content */}
      <div className="max-w-screen flex gap-8">

        {/* Image stretched */}
        <div className="w-full h-full">
          <img
            src="/community.jpeg"
            alt="Barista and Coffee Owner"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex items-start">
          <ul className="space-y-5 text-gray-200 text- leading-relaxed">
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