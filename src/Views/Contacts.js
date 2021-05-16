import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contacts";
import styled from "styled-components";

const FooterContainer = styled.div`
  @media only screen and (min-width: 1024px) {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const Contacts = () => {
  return (
    <div className="App">
      <Header />
      <Contact />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

export default Contacts;
