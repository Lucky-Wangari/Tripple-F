import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
        {/* Hero Section */}
        <section
          style={{
            backgroundColor: "#0044cc",
            color: "#f8e9f4",
            padding: "4rem 2rem",
            textAlign: "left",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Driven by Quality, Backed by Trust
            </h1>
            <p>
              At Farmers Fresh Feeds, we are driven by a steadfast commitment
              to quality and built on a foundation of trust. For years, we’ve
              dedicated ourselves to providing premium, nutritious feed
              solutions that help farmers and their livestock thrive.
            </p>
            <p>
              Our mission is simple: to support the hardworking farmers who feed
              our communities by delivering products they can rely on.
            </p>
            <p>
              Backed by innovation, integrity, and a passion for agriculture,
              we’re proud to be your trusted partner in every step of your
              farming journey.
            </p>
          </div>
        </section>

        {/* Sustainable Practices Section */}
        <section
          style={{
            backgroundColor: "#ffffff",
            padding: "4rem 2rem",
            textAlign: "left",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "2rem", color: "#cc0000" }}>
              Sustainable Practices
            </h2>
            <p>
              No time to linger? That’s fine. We’ve packed your livestock a feed
              mix fit for champions. Emphasis on "fit."
            </p>
            <ul style={{ padding: "1rem 0", listStyleType: "disc" }}>
              <li>Wheat bran & pollard</li>
              <li>Mycosorb & Mallic Super</li>
              <li>Broken Wheat & Ochonga</li>
              <li>Pig Premix & Layer Premix</li>
              <li>Bone Meal & Lysine</li>
            </ul>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "2rem",
              }}
            >
              <Image
                src="/images/feeds.jpeg" // Add this image to /public/images
                alt="Animal feed for pigs"
                width={500}
                height={300}
                style={{ borderRadius: "8px" }}
              />
              <Image
                src="/images/chickens.jpg" // Add this image to /public/images
                alt="Chickens in the field"
                width={500}
                height={300}
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
