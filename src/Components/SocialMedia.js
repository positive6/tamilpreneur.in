import styled from 'styled-components';
import fb from '../img/fb.png';
import ReactPlayer from 'react-player'
import linkedIn from '../img/linkedin.png';
import insta from '../img/insta.png';
import youtube from '../img/youtube.png';
import googlePodcast from '../img/googlePodcast.png';
import spotify from '../img/spotify.png';
import applePodcast from '../img/applePodcast_logo.png';
import anchor from '../img/anchor_logo.png';


const Container = styled.div`
    .title {
        padding-bottom: 20px;
        text-align: center;
        color: rgb(138, 150, 158);
    }

    .mail {
        display: flex;
        height: 40px;
        background-color: rgb(246, 246, 246);
        justify-content: space-between;
        @media only screen and (min-width: 1024px) {
            padding: 56px 18%;
        }
    }
    button {
        background-color: rgb(213, 219, 222);
        font-size: 14px;
        color: rgb(21, 22, 22);
        border: none;
    }
    .icons {
        display: flex;
        height: 30px;
        padding-left: 25%;
        padding-right: 25%;
        justify-content: space-between;
        padding-bottom: 56px;
    }
    .subtitle {
        color: rgb(132, 144, 153);
        font-size: 30px;
        font-weight: 400;
    }
    .youtube-video {
        padding: 0 5% 30px;
        display: flex;
    }
    .text {
        padding: 8%;
        button {
            color: white;
            background-color: #16a1e7;
            padding: 10px;
            border-radius: 5px;
            &:focus {
                outline: none !important;
            }
        }
    }
`

const SocialMedia = () => {
    return(
        <Container>
            <h1 className="title">SOCIAL</h1>
            <div className="icons">
                <a href ="https://www.facebook.com/tamilpreneurs/"><img src={fb} 
                width="30px" height ="30px"/></a>
                <a href ="https://www.instagram.com/tamilpreneur/?hl=en"><img src={insta} 
                width="30px" height ="30px"/></a>
                <a href ="https://www.linkedin.com/in/tamil-preneur-24459918a/"><img src={linkedIn} 
                width="60px" height ="30px"/></a>
                <a href ="https://www.youtube.com/channel/UCwW3-c091Xm2ncsDNGIeRFA"><img src={youtube} 
                width="40px" height ="30px"/></a>
                <a href ="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hNTg5M2YwL3BvZGNhc3QvcnNz"><img src={googlePodcast} 
                width="30px" height ="30px"/></a>
                <a href ="https://open.spotify.com/show/5f59gJfY5VIqP3NkPJwi3d"><img src={spotify} 
                width="40px" height ="30px"/></a>
                <a href ="https://podcasts.apple.com/us/podcast/tamilpreneur-tamil-entrepreneurship-podcast/id1483603526"><img src={applePodcast} 
                width="30px" height ="30px"/></a>
                <a href ="https://anchor.fm/tamilpreneur"><img src={anchor} 
                width="30px" height ="30px"/></a>
            </div>
            <h1 className="title">We are on youtube</h1>
            <div className="youtube-video">
                <div>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ruv5kjihdxE' />
                </div>
                <div className="text">
                    <h2>To watch more videos</h2>
                    <a href="https://www.youtube.com/channel/UCwW3-c091Xm2ncsDNGIeRFA" target="_blank">
                        <button>Click here</button>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default SocialMedia;