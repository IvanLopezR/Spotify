import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { LoginRequired } from "../../components";

const axios = require("axios");

//REDUX
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setUserToken } from "../../redux/actions";
import router from "next/router";

const mapStateToProps = (state) => ({
    userToken: state.userToken.userToken,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ setUserToken }, dispatch);

const MenuComponent = ({
    className,
    userToken,
    setUserToken,
    strings: { title, options, lists },
}) => {
    useEffect(() => {
        if (
            window &&
            !userToken &&
            window.location.hash.split("&")[0] !== undefined
        ) {
            let pathArray = window.location.hash.split("&")[0];
            setUserToken(pathArray.split("=")[1]);
        }
    });

    useEffect(() => {
        axios("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " +
                    btoa(
                        "445566ef901e4c2fbdcc0c23906d027f" +
                            ":" +
                            "8af7ecc0f2fc44b79ea03414ef222390"
                    ),
            },
            data: "grant_type=client_credentials",
        })
            .then((tokenResponse) => {
                // axios('https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/top-tracks?market=US', {
                //     method: 'GET',
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Accept': 'application/json',
                //         'Authorization': 'Bearer ' + tokenResponse.data.access_token
                //     },
                // }).then(response => {
                //     console.log(response.data);
                // }).catch(error => console.log(error.response.data.error));
            })
            .catch((error) => console.log(error.response.data.error));
    }, [userToken]);

    const goTo = (page) => {
        router.push(page);
    };

    const elements = (opt) => {
        return opt.map((item, key) => {
            return (
                <ul
                    className="menu-component__container__list__element"
                    onClick={() => goTo(item.url)}
                    key={key}
                >
                    <span className="menu-component__container__list__element__text">
                        {item.title}
                    </span>
                </ul>
            );
        });
    };

    const showMenu = () => {
        return (
            <div className="menu-component__container">
                <p className="menu-component__container__title">{title}</p>
                <li className="menu-component__container__list">
                    {elements(options)}
                </li>
            </div>
        );
    };

    const checkLoging = () => {
        return userToken ? showMenu() : <LoginRequired />;
    };

    return <div className={`${className} menu-component`}>{checkLoging()}</div>;
};

MenuComponent.propTypes = {
    className: PropTypes.string,
    userToken: PropTypes.any,
    setUserToken: PropTypes.func,
    strings: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
