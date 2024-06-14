import "../../Styles/NotFound.css";

import useSound from "use-sound";

export default function NotFound() {
  const [play] = useSound("/honk-sound.mp3");

  return (
    <div className="notfound">
      <div className="notfound-window">
        <h4>Kudy? Tudy?</h4>
        <h5>Tudy ne!</h5>
      </div>
      <div className="notfound-link">
        <a href="/">☜ Zpátky</a>
      </div>
      <div className="notfound-goose" onMouseEnter={play} onClick={play}></div>
    </div>
  );
}
