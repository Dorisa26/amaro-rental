
import CarImageSlider from "./components/CarImageSlider";

const cars = [
  {
    name: "Range Rover Sport",
    subtitle: "Luxury & Comfort",
    year: "2014",
    engine: "3.0 TDv6",
    price: 150,
    images: [
    "/cars/Range-Rover-Sport.jpg",
    "/cars/Range-Rover-Sport1.jpg",
    "/cars/Range-Rover-Sport2.jpg",
    ]
  },
  {
    name: "Mercedes Benz CLS",
    subtitle: "Luxury & Performance",
    year: "2012",
    engine: "550",
    price: 100,
    images:[
     "/cars/Mercedes-Benz-CLS.jpg",
      "/cars/Mercedes-Benz-CLS1.jpg",
      "/cars/Mercedes-Benz-CLS2.jpg",
    ]
  },
  {
    name: "Mercedes Benz E250",
    subtitle: "Comfort & Elegance",
    year: "2010",
    engine: "E250 CDI",
    price: 40,
    images:[
     "/cars/Mercedes-Benz-E250.jpg",
      "/cars/Mercedes-Benz-E2501.jpg",
      "/cars/Mercedes-Benz-E2502.jpg",
    ] 
  },
  {
    name: "Mercedes Benz GLK",
    subtitle: "Space & Comfort",
    year: "2012",
    engine: "220 CDI",
    price: 40,
    images:[
     "/cars/Mercedes-Benz-GLK.jpg",
      "/cars/Mercedes-Benz-GLK1.jpg",
      "/cars/Mercedes-Benz-GLK2.jpg",
    ]
  },
  {
    name: "BMW 5 Series",
    subtitle: "Comfort & Elegance",
    year: "2010",
    engine: "520D",
    price: 40,
    images:[
     "/cars/BMW-5-Series.jpg",
      "/cars/BMW-5-Series1.jpg",
      "/cars/BMW-5-Series2.jpg",
    ]
  },
  {
    name: "Audi Q5",
    subtitle: "Space & Comfort",
    year: "2010",
    engine: "2.0 TDI",
    price: 70,
    images:[
     "/cars/Audi-Q5.jpg",
      "/cars/Audi-Q5-1.jpg",
      "/cars/Audi-Q5-2.jpg",
    ] 
  },
  {
    name: "Passat CC",
    subtitle: "Comfort & Elegance",
    year: "2014",
    engine: "2.0 TDI",
    price: 30,
    images:[
     "/cars/Passat-CC.jpg",
      "/cars/Passat-CC1.jpg",
      "/cars/Passat-CC2.jpg",
    ] 
  },
  {
    name: "Golf 6",
    subtitle: "Comfort & Elegance",
    year: "2009",
    engine: "2.0 TDI",
    price: 30,
    images:[
     "/cars/Golf-6.jpg",
      "/cars/Golf-6-1.jpg",
      "/cars/Golf-6-2.jpg",
    ] 
  },
  {
    name: "Golf 7",
    subtitle: "Comfort & Elegance",
    year: "2014",
    engine: "2.0 TDI",
    price: 40,
    images:[
     "/cars/Golf-7.jpg",
      "/cars/Golf-7-1.jpg",
      "/cars/Golf-7-2.jpg",
    ]
  },
  {
    name: "Santa Fe",
    subtitle: "Space & Comfort",
    year: "2013",
    engine: "2.0 eVGT",
    price: 60,
    images:[
     "/cars/Santa-Fe.jpg",
      "/cars/Santa-Fe1.jpg",
      "/cars/Santa-Fe2.jpg",
    ]
  },
 {
    name: "Kia K5",
    subtitle: "Comfort & Elegance",
    year: "2013",
    engine: "2.0 GAZ",
    price: 30,
    images:[
     "/cars/Kia-K5.jpg",
      "/cars/Kia-K51.jpg",
      "/cars/Kia-K52.jpg",
    ]
  }
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
            <CarImageSlider
           images={car.images}
           alt={car.name}
           number={String(index + 1).padStart(2, "0")}
/>

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
                  <span>Automatic</span>
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
