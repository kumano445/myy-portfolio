import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/profile.png' className="profile-img" width={300} height={300} alt="kogums's personal headshot" />
      <div className="hero-text">
        <h1>初めまして！Kogumaです👋</h1>
        <p>
          

        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/matsukuma10"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          {/* <a 
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>*/}
        </div>
      </div>
    </div>
  )
}

export default Hero;