import styled from "styled-components";

import ItemArtist from "./ItemArtist";

export default styled(ItemArtist).attrs({})`
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgb(0, 0, 0, 0.5);
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
    .item-artist {
        &__img {
            width: 64px;
        }
        &__name {
            font-size: 1.25rem;
            padding: 0 10px;
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        &:last-child {
        }
        .item-artist {
            &__img {
                width: 70px;
            }
            &__name {
                font-size: 1.4rem;
            }
        }
    }

    @media (min-width: 1700px) {
        &:last-child {
        }
        .item-artist {
            &__img {
                width: 75px;
            }
            &__name {
                font-size: 1.6rem;
            }
        }
    }
`;
