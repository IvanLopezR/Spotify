import React from "react";
import PropTypes from "prop-types";

const ItemTrack = ({ className, item, trackSelected }) => {

    const navigateTo = (url) => {
        window.open(url);
    };

    const selectTrack = (track) => {
        trackSelected(track);
    }

    const artists = (artistsArray) => {
        return artistsArray.map((item, key) => {
            return (
                <li className="item-track__text__artists__item" key={key}>
                    {key > 0 && (
                        <span className="item-track__text__artists__item__separator">
                            |
                        </span>
                    )}
                    {item.name}
                </li>
            );
        });
    };

    return (
        <li className={`${className} item-track`}>
            {item.album.images.length > 0 && (
                <img
                    className="item-track__img"
                    title={item.name}
                    src={item.album.images[0].url}
                    onClick={() => navigateTo(item.external_urls.spotify)}
                />
            )}
            <div
                className="item-track__text"
                onClick={() => navigateTo(item.external_urls.spotify)}
            >
                <span className="item-track__text__track">{item.name}</span>
                <ul className="item-track__text__artists">
                    {artists(item.artists)}
                </ul>
            </div>
            <button className="item-track__btn" onClick={() => selectTrack(item)} title="añadir a lista">
                <span className="item-track__btn__icon">+</span>
            </button>
        </li>
    );
};

ItemTrack.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object,
    trackSelected: PropTypes.func
};

export default ItemTrack;
