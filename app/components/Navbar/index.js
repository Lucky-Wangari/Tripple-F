import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="fixed text-white top-0 left-0 w-full bg-black bg-opacity-0 px-6 py-4 flex justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400">
              About Us
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-blue-400">
              Products
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/feeds.jpeg" // Path to your image in the public directory
            alt="Farmers Fresh Feeds Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold">Farmers Fresh Feeds farmers</span>
        </div>
      </nav>
    </div>
  );
}
