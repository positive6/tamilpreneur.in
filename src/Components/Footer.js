import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    color: rgb(164, 164, 164);
    font-size: 16px;
    background-color: black;
    padding: 20px;
    padding-bottom:10px;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: rgb(170, 182, 189);
    }
    position: fixed;
   left: 0;
   bottom: 0;
   width:97%;
`;


const Footer = () => {
    return(
        <Container>
            <div>Copyright © 2021 Tamilpreneur - All Rights Reserved.</div>
            <div>Powered by Tamilpreneur</div>
        </Container>
    )
}

export default Footer;