import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

import Department from '../assets/Gifs/department_gif.gif'
import Clock from '../assets/Gifs/Clock.gif'
import Prize from '../assets/Gifs/Prize.gif'
import Theme from '../assets/Gifs/Theme.gif'


const CountUpComponent = () => {
    const [activateCountUp, setActivateCountUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('#countup-section');
            const scrollPosition = window.innerHeight + window.scrollY;
            const sectionPosition = section.offsetTop + section.offsetHeight / 2;

            if (scrollPosition >= sectionPosition) {
                setActivateCountUp(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <CountUpWrapper id="countup-section">
            <Box className='box'>
                <CountUpBox>
                    {/* <FaClock className='icon' /> */}
                    <img src={Clock} alt="" className='icon' />
                    <div className='text'>
                        <CountUp end={activateCountUp ? 30 : 0} duration={5} className='title' />
                        <p>Hours</p>
                    </div>
                </CountUpBox>
                <CountUpBox>
                    <img src={Department} alt="" className='icon' />
                    <div className='text'>
                        <CountUp end={activateCountUp ? 9 : 0} duration={5} className='title' />
                        <p>Departments</p>
                    </div>
                </CountUpBox>
                <CountUpBox>
                    <img src={Theme} alt="" className='icon' />
                    <div className='text'>
                        <CountUp end={activateCountUp ? 9 : 0} duration={5} className='title' />
                        <p>Themes</p>
                    </div>
                </CountUpBox>
                <CountUpBox>
                    <img src={Prize} alt="" className='icon' />
                    <div className='text'>
                        <CountUp end={activateCountUp ? 3 : 0} duration={5} className='title' />
                        <p>Winners</p>
                    </div>
                </CountUpBox>
            </Box>
        </CountUpWrapper>
    );
};

export default CountUpComponent;

const CountUpWrapper = styled.div`
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40vh;
            padding: 20px 0px;
            margin: 4% 0px;
            z-index: 1;
            /* background-color: #000; */
`;

const Box = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75%;
            max-width: 800px;
            margin: auto;
            padding: 25px;
            border-radius: 14px;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(11.5px);
            border: 1px solid rgba(255, 255, 255, 0.18);

            @media screen and (max-width: 768px) {
                flex-wrap: wrap;
                padding: 10px;
            }
`;

const CountUpBox = styled.div`
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 10px;
            font-size: 20px;
            color: #fff;
            div {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .title {
                margin-right: 10px;
            }
            .text {
                margin-top: 10px;
                text-align: center;
            }
            .icon{
                width: 62px;
                color: #FD0000;
            }
            @media screen and (max-width: 768px) {
                width: 50%;
                font-size: 16px;
                margin: 10px auto;
            }
`;

