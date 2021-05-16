import { SubContainer } from "./style";
import { Container } from "../styles";

const About = () => {
  return (
    <Container>
      <h1 style={{ "font-size": "33px", color: "rgb(138, 150, 158)" }}>
        Reach Out To Us
      </h1>
      <div className="content">
        <SubContainer>
          <p>
            If you have some suggestions, feedbacks or comments, please post a
            mail to <b>hello@tamilpreneur.in</b>. We will reach out to you
            within the next 24 hours.
            <br></br>
            If you want us to interview any tamil entrepreneurs, please mail us.
          </p>
        </SubContainer>
      </div>
      <br></br>
      <div>
        <SubContainer>
          <h1 className="text">Open for Collaborations</h1>
        </SubContainer>
      </div>
    </Container>
  );
};

export default About;
