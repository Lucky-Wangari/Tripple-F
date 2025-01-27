import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src="/images/chickens.jpg" // Add this image to public/images
          alt="Farmers Fresh Feeds Logo"
          width={50}
          height={50}
        />
        <span className="text-xl font-bold">Farmers Fresh Feeds</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="hover:text-blue-400">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-400">About Us</a>
        </li>
        <li>
          <a href="/products" className="hover:text-blue-400">Products</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-blue-400">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
