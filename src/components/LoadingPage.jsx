import React, { useEffect } from "react";
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LoadingPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    <Wrapper>
      <Container>
        <h2 data-aos="fade-up" data-aos-delay="0" className="small">Kongunadu College of Engineering and Technology</h2>
        <h1 data-aos="fade-up" data-aos-delay="900" className="depart">Department of CSE</h1>
      </Container>
    </Wrapper>
  )
}

export default LoadingPage;

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(to top, #192330, rgba(0, 0,  0.5));
  min-height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: #ffffff;
  text-align: center;
  width: 100%;

  .small {
    font-size: 32px;
    font-family: "Rethink Sans", sans-serif;
  }
  
  .depart {
    font-size: 72px !important;
    /* font-family: "League Spartan"; */
    font-weight: 800;
    font-family: "Rethink Sans", sans-serif;
    color: #FD0000;
  }

  h2 {
    font-size: 52px;
    margin: 3rem 0;
  }

  @media (max-width: 768px) {
    .depart {
      font-size: 48px !important; 
    }
  }
`;
