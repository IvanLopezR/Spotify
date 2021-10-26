import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { userID } from "../../utils/SpotifyAPI";

const axios = require("axios");

//REDUX
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userToken: state.userToken.userToken,
});

const User = ({ className, userToken, logo }) => {
    const [userInfo, setUserInfo] = useState(true);

    useEffect(() => {
        const data = userID(userToken);
        axios(data.endpoint, data.atributes)
            .then((response) => {
                setUserInfo(response.data);
            })
            .catch((error) => console.log(error.response.data.error));
    }, [userToken]);

    return (
        <div className={className + ` user`}>
            <img
                className="user__img"
                src={logo}
                alt="user"
            />
            <div className="user__text">
                <span className="user__text__name">
                    {userInfo.display_name}
                </span>
                <span className="user__text__email">{userInfo.email}</span>
            </div>
        </div>
    );
};

User.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string
};

export default connect(mapStateToProps, null)(User);
