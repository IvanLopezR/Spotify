import React from "react";
import PropTypes from "prop-types";

import Router from 'next/router';

const GoHome = ({ className }) => {

    const returnHome = () => {
        Router.push("/");
    }

    return (
        <div className={`${className} go-home`}>
            <img className="go-home__img" src="https://cdn2.downdetector.com/static/uploads/logo/Spotify_Logo_RGB_Green.png" alt="Home" title="Ir a inicio" onClick={() => returnHome()} />
        </div>
    );
};

GoHome.propTypes = {
    className: PropTypes.string
};

export default GoHome;
