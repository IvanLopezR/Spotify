import styled from "styled-components";

import ItemPlayLists from "./ItemPlayLists";

export default styled(ItemPlayLists).attrs({})`
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgb(0, 0, 0, 0.5);
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
    .item-playlists {
        &__img{
            width: 60px;
            margin-right: 12px;
        }
        &__name{
            font-size: 1rem;
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        &:last-child {
        }
        .item-playlists {
            &__img{
                width: 68px;
            }
            &__name{
                font-size: 1.2rem;
            }
        }
    }

    @media (min-width: 1700px) {
        &:last-child {
        }
        .item-playlists {
            &__img{
                width: 75px;
            }
            &__name{
                font-size: 1.4rem;
            }
        }
    }
`;
