import PropTypes from "prop-types";

export default function Page({ children }) {
  return (
    <div>
      <h2>This should appear on the page</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.node),
  // For any number of childen that we have that can be passed in it.
  children: PropTypes.any,
};
