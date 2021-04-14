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
        line-height: 2;
        font-size: 20px;
        font-family; Josefin Sans, Arial, sans-serif;
    }
    h4 {
        margin-bottom: 24px;
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
            <h1 style={{"font-size": "33px", 'color': 'rgb(138, 150, 158)'}}>Reach Out To Us</h1>
            <div className="content">        
                <SubContainer>
                    <p>
                      If you have some suggestions, feedbacks or comments, please post a mail to <b>hello@tamilpreneur.in</b>.
                      We will reach out to you within the next 24 hours.
                      <br></br>
                      If you want us to interview any tamil entrepreneurs, please mail us.
                      <br></br> 
                      We are also open for collaborations.
                    </p>
                </SubContainer>
            </div>
        </Container>
    )
}

export default About;