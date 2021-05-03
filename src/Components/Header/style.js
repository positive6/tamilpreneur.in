import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 16px;
    font-size: 16px;
    @media only screen and (max-width : 481px) {
        flex-direction: column;
    }
    justify-content: space-between;
    a {
        text-decoration: none;
        padding-left: 32px;
        padding-top:6px;
        color:rgb(27, 27, 27);
        @media only screen and (max-width: 481px) {
            padding-left: 0px;
            padding-right: 10px;
        }
    }
    a:hover{
        color: blue;
    }  
    .links {
        padding-top: 8px;
        font-weight: 600;
        color:#ed5863;
        display: flex;
        list-style-type: none;
    }
    .title {
        font-size: 30px;
        font-weight: 600;
        font-family: BEBAS NEUE;
        color:#ed5863;
    }   
`