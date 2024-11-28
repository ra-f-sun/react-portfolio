const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left-text">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <span>I AM A DESIGNER</span>
            <h1>Creative Design and Web Solutions</h1>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et.
            </p>
            <div className="hero-btn">download my cv</div>
          </div>
          <div className="hero-img">
            <img src="images/hero-img.jpg" alt="hero-img.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
