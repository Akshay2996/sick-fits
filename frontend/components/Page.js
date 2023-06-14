import PropTypes from "prop-types";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <div>
      <Header />
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
