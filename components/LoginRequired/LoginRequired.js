import React from "react";
import PropTypes from "prop-types";
import useTranslation from "next-translate/useTranslation";

const LoginRequired = ({ className }) => {

    const { t } = useTranslation();
    const strings = t("common:strings", {}, { returnObjects: true });

    return (
        <div className={className + ` login-required`}>
            <img
                className="login-required__img"
                src={strings.imgLogin}
                alt="login required"
            />
            <p className="login-required__text">{strings.noLogin}</p>
        </div>
    );
};

LoginRequired.propTypes = {
    className: PropTypes.string
};

export default LoginRequired;
