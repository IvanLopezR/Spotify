import React from "react";
import PropTypes from "prop-types";

const ItemArtist = ({ className, item }) => {
    const navigateTo = (url) => {
        window.open(url);
    };

    return (
        <li
            className={`${className} item-artist`}
            onClick={() => navigateTo(item.external_urls.spotify)}
        >
            {item.images.length > 0 && (
                <img
                    className="item-artist__img"
                    src={item.images[0].url}
                />
            )}
            <span className="item-artist__name">
                {item.name}
            </span>
        </li>
    );
};

ItemArtist.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object,
};

export default ItemArtist;
