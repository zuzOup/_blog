import PropTypes from "prop-types";

function Article_Link({ data }) {
  return (
    <a className="link" target="_blank" href={data.link.url}>
      {data.link.text}
    </a>
  );
}

export default Article_Link;
Article_Link.propTypes = {
  data: PropTypes.object,
};
