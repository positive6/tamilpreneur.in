import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 30%;
    background: black;
    
    .carousel-caption {
       padding-left:27%;
       display: flex;
       flex-direction: column;
       justify-content: center;
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
    @media only screen and (min-width: 320px) and (max-width: 425px) {
        flex-direction: column;
        .carousel-caption {
            padding-left:30%;
            top:48px;
        }
         h4{
           font-family: 'BebasNeueRegular', sans-serif;     
           font-size: 0.3rem;  
          }
    }
`;
