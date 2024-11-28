const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-col">
            <img src="images/Logo (1).png" alt="" />
            <p>
              At vero eos et accusamus et iusto odio dign ducimus qui blanditiis
              praesentium volup deleniti atque corrupti quos dolores et
              molestias excepturi sint occaecati
            </p>
            <h3>credesign@gmail.com</h3>
          </div>
          <div className="footer-col">
            <h4>Explore links</h4>
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">resume</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>My services</h4>
            <ul>
              <li>
                <a href="#">UI/UX Desing</a>
              </li>
              <li>
                <a href="#">Mobile app</a>
              </li>
              <li>
                <a href="#">Graphics design</a>
              </li>
              <li>
                <a href="#">Web design</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow me</h4>
            <ul>
              <li className="social">
                <div className="social-icon">
                  <img src="images/Facebook Icon.png" alt="" />
                </div>
                <div className="social-icon">
                  <img src="images/dribbble (2) 1.png" alt="" />
                </div>
                <div className="social-icon">
                  <img src="images/twitter (2) 1.png" alt="" />
                </div>
                <div className="social-icon">
                  <img src="images/behance (2) 1.png" alt="" />
                </div>
              </li>
              <div className="follow-row">
                <img src="images/Icon (1).png" alt="" />
                <p>202 Dog Hill Lane Beloit, KS 67420</p>
              </div>
              <div className="follow-row">
                <img src="images/Icon.png" alt="" />
                <p>+8801324555745</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
