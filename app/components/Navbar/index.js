import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed text-black top-0 left-0 w-full bg-black bg-opacity-0 px-6 py-4 flex justify-between items-center">

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/about" className="hover:text-blue-400">About Us</a>
          <a href="/products" className="hover:text-blue-400">Products</a>
          <a href="/contact" className="hover:text-blue-400">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
