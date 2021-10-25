import styled from 'styled-components';

import MenuComponent from './MenuComponent';

export default styled(MenuComponent).attrs({})`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .menu-component {
        &__container{
            &__list{
                list-style-type: none;
                display: flex;
                flex-wrap: wrap;
                margin: 25px 20%;
                justify-content: center;
                &__element{
                    padding-inline-start: 0;
                    width: 300px;
                    height: 150px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #ffffff;
                    border-radius: 20px;
                    opacity: 1;
                    cursor: pointer;
                    margin: 25px;
                    &:hover{
                        background-color: rgb(255,255,255,.5);
                        transition: background-color ease .5s;
                    }
                    &__text{

                    }
                }
            }
            &__title{
                text-align: center;
                font-size: 2.7rem;
                font-weight: 600;
                margin: 25px 0;
            }
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {

    }

    @media (min-width: 1700px) {

    }

`;
