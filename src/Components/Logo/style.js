import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 30%;
    background: black;
    
    .carousel-caption {
        h3 {
            font-size: 28px;
            color: rgb(247, 247, 247);           
        }
        p {
            font-size: 20px;         
        }
       padding-left:27%;
       top: 65%;
       bottom: 10%;
       font-family: 'BebasNeueRegular', sans-serif;
        
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
