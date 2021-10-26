import React from "react";
import PropTypes from "prop-types";

const SliderLists = ({ className, data, selectPlayList }) => {
    const visitListPage = () => {
        window.open(data.external_urls.spotify);
    };

    return (
        <div className={className + " slider-lists"}>
            <img
                className="slider-lists__img"
                src={data.images[0].url}
                alt="caratula"
                onClick={() => selectPlayList(data.id)}
            />
            <span className="slider-lists__name">{data.name}</span>
            <span
                className="slider-lists__link"
                onClick={() => visitListPage()}
            >
                Ver en Spotify.com
            </span>
        </div>
    );
};

SliderLists.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    selectPlayList: PropTypes.func,
};

export default SliderLists;
