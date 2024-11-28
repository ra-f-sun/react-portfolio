const ContactForm = () => {
  return (
    <section id="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <div className="portfolio-title">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <h4>My contact</h4>
          </div>
          <h1>i want to here from you</h1>
          <div className="form-details">
            <div className="form-input">
              <div className="form-name">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your email" />
              </div>
              <div className="form-name">
                <input type="text" placeholder="Your phone" />
                <input type="text" placeholder="subject" />
              </div>
              <div className="form-text">
                <input type="text" placeholder="Your Message" />
              </div>
              <button className="form-btn">send me message</button>
            </div>
            <div className="contact-info">
              <div className="info-row">
                <div className="info-row-icon">
                  <img src="images/Icon (1).png" alt="" />
                </div>
                <div className="info-row-text">
                  <h3>Address</h3>
                  <p>202 Dog Hill Lane Beloit, KS 67420</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-row-icon">
                  <img src="images/Icon.png" alt="" />
                </div>
                <div className="info-row-text">
                  <h3>Phone</h3>
                  <p>+880164851546</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-row-icon">
                  <img src="images/Group.png" alt="" />
                </div>
                <div className="info-row-text">
                  <h3>Address</h3>
                  <p>202 Dog Hill Lane Beloit, KS 67420</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
