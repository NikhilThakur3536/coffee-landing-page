export default function InviteFooter() {
  return (
    <div className="bg-[#3d2b1f] px-5 py-12 md:py-16 flex flex-col items-center justify-center text-center">
      {/* Text content - matching line breaks and spacing */}
      <div className="max-w-screen text-[#f5e9d4] mb-10 md:mb-12">
        <p className="text-lg md:text-xl leading-relaxed mb-5">
          Love coffee and want to help out?<br />
          Become a user and invite your favorite coffee shops to join Coffeenity.
        </p>

        <p className="text-lg md:text-xl leading-relaxed font-medium">
          Earn points for every shop that signs up through<br />
          your invite!
        </p>
      </div>

      {/* QR Code - square, centered, with light background for contrast */}
      <div className="bg-white p-4 rounded-xl shadow-lg">
       \
        <img
          src="/qrcode.png"   // ← put real QR image here
          alt=" invite QR code"
          className="w-48 h-48 md:w-44 md:h-44 object-contain"
          width={150}
          height={150}
        />

      </div>
    </div>
  );
}