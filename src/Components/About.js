import styled from 'styled-components';

const Container = styled.div`
    padding: 56px 24px;
    .content {
        display: flex;
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
    h4 {
        margin-bottom: 24px;
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
            <h1 style={{"font-size": "33px", 'color': 'rgb(138, 150, 158)'}}>ABOUT US</h1>
            <div className="content">
                <SubContainer>
                    <h4>CXO Talks</h4>
                    <p>We organize regular interactive sessions with CXOs of top companies. Join our forum to attend these engaging sessions. 
DM us your email id in Instagram to join our private forum.</p>
                </SubContainer>
                <SubContainer>
                    <h4>Courseware</h4>
                    <p>
                    Are you a beginner, expert, or somewhere in between? Do you already have an idea or no? Not to worry! We offer a variety of high-quality courses designed to prepare you for your next step. Listen to our podcast for informative case studies and exciting entrepreneurship journeys. 
                    </p>
                </SubContainer>
                <SubContainer>
                    <h4>Mentorship</h4>
                    <p>Our mission is to bring 1 lakh entrepreneurs by 2025. We offer mentorship and guidance to take your idea to next level. We are open for brainstorming and helping you become an entrepreneur.</p>
                </SubContainer>
            </div>
        </Container>
    )
}

export default About;