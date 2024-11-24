const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-img">
            <img src="images/about-img.jpg" alt="" />
          </div>
          <div className="about-right-text">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <span>About Me</span>
            <h2>I Can Design Anything You Want</h2>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit.
            </p>
            <div className="about-works">
              <img src="images/about.png" alt="" />
              <p>
                <span>300+</span>
                <br />
                Complete Project
              </p>
              <img src="images/about.png" alt="" />
              <p>
                <span>16+</span>
                <br />
                Years of Experience
              </p>
            </div>
            <p style={{ marginTop: "50px" }}>
              <img src="images/check2-square 1.png" alt="" />
              <span>Work simple and cline design</span>
            </p>
            <p style={{ marginTop: "50px" }}>
              <img src="images/check2-square 1.png" alt="" />
              <span>Work simple and cline design</span>
            </p>
            <div className="hero-btn">download my cv</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
