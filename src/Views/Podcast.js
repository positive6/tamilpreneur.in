import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PodcastPage from "../Components/Podcast";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Podcast = () => {
  return (
    <div className="App">
      <Header />
      <PodcastPage />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </div>
  );
};

export default Podcast;
