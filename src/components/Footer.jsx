import React from "react";
import Wrapper from "../assets/wrappers/FooterBig";
import { NavLink } from "react-router-dom";
import links from "../utils/Links";
const Footer = () => {
  return <Wrapper>
    <div className="footer-container show-footer">
     <div className="nav-links">
        {links.map((el) => {
          const { text, path, icon } = el;
        //   if(path=='admin'&&role!=='admin') return
          return (
            <NavLink to={path} key={text} className="nav-link"  end>
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>

    </div>
  </Wrapper>;
};

export default Footer;
