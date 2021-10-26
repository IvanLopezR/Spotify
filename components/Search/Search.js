import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import { modalAnimation } from "./Search.animations";

import {
    LoginRequired,
    ItemArtist,
    ItemTrack,
    ItemPlayLists,
} from "../../components";

const axios = require("axios");

import { search, userLists, addTrackToPlaylist } from "../../utils/SpotifyAPI";

//REDUX
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    userToken: state.userToken.userToken,
});

const Search = ({ className, strings, type, userToken }) => {
    const [finds, setFinds] = useState(null);
    const [input, setInput] = useState(null);
    const [playLists, setPlayLists] = useState(null);
    const [isTrack, setIsTrack] = useState(false);
    const [track, setTrack] = useState(null);
    const [listSelected, setListSelected] = useState(null);

    const modalRef = useRef(null);

    useEffect(() => {
        setTrack(null);
        if (input?.length > 2) {
            const data = search(input, type, userToken);
            axios(data.endpoint, data.atributes)
                .then((response) => {
                    setFinds(response.data);
                })
                .catch((error) => console.log(error.response.data.error));
        } else {
            setFinds(null);
        }
    }, [userToken, input]);

    useEffect(() => {
        setIsTrack(window.location.pathname.includes("cancion"));
    });

    useEffect(() => {
        const data = userLists(userToken);
        axios(data.endpoint, data.atributes)
            .then((response) => {
                setPlayLists(response.data);
            })
            .catch((error) => console.log(error.response.data.error));
    }, [userToken]);

    const handleInput = (string) => {
        setInput(string);
    };

    const trackSelected = (track) => {
        setTrack(track);
    };

    const addTrackToList = (listSelected) => {
        setListSelected(listSelected);
        const data = addTrackToPlaylist(listSelected.id, track.uri, userToken);
        axios(data.endpoint, data.atributes)
            .then((response) => {
                modalAnimation(modalRef, finishedAnimation);
            })
            .catch((error) => console.log(error.response.data.error));
        document
            .getElementsByClassName("search__container__principal__input")[0]
            .focus();
    };

    const finishedAnimation = () => {
        setTrack(null);
    };

    const list = () => {
        if (finds !== null) {
            if (isTrack) {
                return finds.tracks.items?.map((item, key) => {
                    return (
                        <ItemTrack
                            item={item}
                            key={key}
                            trackSelected={trackSelected}
                        />
                    );
                });
            } else {
                return finds.artists.items?.map((item, key) => {
                    return <ItemArtist item={item} key={key} />;
                });
            }
        }
    };

    const listPlayList = () => {
        if (playLists) {
            return playLists.items?.map((item, key) => {
                return (
                    <ItemPlayLists
                        item={item}
                        key={key}
                        addTrackToList={addTrackToList}
                    />
                );
            });
        } else {
            return <p>{strings.noPlayLists}</p>;
        }
    };

    const showLists = () => {
        return (
            <div className="search__container">
                <div className="search__container__notification" ref={modalRef}>
                    <div className="search__container__notification__container">
                        <p className="search__container__notification__container__text">{`\'${track?.name}\' añadida correctamente a la lista \'${listSelected?.name}\'`}</p>
                    </div>
                </div>
                <p className="search__container__title">{strings.title}</p>
                <div className="search__container__principal">
                    <input
                        className="search__container__principal__input"
                        autoFocus
                        id="Name"
                        type="text"
                        placeholder={strings.placeholder}
                        onInput={(e) => handleInput(e.currentTarget.value)}
                    ></input>
                    {finds !== null && (
                        <div className="search__container__principal__results">
                            <ul className="search__container__principal__results__list">
                                {list()}
                            </ul>
                        </div>
                    )}
                    {track && (
                        <div className="search__container__principal__playLists">
                            <p className="search__container__principal__playLists__title">
                                {strings.playListsTitle}
                            </p>
                            <ul className="search__container__principal__playLists__list">
                                {listPlayList()}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const checkLoging = () => {
        return userToken ? showLists() : <LoginRequired />;
    };

    return <div className={`${className} search`}>{checkLoging()}</div>;
};

Search.propTypes = {
    className: PropTypes.string,
    strings: PropTypes.object,
    type: PropTypes.string,
    userToken: PropTypes.any,
};

export default connect(mapStateToProps, null)(Search);
