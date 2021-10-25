import styled from 'styled-components';

import GoHome from './GoHome';

export default styled(GoHome).attrs({})`
    position: absolute;
    top: 10px;
    left: 1%;
    width: 125px;
    z-index: 5;
    .go-home {
        &__img{
            width: 100%;
            cursor: pointer;
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {

    }

    @media (min-width: 1700px) {

    }

`;
