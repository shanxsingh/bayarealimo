import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <h1 className="hero-title">Akal Transportation Inc</h1>
        {/* Down Arrows for Scrolling */}
        <div className="scroll-down-indicator">
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>

      {/* Service Section */}
      <div className="service-section">
        <h2>Our Services</h2>
        <p>Whether it's a night out in the city, a corporate event, or an airport transfer, Akal Transportation Inc. offers premium limo services tailored to your needs. Travel in style, comfort, and safety with our top-tier vehicles and professional chauffeurs. Let us elevate your journey with our seamless, luxurious transportation experience!</p>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us / Book Appointment</h2>
        <p>Phone: <a href="tel:408-529-5644">408-529-5644</a></p>
        <p>Email: <a href="mailto:akaltransportationinc@gmail.com">akaltransportationinc@gmail.com</a></p>
      </div>
    </div>
  );
}

export default App;
