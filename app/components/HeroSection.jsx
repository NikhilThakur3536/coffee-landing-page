import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/bg.png"
        alt="Background"
        fill
        priority
        className="object-cover brightness-[0.4] sm:brightness-[0.45]"
        quality={85}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT SIDE - Text content */}
          <div className="text-white space-y-6 md:space-y-8 text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
              Welcome to
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-yellow-400">AI-Powered</span>
              <br className="sm:hidden" />
              Coffee
              <br className="hidden sm:block" />
              Community.
            </h1>

            {/* QR + Text */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 sm:gap-6 pt-4 sm:pt-8">
              <div className="bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-lg">
                <Image
                  src="/images/qr.png"
                  alt="QR Code for Coffeenity App"
                  width={100}
                  height={100}
                  className="w-24 h-24 sm:w-28 sm:h-28"
                />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg md:text-xl font-medium leading-tight">
                  Install <br className="sm:hidden" />
                  <span className="text-yellow-300 font-semibold">Coffeenity</span>
                  <br />
                  Mobile App
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Phone mockup */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[420px] w-full">
              <Image
                src="/mobilescreen.png"
                alt="Coffeenity mobile app preview"
                width={450}
                height={900}
                className="w-full h-auto drop-shadow-2xl"
                priority
                quality={92}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}