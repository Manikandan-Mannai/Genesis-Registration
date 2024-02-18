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
                <img src={video} alt='video' />
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

    .mouse {
	width: 50px;
	height: 90px;
	border: 3px solid #333;
	border-radius: 60px;
	position: relative;
	&::before {
		content: '';
		width: 12px;
		height: 12px;
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		background-color: #333;
		border-radius: 50%;
		opacity: 1;
		animation: wheel 2s infinite;
		-webkit-animation: wheel 2s infinite;
	}
}

@keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
	}
}

@-webkit-keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
	}
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
