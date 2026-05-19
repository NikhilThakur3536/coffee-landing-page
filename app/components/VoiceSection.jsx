import Image from "next/image";

export default function VoiceSection() {
  return (
    <section className="w-full grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="relative min-h-[500px] flex items-center justify-center">

        {/* Background */}
        <Image
          src="/left.png"
          alt="Coffee ordering"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#36291b]/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-lg px-6">

          <ul className="space-y-3 text-sm mb-6">
            <li>• Skip the line! Order your coffee by voice—no tapping required.</li>
            <li>• Say “my usual,” and your coffee reorder is on its way—fast and easy.</li>
          </ul>

          {/* Video/Image Card */}
          <div className="rounded-xl overflow-hidden shadow-xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Coffee automation demo"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative min-h-[500px] flex items-center justify-center">

        {/* Background */}
        <Image
          src="/right.png"
          alt="Coffee automation"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#36291b]/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-lg px-6">

          <p className="text-sm mb-6">
            Coffeenity manages orders and automates priorities—
            your staff perfects every cup.
          </p>

          {/* Video/Image Card */}
          <div className="rounded-xl overflow-hidden shadow-xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Coffee automation demo"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>
      </div>

    </section>
  );
}