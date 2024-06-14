import { useState } from "react";

import "../../Styles/HomePage/Header.css";

import InstaSVG from "./InstaSVG";



function Header() {
 
  const [isHovered, setIsHovered] = useState(true);

  const hover = () => {
    setIsHovered((curr) => !curr);
  };

  return (
    <header>
      <div className="banner">
        <a
          className="insta_link"
          onMouseEnter={hover}
          onMouseLeave={hover}
          href="https://www.instagram.com/kudy.na.mestec/"
          target="_blank"
        >
          <InstaSVG isHovered={isHovered} />
          <div className="insta_bck"></div>
        </a>
      </div>
      <div className="lace"></div>
    </header>
  );
}

export default Header;
