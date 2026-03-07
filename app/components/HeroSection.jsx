import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/bg.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center">

        {/* LEFT SIDE */}
        <div className="text-white space-y-6">

          <p className="text-xl font-medium">
            Welcome to
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-yellow-400">AI-Powered</span>
            <br />
            Coffee
            <br />
            Community.
          </h1>

          {/* QR Section */}
          <div className="flex items-center gap-4 pt-6">

            <div className="bg-white p-2 rounded">
              <Image
                src="/images/qr.png"
                alt="QR Code"
                width={96}
                height={96}
              />
            </div>

            <p className="text-lg">
              Install <br />
              Coffeenity <br />
              Mobile App
            </p>

          </div>
        </div>

        {/* RIGHT SIDE (PHONE) */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">

          <Image
            src="/mobilescreen.png"
            alt="Mobile UI"
            width={350}
            height={700}
            className="drop-shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}