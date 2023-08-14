import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import mainImg from "../assets/img/img.png";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      {/* <nav>
        <Logo/>
      </nav> */}
      <div className="container page">
        
        <div className="info">
          <h1>
            Senior <span>software</span> developer
          </h1>
          <p>
            Full Front-End UI-Developer with more than 6.10 years of experience
            in web application development in agile methodology, during
            different phases of development. Have Strong logical, analytical,
            problem solving, business understanding, innovative thinking,
            communication skills etc. My plan is to perform well in a
            challenging environment that offers scope for personal and
            professional growth and in the process, contribute my best to the
            organization specializing in the Information Technology field.
          </p>
         
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>

        <img src={mainImg} alt="My pic" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
