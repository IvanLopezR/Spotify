import styled from 'styled-components';

import LoginRequired from './LoginRequired';

export default styled(LoginRequired).attrs({})`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .login-required {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__img{
            width: 150px;
        }
        &__text{
            font-size: 1rem;
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        .login-required {
            &__img{
                width: 175px;
            }
            &__text{
                font-size: 1.3rem;
            }
        }

    }

    @media (min-width: 1700px) {
        .login-required {
            &__img{
                width: 200px;
            }
            &__text{
                font-size: 1.5rem;
            }
        }
    }

`;
