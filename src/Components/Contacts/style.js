import styled from "styled-components";

export const SubContainer = styled.div`
    p {
        margin-bottom : 24px;
        line-height: 1.5;
        font-size: 20px;
        font-family; Josefin Sans, Arial, sans-serif;
    }
    h4 {
        margin-bottom: 24px;
    }
    
    @media only screen and (min-width: 1024px) {
           max-width: 100%;
    }
    @media only screen and (min-width: 768px) {
            padding-left: 20px;
            padding-right: 20px;
     }
     @media only screen and (min-width: 320px) and (max-width: 425px) {
        max-width: 100%;
     }

     .text {
        font-size: 35px;
        color: #00008B;
        font-family:bebas neue;
        background-color:#ed5863;
        margin-left:30%;
        margin-right:30;
        @media only screen and (min-width: 320px) and (max-width: 425px) {
            margin: 10px;
         }
     }
}
`;
