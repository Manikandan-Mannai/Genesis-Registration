import React from 'react';
import styled from 'styled-components';
// import videoBackground from '../assets/Ḷogo Revealxx.webm';
// import video from '../assets/video.mp4';
import video from '../assets/test.gif';

const Hero = () => {
    return (
        <HeroSection>
            {/* <VideoBackground autoPlay loop muted>
                <source src={video} type="video/webm" />
            </VideoBackground> */}
            <div>
                <img src={video} alt='video'/>
            </div>
        </HeroSection>
    );
};

export default Hero;

const HeroSection = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    /* background-color: #000; */
    overflow: hidden; /* Ensure video doesn't extend beyond the section */
    
    div img{
            object-fit: contain; /* Ensure the video fits within the container */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    }
`;

// const VideoBackground = styled.video`
//     object-fit: contain; /* Ensure the video fits within the container */
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 1;
// `;
