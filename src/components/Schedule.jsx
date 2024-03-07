import React, { useEffect } from 'react';
import styled from 'styled-components';
import One from '../assets/Numbers/one.svg';
import Two from '../assets/Numbers/two.svg';
import Three from '../assets/Numbers/three.svg';
// import Four from '../assets/Numbers/four.svg';
import Arrow from '../assets/Numbers/arrow.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Schedule = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <Section>
            <h1 >Event Schedule</h1>
            <Container>
                <CardContainer>
                    <Card>
                        <p>STEP</p>
                        <img src={One} alt="One" />
                        <h3>Registration</h3>
                        <p>Team registration and Abstract Submission <br />
                            <span>Last Date  : 5th March</span></p>
                    </Card>
                    <ArrowImage src={Arrow} />
                    <Card>
                        <p>STEP</p>
                        <img src={Two} alt="Two" />
                        <h3>SHORTLISTING</h3>
                        <p>Final Teams will be shortlisted based on their abstract and a preliminary review</p>
                    </Card>
                    <ArrowImage src={Arrow} />
                    <Card>
                        <p>STEP</p>
                        <img src={Three} alt="Three" />
                        <h3>Hackathon</h3>
                        <p>Final Round of Intensive 30 Hour Hackathon with four review checkpoints</p>
                    </Card>
                </CardContainer>
            </Container>

        </Section>
    );
};

export default Schedule;

const Section = styled.div`
  position: relative;
  max-width: 100vw;
  height: 100%;
  padding: 0px 104px;
  margin: auto !important;
  color: #fff;
  z-index: 1;
  h1{
    text-align: center;
    position: relative;
}
.from-right{
      flex-direction: row-reverse;
    }
    @media screen and (max-width: 768px) {
        padding: 20px;
        .from-right{
            flex-direction: column;
        }
    }


   @media screen and (max-width: 768px) {
       
    }

`

const Container = styled.div`
`

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto; 
    span{
        font-weight: 600;
        color: #FD0000;
    }
    .left{
        transform: rotate(180deg);
    }
    @media screen and (max-width: 768px) {
    .left{
        transform: rotate(90deg);
    }
        flex-direction: column;
}
`

const Card = styled.div`
    /* min-width: 180px; */
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 

	border: 2px solid rgba(39,41,42,0.2);
    background: rgba(39,41,42,0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.4);

    padding: 15px;
    h3{
        text-transform: uppercase;
        margin-bottom: 10px !important;
    }
    h3,p{
        margin: 0%;
    }
    img {
        margin-top: 10px;
        width: 50px;
    }
@media screen and (max-width: 768px) {
         width: 300px;
    }
    `;

const ArrowImage = styled.img`
    width: 150px;
    margin: 0px 12px;
    position: relative;
@media screen and (max-width: 768px) {
        transform: rotate(90deg);
        margin: 20px 0px;
    }
`
