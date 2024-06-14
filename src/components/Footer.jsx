import "../Styles/Footer.css";

import { char } from "./articlehelpers.jsx";

function Footer() {
  return (
    <footer>
      <div className="lace"></div>
      <div className="footer">
        <span>
          <img src="/beaver.png" />
          <p>© 2024</p>
          <p>
            Made with ١٥٧٤♡ by <a className="Zuzka">Zuzka</a>
          </p>
        </span>
        <ul>
          <li>
            <a href="/" target="_self">
              Hlavní stránka
            </a>
          </li>
          <li>
            <a href="/clanky" target="_self">
              Archiv
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kudy.na.mestec/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              {char("⮵")}
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
