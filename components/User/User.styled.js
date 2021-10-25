import styled from 'styled-components';

import User from './User';

export default styled(User).attrs({})`
    position: absolute;
    top: 10px;
    right: 2%;
    width: 40px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .user {
        &__img{
            width: 100%;
            margin-left: 15px;
        }
        &__text{
            display: flex;
            flex-direction: column;
            text-align: end;
            &__name{
                font-size: 1rem;
            }
            &__email{
                font-size: .8rem;
            }
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {

    }

    @media (min-width: 1700px) {

    }

`;
