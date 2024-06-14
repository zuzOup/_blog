import PropTypes from "prop-types";

function Article_Yt({ data }) {
  const start = data.yt.start ? `?start=${data.yt.start}` : "";

  
  return (
    <div className="Yt">
      <iframe
        width="1000"
        height="450"
        src={`https://www.youtube.com/embed/${data.yt.urlID}${start}`}
        allow="fullscreen"
        referrerPolicy="no-referrer"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Article_Yt;

Article_Yt.propTypes = {
  data: PropTypes.object,
};
