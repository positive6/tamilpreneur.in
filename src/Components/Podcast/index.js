import { Container, SubContainer } from "../styles";

const podcastList = [
  {
    title:
      "S4E12 - TN Entrepreneurship Masterstroke : 1 Lakh Tamilpreneurs by 2025 | Tamil Entrepreneurship Podcast",
    link: "https://open.spotify.com/episode/5DRD29W0WaH5TxqoZf8E6X",
  },
  {
    title:
      "S4E11 - The future of VR : Srini and Sriram |Founders of GRAHA'S VR| VR startup",
    link: "https://open.spotify.com/episode/4T4so6G1rnYRftNyPgikzK",
  },
];

const Podcast = () => {
  return (
    <Container>
      <h1 style={{ "font-size": "33px", color: "rgb(138, 150, 158)" }}>
        Listen to our Podcasts
      </h1>
      <div className="content">
        <SubContainer>
          {Object.keys(podcastList).map((podcast) => (
            <li>
              <a href={podcastList[podcast].link} target="_blank">
                {podcastList[podcast].title}
              </a>
            </li>
          ))}
        </SubContainer>
      </div>
    </Container>
  );
};

export default Podcast;
