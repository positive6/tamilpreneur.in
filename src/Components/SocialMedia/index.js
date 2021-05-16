import fb from "../../img/fb.png";
import ReactPlayer from "react-player";
import { Container } from "./styles";
import linkedIn from "../../img/linkedin.png";
import insta from "../../img/insta.png";
import youtube from "../../img/youtube.png";
import googlePodcast from "../../img/googlePodcast.png";
import spotify from "../../img/spotify.png";
import applePodcast from "../../img/applePodcast_logo.png";
import anchor from "../../img/anchor_logo.png";
import thumbnail from "../../img/thumbnail.png";

const SocialMedia = () => {
  return (
    <Container>
      <div className="podcast">
        <h1 className="podcasttitle">
          Wanted to be a part of Tamilpreneur Club?
        </h1>
        <div className="podcasttext">
          <a href="https://club.tamilpreneur.in" target="_blank">
            <button>Click here to Join</button>
          </a>
        </div>
      </div>
      <h1 className="title">SOCIAL</h1>
      <div className="icons">
        <a href="https://www.facebook.com/tamilpreneurs/">
          <img src={fb} width="30px" height="30px" />
        </a>
        <a href="https://www.instagram.com/tamilpreneur/?hl=en">
          <img src={insta} width="30px" height="30px" />
        </a>
        <a href="https://www.linkedin.com/in/tamil-preneur-24459918a/">
          <img src={linkedIn} width="60px" height="30px" />
        </a>
        <a href="https://www.youtube.com/channel/UCwW3-c091Xm2ncsDNGIeRFA">
          <img src={youtube} width="40px" height="30px" />
        </a>
        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hNTg5M2YwL3BvZGNhc3QvcnNz">
          <img src={googlePodcast} width="30px" height="30px" />
        </a>
        <a href="https://open.spotify.com/show/5f59gJfY5VIqP3NkPJwi3d">
          <img src={spotify} width="40px" height="30px" />
        </a>
        <a href="https://podcasts.apple.com/us/podcast/tamilpreneur-tamil-entrepreneurship-podcast/id1483603526">
          <img src={applePodcast} width="30px" height="30px" />
        </a>
        <a href="https://anchor.fm/tamilpreneur">
          <img src={anchor} width="30px" height="30px" />
        </a>
      </div>
      <h1 className="title-youtube">WE ARE ON YOUTUBE TOO!</h1>
      <div className="youtube-video">
        <div className="video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ruv5kjihdxE"
            light={thumbnail}
          />
        </div>
        <div className="text">
          <h2>Watch similar videos here.</h2>
          <a
            href="https://www.youtube.com/channel/UCwW3-c091Xm2ncsDNGIeRFA"
            target="_blank"
          >
            <button class="youtube-button">Youtube</button>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default SocialMedia;
