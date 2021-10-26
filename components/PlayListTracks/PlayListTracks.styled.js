import styled from "styled-components";

import PlayListTracks from "./PlayListTracks";

export default styled(PlayListTracks).attrs({})`
    width: 80vw;
    position: absolute;
    bottom: 0;
    overflow-x: scroll;
    overflow-y: hidden;
    max-height: 100px;
    border-radius: 20px;
    background-color: rgb(203, 118, 108, 0.5);
    .playlist-tracks {
        &__list {
            display: flex;
            flex-direction: row;
            padding-inline-start: 0;
            list-style-type: none;
            li {
                display: flex;
                flex-direction: row;
            }
            img {
                height: 65px;
                width: 65px;
                padding: 0 15px;
                cursor: pointer;
            }
            div {
                display: none;
            }
            button {
                display: none;
            }
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
    }

    @media (min-width: 1700px) {
    }
`;
