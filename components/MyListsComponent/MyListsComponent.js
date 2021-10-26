import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

import { LoginRequired, SliderLists, PlayListTracks } from "../../components";

const axios = require("axios");

import { userLists } from "../../utils/SpotifyAPI";

//REDUX
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userToken: state.userToken.userToken,
});

const MyListsComponents = ({ className, strings, userToken }) => {
    const [listsInfo, setListsInfo] = useState(true);
    const [playListSelected, setPlayListSelected] = useState(null);

    const getCurrentSlider = (slide) => {
        if (listsInfo.items.length - 3 === slide) {
            document.getElementsByClassName("slick-next")[0].style.display =
                "none";
        } else {
            document.getElementsByClassName("slick-next")[0].style.display =
                "block";
        }
        if (slide === 0) {
            document.getElementsByClassName("slick-prev")[0].style.display =
                "none";
        } else {
            document.getElementsByClassName("slick-prev")[0].style.display =
                "block";
        }
    };

    const listsSettings = {
        className: "sliderCustom",
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (current) => getCurrentSlider(current),
    };

    const selectPlayList = (id) => {
        setPlayListSelected(id);
    };

    useEffect(() => {
        const data = userLists(userToken);
        axios(data.endpoint, data.atributes)
            .then((response) => {
                setListsInfo(response.data);
            })
            .catch((error) => console.log(error.response.data.error));
    }, [userToken]);

    console.log(listsInfo)

    let total = listsInfo.total !== undefined ? listsInfo.total : 0;

    const showLists = () => {
        return (
            <div className="my-lists-component__container">
                <p className="my-lists-component__container__title">
                    {strings.title +  `: ` + total}
                </p>
                <div className="my-lists-component__container__list">
                    {listsInfo.items?.length > 0 && (
                        <Slider {...listsSettings}>
                            {listsInfo.items.map((item, key) => (
                                <SliderLists
                                    data={item}
                                    key={key}
                                    selectPlayList={selectPlayList}
                                />
                            ))}
                        </Slider>
                    )}
                </div>
                {playListSelected && (
                    <PlayListTracks
                        playListId={playListSelected}
                        userToken={userToken}
                    />
                )}
            </div>
        );
    };

    const checkLoging = () => {
        return userToken ? showLists() : <LoginRequired />;
    };

    return (
        <div className={`${className} my-lists-component`}>{checkLoging()}</div>
    );
};

MyListsComponents.propTypes = {
    className: PropTypes.string,
    strings: PropTypes.object,
    userToken: PropTypes.any,
};

export default connect(mapStateToProps, null)(MyListsComponents);
