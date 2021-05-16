import styled from "styled-components";

export const Container = styled.div`
  padding: 56px 24px;
  .content {
    display: flex;
    flex-direction: row;
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
    @media only screen and (min-width: 1024px) {
           max-width: 25%;
    }
    @media only screen and (min-width: 768px) {
            padding-left: 24px;
            padding-right: 24px;
     }
     @media only screen and (min-width: 481px) {
        width: 481px;   
        p {
            padding-right: 24px;
        }    
    }
    @media only screen and (min-width: 320px) {
        width: 320px;
        p{
            width: 320px;
            padding-right: 24px;
        }
    }

`;
