import React from "react";
import PropTypes from "prop-types";

const ItemPlayLists = ({ className, item, addTrackToList }) => {

    return (
        <li
            className={`${className} item-playlists`}
            onClick={() => addTrackToList(item)}
        >
            {item.images.length > 0 && (
                <img
                    className="item-playlists__img"
                    src={item.images[0].url}
                />
            )}
            <span className="item-playlists__name">
                {item.name}
            </span>
        </li>
    );
};

ItemPlayLists.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object
};

export default ItemPlayLists;
