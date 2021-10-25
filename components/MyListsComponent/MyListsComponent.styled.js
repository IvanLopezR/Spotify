import styled from 'styled-components';

import MyListsComponent from './MyListsComponent';

export default styled(MyListsComponent).attrs({})`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    .my-lists-component {
        &__container{
            width: 80%;
            margin-top: -100px;
            &__title{
                text-align: center;
                font-size: 2.7rem;
                font-weight: 600;
                margin-bottom: 50px;
            }
            &__list{
                width: 70%;
            }
        }
    }

    .slick-slider {
        .slick-dots {
            position: absolute;
            display: flex !important;
            width: 80%;
            flex-direction: row;
            justify-content: center;
            margin-top: 25px;
            li {
                margin: 0 0.25rem;
                width: 8px;
                height: 8px;
                list-style-type: none;
                button {
                    font-size: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 0;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    padding-inline-start: 0;
                    &:before {
                        display: none;
                    }
                }
                &.slick-active {
                    button {
                        background-color: #ffffff;
                    }
                }
            }
        }
    }

    .sliderCustom {
        width: 100%;
        height: auto;
    }

    .slick-list {
        width: 100vw;
    }

    .slick-track{
        display: flex;
        flex-direction: row;
    }

    .slick-slide{
        display: flex;
        flex-direction: column;
    }

    .slick-prev, .slick-next{
        position: absolute;
        top: 45%;
        z-index: 5;
        cursor: pointer;
    }

    .slick-prev{
        left: 2%;
    }

    .slick-next{
        right: 2%;
    }

    @media (min-width: 1400px) and (min-height: 800px) {

    }

    @media (min-width: 1700px) {

    }

`;
