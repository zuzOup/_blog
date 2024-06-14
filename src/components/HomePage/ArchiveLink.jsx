import { useState } from "react";

import "../../Styles/HomePage/ArchiveLink.css";

function ArchiveLink() {
  const [hover, setHover] = useState(false);

  function hoverHandle() {
    setHover((state) => {
      return !state;
    });
  }
  return (
    <div className="archive-link-bck">
      <a
        href="./clanky"
        className="archive-link"
        onMouseEnter={hoverHandle}
        onMouseLeave={hoverHandle}
      >
        <span className={hover ? "archive-link-active" : undefined}>
          &nbsp;Více tady !&nbsp;
        </span>
      </a>
    </div>
  );
}

export default ArchiveLink;
