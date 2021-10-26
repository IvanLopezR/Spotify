import styled from "styled-components";

import User from "./User";

export default styled(User).attrs({})`
    position: absolute;
    top: 10px;
    right: 1%;
    width: 40px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    .user {
        &__img {
            width: 100%;
            margin-left: 15px;
        }
        &__text {
            display: flex;
            flex-direction: column;
            text-align: end;
            &__name {
                font-size: 1rem;
            }
            &__email {
                font-size: 0.8rem;
            }
        }
    }

    @media (min-width: 1400px) and (min-height: 800px) {
        .user {
            &__img {
            }
            &__text {
                &__name {
                    font-size: 1.1rem;
                }
                &__email {
                    font-size: 0.9rem;
                }
            }
        }
    }

    @media (min-width: 1700px) {
        .user {
            &__img {
            }
            &__text {
                &__name {
                    font-size: 1.2rem;
                }
                &__email {
                    font-size: 1rem;
                }
            }
        }
    }
`;
