/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import * as builder from "../../ducks/builder";
import { toAbsoluteUrl } from "../../utils/utils";

class Brand extends React.Component {
  render() {
    const { brandClasses } = this.props;
    return (
      <div
        className={`kt-header__brand ${brandClasses} kt-grid__item`}
        id="kt_header_brand"
      >
        <div className="kt-header__brand-logo">
          <Link to="/">
            <img
              className="kt-header__brand-logo-default"
              alt="logo"
              src={toAbsoluteUrl("/media/logos/logo-2.png")}
            />

            <img
              className="kt-header__brand-logo-sticky"
              alt="logo"
              src={toAbsoluteUrl("/media/logos/logo-2-sm.png")}
            />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    brandClasses: builder.selectors.getClasses(store, {
      path: "brand",
      toString: true
    })
  };
};

export default connect(mapStateToProps)(Brand);
