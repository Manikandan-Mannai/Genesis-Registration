import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Star from '../assets/star.jpg'

const Timer = () => {
    const calculateTimeRemaining = useCallback(() => {
        const registrationDeadline = new Date('2024-03-15T00:10:00Z');
        const now = new Date();
        const difference = registrationDeadline - now;

        if (difference <= 0) {
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }, []);

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeRemaining]);

    return (
        <Section>
            <Left>
                <div>
                    <h2>Mark your <span>Calendar</span> </h2>
                    <p className='description'>Join us at the forefront of technological advancements and gain valuable insights at our upcoming technical symposium Kriya 2024 !</p>
                </div>
            </Left>
            <Right>
                <Row>
                    <Card>
                        <span>{timeRemaining.days}</span>
                        <p>days</p>
                    </Card>
                    <Card>
                        <span>{timeRemaining.minutes}</span>
                        <p>minutes</p>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <span>{timeRemaining.hours}</span>
                        <p>hours</p>
                    </Card>
                    <Card>
                        <span>{timeRemaining.seconds}</span>
                        <p>seconds</p>
                    </Card>
                </Row>
            </Right>
        </Section>
    );
};

export default Timer;

const Section = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 999;
    /* background-image: url(${Star});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
        &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    } */

    @media screen and (max-width: 768px) {
        margin: 0px auto;
        flex-direction: column;
        h2{
            font-size: 24px;
            text-align: center;
        }
        h3{
            font-size: 16px;
        }
    }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  position: relative;
  width: 30%;
  text-align: center;
  div{
    padding: 10px;
    text-align: left;

  }
    h2{
        font-size: 72px;
        text-align: left;
    }
      span {
        font-family: 'Compacta Std Bold';
        background: #FF0000;
        background: linear-gradient(to bottom, #FF0000 20%, #000000 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 122px;
    }
    .description{
        margin-bottom: 10%;
    }
    .calender-button{
        background-color: transparent;
        border-radius: 8px;
        text-decoration: none;
        padding: 10px 12px;
        border: 1px solid #fff;
        color: #fff;
    }
    
    @media screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        

        h2,div{
            text-align: center;
        }
    }
`;

const Row = styled.div`

`;

const Card = styled.div`
    position: relative;
    padding: 10px;
    margin-right: 10px;
    width: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        font-family: 'Compacta Std Bold';
        background: #FF0000;
        background: linear-gradient(to bottom, #FF0000 20%, #000000 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 278px;
        letter-spacing: -1px;    
    }
    
    p {
        font-size: 36px;
        margin-top: 5px;
        font-weight: 800;
        text-transform: uppercase;
        position: absolute;
        bottom: 10%;
        right: 0;
        letter-spacing: -3px;
    }

    @media screen and (max-width: 768px) {
        width: 150px;
        margin: 5px auto;
        span{
            font-size: 200px;
        }
        p{
            right: 10%;
            font-size: 26px;
        }
    }
`;
