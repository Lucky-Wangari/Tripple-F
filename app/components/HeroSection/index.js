import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/logo.png" // Replace with your logo path
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

      {/* Background Image */}
      <div className="relative w-full h-[500px]">
        <Image 
          src="../../public/images/feeds.jpg" 
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
          href="" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

