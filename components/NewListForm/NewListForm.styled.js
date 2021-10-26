import styled from "styled-components";

import NewListForm from "./NewListForm";

export default styled(NewListForm).attrs({})`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    .new-list-form {
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
                    background-color: lightgreen;
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
                    width: 200px;
                    height: 50px;
                    font-size: 1.5rem;
                    border-radius: 20px;
                    border: none;
                    padding: 5px 20px;
                    margin: 0 20px;
                }
                &__btn {
                    border-radius: 20%;
                    padding: 16px;
                    font-size: 1rem;
                    margin-left: 20px;
                    border: none;
                    cursor: pointer;
                    background-color: lightblue;
                }
            }
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        .new-list-form {
            &__container {
                &__notification {
                    &__container {
                        &__text {
                            font-size: 1.4rem;
                        }
                    }
                }
                &__title {
                    font-size: 2.9rem;
                }
                &__principal {
                    &__input {
                        width: 225px;
                        height: 60px;
                        font-size: 1.7rem;
                    }
                    &__btn {
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }

    @media (min-width: 1700px) {
        .new-list-form {
            &__container {
                &__notification {
                    &__container {
                        &__text {
                            font-size: 1.6rem;
                        }
                    }
                }
                &__title {
                    font-size: 3.1rem;
                }
                &__principal {
                    &__input {
                        width: 250px;
                        height: 75px;
                        font-size: 1.9rem;
                    }
                    &__btn {
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }
`;
