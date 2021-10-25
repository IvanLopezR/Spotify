import styled from 'styled-components';

import Cover from './Cover';

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
                    color: deeppink;
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
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {

    }

    @media (min-width: 1700px) {

    }

`;
