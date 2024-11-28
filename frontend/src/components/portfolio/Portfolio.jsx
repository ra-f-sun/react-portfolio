const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="portfolio-wrapper">
          <div className="portfolio-title">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <h4>My portfolio</h4>
          </div>
          <h1>Visit my portfolio</h1>
          <div className="portfolio-container">
            <div className="portfolio-cards">
              <img src="images/portfolio-img1.png" alt="" />
            </div>
            <div className="portfolio-cards">
              <img src="images/portfolio-img2.png" alt="" />
            </div>
            <div className="portfolio-cards">
              <img src="images/portfolio-img3.png" alt="" />
            </div>
            <div className="portfolio-cards">
              <img src="images/portfolio-img4.png" alt="" />
            </div>
            <div className="portfolio-cards">
              <img src="images/portfolio-img1.png" alt="" />
            </div>
            <div className="portfolio-cards">
              <img src="images/portfolio-img2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
