import styled from "styled-components";

import ItemTrack from "./ItemTrack";

export default styled(ItemTrack).attrs({})`
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid rgb(0, 0, 0, 0.5);
    cursor: pointer;
    position: relative;
    &:last-child {
        border-bottom: none;
    }
    .item-track {
        &__img {
            width: 64px;
        }
        &__text {
            max-width: 25vw;
            padding-right: 30px;
            &__track{
                display: flex;
                font-size: 1.35rem;
                padding: 8px 10px;
            }
            &__artists{
                display: flex;
                flex-wrap: wrap;
                list-style-type: none;
                padding-inline-start: 0;
                padding: 0 10px;
                &__item{
                    font-size: 1rem;
                    &__separator{
                        padding: 0 5px;
                    }
                }
            }
        }
        &__btn{
            position: absolute;
            right: 0;
            z-index: 5;
            cursor: pointer;
            border-radius: 50%;
            border: none;
            width: 30px;
            height: 30px;
            opacity: 1;
            &:hover{
                opacity: .5;
                transition: ease opacity .3s;
            }
            &__icon{
                font-size: 1.5rem;
            }
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        &:last-child {
        }
        .item-track {
            &__img {
                width: 70px;
            }
            &__text {

                &__track {
                    font-size: 1.5rem;
                }
                &__artists {
                    &__item {
                        font-size: 1.2rem;
                        &__separator{
                        }
                    }
                }
            }
            &__btn{
                width: 35px;
                height: 35px;
                &:hover{
                }
                &__icon{
                    font-size: 1.7rem;
                }
            }
        }
    }

    @media (min-width: 1700px) {
        &:last-child {
        }
        .item-track {
            &__img {
                width: 75px;
            }
            &__text {

                &__track {
                    font-size: 1.7rem;
                }
                &__artists {
                    &__item {
                        font-size: 1.4rem;
                        &__separator{
                        }
                    }
                }
            }
            &__btn{
                width: 40px;
                height: 40px;
                &:hover{
                }
                &__icon{
                    font-size: 1.9rem;
                }
            }
        }
    }
`;
