export default function About() {
    return (
      <div>
        {/* Section 1: Driven by Quality, Backed by Trust */}
        <div
          className="bg-blue-900 text-white py-16 px-8 flex justify-center items-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-6 text-pink-200">
              Driven by Quality, Backed by Trust
            </h1>
            <p className="text-lg leading-relaxed">
              At Farmers Fresh Feeds, we are driven by a steadfast commitment to
              quality and built on a foundation of trust. For years, we’ve dedicated
              ourselves to providing premium, nutritious feed solutions that help
              farmers and their livestock thrive.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Our mission is simple: to support the hardworking farmers who feed our
              communities by delivering products they can rely on.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Backed by innovation, integrity, and a passion for agriculture, we’re
              proud to be your trusted partner in every step of your farming journey.
            </p>
          </div>
        </div>
  
        {/* Section 2: Sustainable Practices */}
        <div className="flex flex-col lg:flex-row items-center justify-center py-16 px-8">
          <div className="lg:w-1/2 px-8 text-left">
            <h2 className="text-4xl font-bold text-red-700 mb-4">
              Sustainable Practices
            </h2>
            <p className="text-lg mb-4">
              No time to linger? That’s fine. We’ve packed your livestock a feed mix
              fit for champions. Emphasis on ‘fit.’
            </p>
            <p className="text-lg mb-4">Check out the ingredients:</p>
            <ul className="list-disc list-inside mb-8">
              <li>Wheat bran & pollard</li>
              <li>Mycosorb & Mallic Super</li>
              <li>Broken Wheat & Ochonga</li>
              <li>Pig Premix & Layer Premix</li>
              <li>Bone Meal & Lysine</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              See Our Selection
            </button>
          </div>
          <div className="lg:w-1/2 px-8 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://source.unsplash.com/400x300/?pigs"
                alt="Pigs in a barn"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://source.unsplash.com/400x300/?chickens"
                alt="Chickens in a field"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  