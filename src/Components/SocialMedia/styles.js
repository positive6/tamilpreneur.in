import styled from 'styled-components';

export const Container = styled.div`
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
        @media only screen and (max-width: 481px) {
            padding-left: 25px;
        }
    }
    .subtitle {
        color: rgb(132, 144, 153);
        font-size: 30px;
        font-weight: 400;
    }
    .youtube-video {
        padding: 0 5% 30px;
        display: flex;
        @media only screen and (max-width: 481px) {
            flex-direction: column;
        }
    }
    .react-player__preview {
        @media only screen and (max-width: 481px) {
            width: 320px !important;
            height: 180px !important; 
        }
    }
    .video {
        @media only screen and (max-width: 481px) {
            height: 180px !important; 
        }
    }
    .podcast {
        padding: 0 30% 30px;
        display: flex;
        background-color: black;
        background-image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.futurelearn.com%2Fcourses%2Fpodcasting&psig=AOvVaw0BfRkERQolh6WfTuoH9jQ5&ust=1618412656162000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNie6I2_--8CFQAAAAAdAAAAABAD";
        @media only screen and (max-width: 481px) {
            flex-direction: column;
            padding: 25px;
        }
    }
    .text {
        padding: 8%;
        @media only screen and (max-width: 481px) {
            padding: 5%;
        }
        button {
            color: white;
            background-color: #16a1e7;
            padding: 10px;
            border-radius: 5px;
            &:focus {
                outline: none !important;
            } 
            @media only screen and (max-width: 481px) {
                margin-left: 40%;
            }
        }
    }
    .podcasttext {
        padding: 0 0% 60px;
        @media only screen and (max-width: 481px) {
            padding: 0px;
        }
        button {
            color: white;
            background-color: #16a1e7;
            padding: 13px;
            border-radius: 10px;
            margin-top: 90px;
            margin-left: 50px;
            &:focus {
                outline: none !important;
            }
            @media only screen and (max-width: 481px) {
                margin-top: 10px;
            }
        }
    }
    .podcasttitle{
        padding-bottom: 20px;
        text-align: center;
        margin-top: 80px;
        margin-left: 0px;
        color: rgb(138, 150, 158);
        @media only screen and (max-width: 481px) {
            margin-top: 0px;
        }
    }
`