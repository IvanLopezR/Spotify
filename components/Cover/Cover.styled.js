import styled from "styled-components";

import Cover from "./Cover";

export default styled(Cover).attrs({})`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .cover {
        &__header{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 5%;
            &__img{
                width: 200px;
                height: 200px;
            }
            &__title-container{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 30px;
                &__title{
                    font-size: 5rem;
                    color: #000000;
                }
                &__subtitle{
                    text-align: end;
                    font-size: 1.32rem;
                    margin: 10px 0;
                    color: #1ED760;
                }
            }
        }
        &__login{
            &__button{
                border: none;
                border-radius: 10px;
                background-color: #ffffff;
                cursor: pointer;
                &__text{
                    font-size: 1rem;
                    line-height: 2.5rem;
                    font-weight: 600;
                    padding: 10px;
                    color: #000000;
                    opacity: 1;
                }
                &:hover{
                    transition: opacity ease .5s;
                    opacity: .5;
                }
            }
        }
        &__signature{
            position: absolute;
            bottom: 3%;
            right: 2%;
            font-size: .8rem;
            border-bottom: 1px solid rgb(0,0,0,.5);
            padding: 5px 0;
            text-decoration: none;
            color: inherit;
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        .cover {
            &__header{
                &__img{
                    width: 220px;
                    height: 220px;
                }
                &__title-container{
                    &__title{
                        font-size: 5.5rem;
                    }
                    &__subtitle{
                        font-size: 1.46rem;
                    }
                }
            }
            &__login{
                &__button{
                    &__text{
                        font-size: 1.1rem;
                        line-height: 2.7rem;
                        padding: 12px;
                    }
                }
            }
            &__signature{
                font-size: .9rem;
            }
        }
    }

    @media (min-width: 1700px) {
        .cover {
            &__header{
                &__img{
                    width: 240px;
                    height: 240px;
                }
                &__title-container{
                    &__title{
                        font-size: 5.8rem;
                    }
                    &__subtitle{
                        font-size: 1.55rem;
                    }
                }
            }
            &__login{
                &__button{
                    &__text{
                        font-size: 1.2rem;
                        line-height: 2.9rem;
                        padding: 14px;
                    }
                }
            }
            &__signature{
                font-size: .9rem;
            }
        }
    }

`;
