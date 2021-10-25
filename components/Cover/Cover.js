import React from "react";
import PropTypes from "prop-types";
import router from "next/router";

import { loginURL } from "../../utils/SpotifyLogin";

//REDUX
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userToken: state.userToken.userToken,
});

const Cover = ({
    className,
    strings: { title, description, buttonLogin, buttonMenu, signature },
    userToken
}) => {

    const goToAuthentication = () => {
        window.open(loginURL(), "_self");
    };

    const goToMenu = () => {
        router.push("/menu");
    };

    const loginOrMenu = () => {
        if (userToken) {
            return (
                <button
                    className="cover__login__button"
                    onClick={() => {
                        goToMenu();
                    }}
                >
                    <span className="cover__login__button__text">
                        {buttonMenu}
                    </span>
                </button>
            );
        } else {
            return (
                <button
                    className="cover__login__button"
                    onClick={() => {
                        goToAuthentication();
                    }}
                >
                    <span className="cover__login__button__text">
                        {buttonLogin}
                    </span>
                </button>
            );
        }
    };

    return (
        <div className={`${className} cover`}>
            <div className="cover__header">
                <img
                    className="cover__header__img"
                    src="https://play-lh.googleusercontent.com/UrY7BAZ-XfXGpfkeWg0zCCeo-7ras4DCoRalC_WXXWTK9q5b0Iw7B0YQMsVxZaNB7DM"
                    alt="spotify-logo"
                />
                <div className="cover__header__title-container">
                    <h1 className="cover__header__title-container__title">
                        {title}
                    </h1>
                    <p className="cover__header__title-container__subtitle">
                        {description}
                    </p>
                </div>
            </div>
            <div className="cover__login">{loginOrMenu()}</div>
            <span className="cover__signature">{signature}</span>
        </div>
    );
};

Cover.propTypes = {
    className: PropTypes.string,
    strings: PropTypes.object,
    userToken: PropTypes.any
};

export default connect(mapStateToProps, null)(Cover);