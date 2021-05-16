import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0% 40px;
  a {
    color: black;
    &:hover {
      color: #007bff;
    }
  }
  li {
    font-size: 16px;
    padding-bottom: 10px;
  }
  .content {
    width: 100%;
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
    h2 {
        margin-left: 0px;
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
           max-width: 100%;
    }
    @media only screen and (min-width: 768px) {
            padding-left: 20px;
            padding-right: 20px;
     }
     @media only screen and (min-device-width: 320px) and (max-device-width: 425px) {
          max-width: 425px;
        }
    }
 }
`;
