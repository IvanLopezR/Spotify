import React from "react";
import PropTypes from "prop-types";

import Router from 'next/router';

const GoHome = ({ className, logo }) => {

    const returnHome = () => {
        Router.push("/");
    }

    return (
        <div className={`${className} go-home`}>
            <img className="go-home__img" src={logo} alt="Home" title="Ir a inicio" onClick={() => returnHome()} />
        </div>
    );
};

GoHome.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string
};

export default GoHome;
