import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center space-x-3">
    <Image
      src="/images/chickens.jpg" // Add this image to public/images
      alt="Farmers Fresh Feeds Logo"
      width={50}
      height={50}
    />
    <span className="text-xl font-bold">Farmers Fresh Feeds</span>
  </div>
  );
}
