import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import LogoRevel from '../assets/ḶogoRevealLeo.mp4';
// import LogoRevel from '../assets/about.mp4';
import LogoRevel from '../assets/about.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1500 });
        if (videoRef.current) {
            videoRef.current.pause();
        }

        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Section>
            <h1 >About</h1>
            <Container>
                <Left>
                    <ImageContainer>
                        <img src={LogoRevel} alt="logo" />
                        {/* <Video ref={videoRef} loop muted>
                            <source src={LogoRevel} type="video/mp4" />
                        </Video> */}
                    </ImageContainer>
                </Left>
                <Right>
                    <h2>GENESIS</h2>
                    <Line />
                    <p>"GENESIS" is the 30-hour Intra College Hackathon by Department of Computer Science and Engineering. Experience the upgraded edition, bigger and bolder than ever before, continuing the legacy of Agnitioz. Showcase your talent, push your limits, compete and be recognized as the next generation of KNCET's Tech Leaders. Register and join us for the most awaited event of the year.</p>
                </Right>
            </Container>
        </Section>
    );
};

export default About;

const Section = styled.div`
    max-width: 100vw;
    height: 100%;
    position: relative;
    z-index: 1;
    color: #fff;
    h1{
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        /* padding: 20px; */
        p{
            text-align: justify;
        }
    }
`;

const Container = styled.div`
    width: 77%;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 1px solid white;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        padding: 20px;
        border: none;
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 40%;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: auto;
    }
`;

const ImageContainer = styled.div`
    width: 350px;
    height: 400px;
    border-radius: 10px;
    position: relative;
    box-shadow: -0px 0px 60px -12px #FD0000;

    img{
            width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    }
    @media screen and (max-width: 768px) {
        width: 280px;
        height: 350px;
        margin: auto;
        margin-bottom: 10px;
    }
    `;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    `;

const Right = styled.div`
    height: 55vh;
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const Line = styled.div`
    width: 150px;
    height: 5px;
    background-color: red;
`;
