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

    }

    @media (min-width: 1700px) {

    }

`;
