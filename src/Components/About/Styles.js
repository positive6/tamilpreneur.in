import styled from 'styled-components';

export const Container = styled.div`
    padding: 56px 24px;
    .content {
        display: flex;
        @media only screen and (max-width: 481px) {
            flex-direction: column;
        }
    }
    h1 {
        text-align: center;
    }
`;

export const SubContainer = styled.div`
    p {
        margin-bottom : 24px;
        line-height: 1.5;
        font-size: 16px;
        font-family; Josefin Sans, Arial, sans-serif;
    }
    h4 {
        margin-bottom: 24px;
    }
    button {
        background-color: rgb(223, 227, 230);
        color: rgb(27, 28, 28);
        min-height: 48px;
        padding: 8px 32px;
        border: none;
        font-size: 14px;
        font-weight: 600;
    }
    @media only screen and (min-width: 1024px) {
           max-width: 33.33%;
    }
    @media only screen and (min-width: 768px) {
            padding-left: 24px;
            padding-right: 24px;
     }
`;
