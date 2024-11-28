const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="blog-wrapper">
          <div className="portfolio-title">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <h4>My Blog</h4>
          </div>
          <h1>latest blog</h1>
          <div className="blog-details">
            <div className="blog-card">
              <div className="blog-img">
                <img src="images/Rectangle 41.png" alt="" />
              </div>
              <p>20 Januar, 2023</p>
              <h4>Become a UX/UI Designer With Career Foundry.</h4>
              <div className="readmore">
                <h5>Read More</h5>
                <picture>
                  <img src="images/Vector.png" alt="" />
                </picture>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
                <img src="images/Rectangle 41 (1).png" alt="" />
              </div>
              <p>20 Januar, 2023</p>
              <h4>The Best App Development For Your Business Plan.</h4>
              <div className="readmore">
                <h5>Read More</h5>
                <picture>
                  <img src="images/Vector.png" alt="" />
                </picture>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img">
                <img src="images/Rectangle 41 (2).png" alt="" />
              </div>
              <p>20 Januar, 2023</p>
              <h4>The Best Portfolio For Agency Design Thinking</h4>
              <div className="readmore">
                <h5>Read More</h5>
                <picture>
                  <img src="images/Vector.png" alt="" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
