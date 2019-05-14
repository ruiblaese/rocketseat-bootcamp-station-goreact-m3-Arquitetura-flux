import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Footer = ({ count }) => <p>Voce tem {count} favoritos.</p>;

Footer.propType = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.favorites.data.length
});

export default connect(mapStateToProps)(Footer);
