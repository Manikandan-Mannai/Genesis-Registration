import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Star from '../assets/star.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Price = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <Section id="prizes-section">
            <Container>
                <h1 >PRIZES AND AWARDS</h1>
                <h3>
                    Cash prizes worth ₹10,000/-
                    Also, individuality prizes will be given for the best performing individuals and many more surprising gifts and prizes.
                    Honored with secret titles based on the participants' performance.
                </h3>
                <CardContainer>
                    <Card>
                        <Prize >
                            <div className='gold'>
                                <h2>1<sup>st</sup> Prize</h2>
                                <p>₹5,000</p>
                            </div>
                        </Prize>
                    </Card>
                    <Card>
                        <Prize >
                            <div className='gold'>
                                <h2>2<sup>nd</sup> Prize</h2>
                                <p>₹3,000</p>
                            </div>
                        </Prize>
                    </Card>
                    <Card>
                        <Prize>
                            <div className='gold'>
                                <h2>3<sup>rd</sup> Prize</h2>
                                <p>₹2,000</p>
                            </div>
                        </Prize>
                    </Card>
                </CardContainer>
            </Container>
        </Section>
    );
};

export default Price;

const Section = styled.div`
    width: 100%;
    height: 100%; /* Set height to viewport height for full-screen effect */
    position: relative;
    text-align: center;
    z-index: 1;
    overflow: hidden; /* Hide any overflowing content */
/* 
    background-image: url(${Star});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: -1px; Remove the gap between sections */

    h1, h3 {
        position: relative; /* Ensure they are positioned above the overlay */
        z-index: 1; /* Ensure they are above the overlay */
    }

    /* &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    } */
`;



const Container = styled.div`
    width: 80%;
    margin: auto;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;
`;

const CardAnimation = keyframes`
    0%, 100% {
        border-color: transparent;
    }
    50% {
        border-color: gold;
    }
`;

const Card = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #14181A;
    border: 2px solid transparent;
    margin: 10px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    animation: ${CardAnimation} 3s infinite; /* Apply animation */
`;

const Prize = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    
    .gold h2,p{
    font-family: 'Futura';
    font-size: 32px;
    text-transform: uppercase;
    line-height:1;
    text-align: center;
    background: linear-gradient(90deg, rgba(186,148,62,1) 0%, rgba(236,172,32,1) 20%, rgba(186,148,62,1) 39%, rgba(249,244,180,1) 50%, rgba(186,148,62,1) 60%, rgba(236,172,32,1) 80%, rgba(186,148,62,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;	
    animation: shine 3s infinite;
    background-size: 200%;
    background-position: left;

}
sup{
    text-transform: lowercase;
}
@keyframes shine {
  to{background-position: right}
 
}
`;

