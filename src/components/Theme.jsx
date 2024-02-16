import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ThemeData } from '../Constant';

import AOS from 'aos';
import 'aos/dist/aos.css';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Theme = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Section>
      <h1>THEMES</h1>
      <Container>
        <Right>
          <h1>Exciting Event Themes</h1>
        </Right>
        <Left>
          <DesktopCarousel>
            {ThemeData.map((item, index) => (
              <Card key={index}>
                <img src={item.img} alt='abstract_background' />
                <h4>{item.Title}</h4>
              </Card>
            ))}
          </DesktopCarousel>
          <MobileCarousel>
            <StyledCarousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
              {ThemeData.map((item, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <img src={item.img} alt='abstract_background' />
                    <h4>{item.Title}</h4>
                  </Card>
                </CarouselItem>
              ))}
            </StyledCarousel>
          </MobileCarousel>
        </Left>
      </Container>
    </Section>
  );
};

export default Theme;

const Section = styled.div`
  position: relative;
  color: #fff;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 104px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  h4{
    position: absolute;
    font-size: 22px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1;
  position: sticky;
  top: 0;
  align-self: flex-start;
  h1 {
    align-items: start;
    margin-top: 30%;
    background: #ffffff;
    background: linear-gradient(to bottom, #ffffff 20%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 768px) {
    position: static;
    h1{
      margin-top: 0%;
    }
  }
`;

const DesktopCarousel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileCarousel = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  `;

const CarouselItem = styled.div`
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledCarousel = styled(Carousel)`
  max-width: 100vw;
  margin: auto;
`;
