import styled from 'styled-components';

const Container = styled.div`
    padding: 0 0% 40px;
    .content {
        width: 300%;
    }
    h1 {
        text-align: center;
    }
`;

const SubContainer = styled.div`
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
           max-width: 33.33%;
    }
    @media only screen and (min-width: 768px) {
            padding-left: 24px;
            padding-right: 24px;
     }
`;

const About = () => {
    return(
        <Container>
            <h1 style={{"font-size": "33px", 'color': 'rgb(138, 150, 158)'}}>Listen to Our Podcast</h1>
            <div className="content">        
                <SubContainer>
                    <h2>Podcast Coming Soon!</h2>
                </SubContainer>
                
            </div>
        </Container>
    )
}

export default About;