import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/feeds.jpeg" // Add this image to public/images
          alt="Animal Feed Background"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4">One Stop for Readily Mixed</h1>
        <h1 className="text-4xl font-bold mb-4">Animal Feeds and Raw Materials</h1>

        {/* Subheadline */}
        <p className="text-lg mb-6">For Immediate Services Dial</p>

        {/* Button */}
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
