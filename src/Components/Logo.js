import styled from 'styled-components';
import logo from '../img/logo.jpeg';

const Container = styled.div`
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


const Logo = () => {
    return(
        <Container>
            <img src={logo}/>
            <div className="content">
                <h1>WHERE PASSION MEETS EDUCATION</h1> 
                <h3>Building a community of full stack entrepreneurs!</h3>
            </div>
        </Container>
    )
}

export default Logo;