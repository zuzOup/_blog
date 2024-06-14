import PropTypes from "prop-types";

function InstaSVG({ isHovered }) {
  return (
    <svg
      className={isHovered ? "" : "active"}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="path"
        fill="none"
        stroke="none"
        d="M 32.550491,148.48008 A -108.15144,-108.15144 0 0 1 140.70194,40.328644 -108.15144,-108.15144 0 0 1 248.85338,148.48008 -108.15144,-108.15144 0 0 1 140.70194,256.63153 -108.15144,-108.15144 0 0 1 32.550491,148.48008 Z"
      />
      <text
        fontSize="65"
        fill="#000000"
        letterSpacing="2"
        fontFamily="var(--fontHeader)"
        fontWeight="800"
      >
        <textPath xlinkHref="#path" startOffset="80">
          Instagram
        </textPath>
      </text>
    </svg>
  );
}

InstaSVG.propTypes = {
  isHovered: PropTypes.bool,
};

export default InstaSVG;
