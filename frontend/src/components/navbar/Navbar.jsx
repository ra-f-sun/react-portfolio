const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <div className="nav-container">
          <a href="#">
            <img src="images/Logo.png" alt="" />
          </a>
          <ul className="list-items">
            <a href="#">
              {" "}
              <li>home</li>{" "}
            </a>
            <a href="#">
              {" "}
              <li>about</li>{" "}
            </a>
            <a href="#">
              {" "}
              <li>resume</li>{" "}
            </a>
            <a href="#">
              {" "}
              <li>services</li>{" "}
            </a>
            <a href="#">
              {" "}
              <li>portfolio</li>{" "}
            </a>
            <a href="#">
              {" "}
              <li>testimonial</li>{" "}
            </a>
            <a href="#">
              <li>blog</li>
            </a>
          </ul>
          <div className="nav-btn">contact us</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
