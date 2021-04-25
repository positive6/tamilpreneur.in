import { Container, SubContainer } from './Styles';

const About = () => {
    return(
        <Container>
            <h1 style={{"font-size": "33px", 'color': 'rgb(138, 150, 158)'}}>ABOUT US</h1>
            <div className="content">
                <SubContainer>
                    <h4>CXO Talks</h4>
                    <p>We organize regular interactive sessions with CXOs of top companies. Join our club to attend these engaging sessions.</p>
                </SubContainer>
                <SubContainer>
                    <h4>Courseware</h4>
                    <p>
                    Are you a beginner, expert, or somewhere in between? Do you already have an idea or no? Not to worry! We offer a variety of high-quality courses designed to prepare you for your next step. Listen to our podcast for informative case studies and exciting entrepreneurship journeys. 
                    </p>
                </SubContainer>
                <SubContainer>
                    <h4>Mentorship</h4>
                    <p>Our mission is to bring 1 lakh tamil entrepreneurs by 2025. We offer mentorship and guidance to take your idea to next level. We are open for brainstorming and helping you become an entrepreneur.</p>
                </SubContainer>
                <SubContainer>
                    <h4>Tamilpreneur Club</h4>
                    <p>Tamilpreneur Club is a private network for aspiring entrepreneurs. It is a one stop solution for mentor connect,
                        team building, networking, startup updates etc.</p>
                </SubContainer>
            </div>
        </Container>
    )
}

export default About;