import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const axios = require("axios");

import { playlistTracks } from "../../utils/SpotifyAPI";
import ItemTrack from "../ItemTrack/ItemTrack";

const PlayListTracks = ({ className, playListId, userToken }) => {
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        const data = playlistTracks(playListId, userToken);
        axios(data.endpoint, data.atributes)
            .then((response) => {
                setTracks(response.data.items);
            })
            .catch((error) => console.log(error.response.data.error));
    }, [playListId]);

    return (
        <div className={`${className} playlist-tracks`}>
            <ul className="playlist-tracks__list">
                {tracks?.map((item, key) => {
                    return <ItemTrack item={item.track} key={key} />
                })}
            </ul>
        </div>
    );
};

PlayListTracks.propTypes = {
    className: PropTypes.string,
    playListId: PropTypes.string,
    userToken: PropTypes.string,
};

export default PlayListTracks;
