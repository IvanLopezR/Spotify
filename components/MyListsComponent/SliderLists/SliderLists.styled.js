import styled from 'styled-components';

import SliderLists from './SliderLists';

export default styled(SliderLists).attrs({})`
    display: flex;
    flex-direction: column;
    width: min-content;
    .slider-lists {
        &__img{
            width: 200px;
            cursor: pointer;
        }
        &__name{
            font-size: 1.2rem;
            margin: 10px 0px;
        }
        &__link{
            cursor: pointer;
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {

    }

    @media (min-width: 1700px) {

    }

`;
