
const cars = [
  {
    name: "Kia K5",
    subtitle: "Comfort & Elegance",
    year: "2013",
    engine: "2.0 LPG",
    price: 30,
    image: "/cars/kia-k5.jpg",
    category: "SEDAN",
  },
  {
    name: "Audi Sedan",
    subtitle: "Luxury & Performance",
    year: "2015",
    engine: "Diesel",
    price: 50,
    image: "/cars/audi-sedan.jpg",
    category: "PREMIUM",
  },
  {
    name: "Audi SUV",
    subtitle: "Space & Comfort",
    year: "2014",
    engine: "Diesel",
    price: 60,
    image: "/cars/audi-suv.jpg",
    category: "SUV",
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">A.</span>
          <span>RENTAL <b>AMARO</b></span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#fleet">Our Fleet</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="https://wa.me/355697395866" className="nav-cta">
          Book a car <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-background" />

        <div className="hero-content">
          <div className="hero-tag">
            <span className="gold-dot" />
            PREMIUM CAR RENTAL · TIRANA
          </div>

          <h1>
            Your journey.
            <br />
            <span>Your freedom.</span>
          </h1>

          <p>
            Discover Albania with comfort and confidence.
            Find the perfect car for your next journey
            with Rental Amaro.
          </p>

          <div className="hero-buttons">
            <a href="#fleet" className="gold-button">
              Explore our fleet <span>↗</span>
            </a>
            <a href="#contact" className="text-button">
              Get in touch →
            </a>
          </div>

          <div className="hero-details">
            <div>
              <strong>03+</strong>
              <span>Available models</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Contact support</span>
            </div>
            <div>
              <strong>TIA</strong>
              <span>Tirana, Albania</span>
            </div>
          </div>
        </div>

        <div className="hero-side-text">
          RENTAL AMARO · DRIVE YOUR WAY
        </div>
      </section>

      <section className="fleet-section" id="fleet">
        <div className="section-top">
          <div>
            <span className="section-label">OUR COLLECTION</span>
            <h2>Find your perfect ride.</h2>
          </div>
          <p>
            Carefully selected vehicles for every
            destination, every occasion and every journey.
          </p>
        </div>

        <div className="fleet-grid">
          {cars.map((car, index) => (
            <article className="car-card" key={car.name}>
              <div className="car-photo">
                <img src={car.image} alt={car.name} />

                <span className="car-category">
                  {car.category}
                </span>

                <span className="car-number">
                  0{index + 1}
                </span>
              </div>

              <div className="car-info">
                <div className="car-title">
                  <div>
                    <h3>{car.name}</h3>
                    <p>{car.subtitle}</p>
                  </div>
                  <span className="car-arrow">↗</span>
                </div>

                <div className="car-specs">
                  <span>◷ {car.year}</span>
                  <span>⚙ {car.engine}</span>
                  <span>✓ Automatic / Manual*</span>
                </div>

                <div className="car-footer">
                  <div className="car-price">
                    <strong>€{car.price}</strong>
                    <span>/ day</span>
                  </div>

                  <a
                    className="book-button"
                    href={`https://wa.me/355697395866?text=${encodeURIComponent(
                      `Hello Rental Amaro! I am interested in renting the ${car.name} for €${car.price} per day.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book now ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="fleet-note">
          *Please confirm vehicle specifications and availability
          when making your reservation.
        </p>
      </section>

      <section className="about-section" id="about">
        <div className="about-left">
          <span className="section-label">THE AMARO EXPERIENCE</span>
          <h2>
            More than a car.
            <br />
            <span>It is your journey.</span>
          </h2>
        </div>

        <div className="about-right">
          <p>
            At Rental Amaro, we believe every journey should
            start with the right car. Whether you are exploring
            Tirana or discovering the beauty of Albania,
            we are here to make your trip comfortable.
          </p>
          <a href="#contact">Discover Rental Amaro ↗</a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-label">LETS GET YOU MOVING</span>
        <h2>Ready for your next journey?</h2>
        <p>Contact us and reserve your car today.</p>

        <a
          href="https://wa.me/355697395866"
          target="_blank"
          rel="noreferrer"
          className="gold-button"
        >
          Contact us on WhatsApp ↗
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-icon">A.</span>
            <span>RENTAL <b>AMARO</b></span>
          </a>
          <p>Your journey starts here.</p>
        </div>

        <div className="footer-links">
          <span>FIND US</span>
          <p>Rruga 7 Nëntori, Mëzez, Tirana, Albania</p>
          <a href="tel:+355697395866">+355 69 739 5866</a>
          <a href="email:amarildohoxha55@gmail.com">
            amarildohoxha55@gmail.com
          </a>
        </div>
<div className="footer-bottom">
  © 2026 Rental Amaro. All rights reserved D.H
</div>
      </footer>
    </main>
  );
}
