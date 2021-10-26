import styled from 'styled-components';

import Search from './Search';

export default styled(Search).attrs({})`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    .search {
        &__container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &__notification {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: none;
                justify-content: center;
                align-items: center;
                z-index: 12;
                opacity: 0;
                &__container {
                    width: 30%;
                    height: 20%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    background-color: lightyellow;
                    padding: 50px;
                    border-radius: 20px;
                    &__text {
                        font-size: 1.2rem;
                    }
                }
            }
            &__title {
                text-align: center;
                font-size: 2.7rem;
                font-weight: 600;
                margin-bottom: 50px;
            }
            &__principal {
                width: max-content;
                display: flex;
                flex-direction: row;
                justify-content: center;
                height: 65%;
                &__input {
                    width: 300px;
                    height: 50px;
                    font-size: 1.5rem;
                    border-radius: 20px;
                    border: none;
                    padding: 5px 20px;
                    margin: 0 50px;
                }
                &__results {
                    height: 40vh;
                    overflow-y: scroll;
                    padding: 0 20px;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                    background-color: rgb(203, 118, 108, 0.5);
                    &__list {
                        padding-inline-start: 0;
                        list-style-type: none;
                    }
                }
                &__playLists {
                    width: 20%;
                    padding: 25px 25px 5px;
                    background-color: lightgreen;
                    height: 100%;
                    overflow-y: scroll;
                    border-bottom-left-radius: 20px;
                    border-bottom-right-radius: 20px;
                    border-top-right-radius: 20px;
                    &__title {
                        text-align: center;
                        font-size: 1.25rem;
                    }
                    &__list {
                        padding-inline-start: 20px;
                    }
                }
            }
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        .search {
            &__container {
                &__notification {
                    &__container {
                        &__text {
                            font-size: 1.4rem;
                        }
                    }
                }
                &__title {
                    font-size: 3rem;
                }
                &__principal {
                    &__input {
                        width: 325px;
                        height: 60px;
                        font-size: 1.6rem;
                    }
                    &__results {
                        &__list {
                        }
                    }
                    &__playLists {
                        &__title {
                            font-size: 1.4rem;
                        }
                        &__list {
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 1700px) {
        .search {
            &__container {
                &__notification {
                    &__container {
                        &__text {
                            font-size: 1.6rem;
                        }
                    }
                }
                &__title {
                    font-size: 3.2rem;
                }
                &__principal {
                    &__input {
                        width: 350px;
                        height: 70px;
                        font-size: 1.8rem;
                    }
                    &__results {
                        &__list {
                        }
                    }
                    &__playLists {
                        &__title {
                            font-size: 1.6rem;
                        }
                        &__list {
                        }
                    }
                }
            }
        }
    }
`;
