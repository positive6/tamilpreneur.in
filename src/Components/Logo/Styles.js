import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: black;
    h1 {
        font-size: 33px;
        color: rgb(247, 247, 247);
    }
    h3 {
        font-size: 22px;
        color: rgb(169, 169, 169);
    }
    @media only screen and (min-width: 1024px) {
        .content {
            padding: 13%;
        }
        img {
            width: 50%;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    }
`;
