import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import one from '../assets/gallery/one.jpg'
import Three from '../assets/gallery/three.jpg'
import Five from '../assets/gallery/five.jpg'
import Six from '../assets/gallery/six.jpg'
import Baskar from '../assets/gallery/Baskar.jpg'
import Thatha from '../assets/gallery/Thatha.jpg'
import katta from '../assets/gallery/katta.jpg'
import dean from '../assets/gallery/dean.jpg'
import game from '../assets/gallery/game.jpg'
import red from '../assets/gallery/red.jpg'
import table from '../assets/gallery/table.jpg'
import it from '../assets/gallery/it.jpg'


const GridGallery = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Section>
      <h1 >Gallery</h1>
      <DesktopView>
        <Gallery>
          <GalleryItem className='gallery__item--lg'>
            <img src={one} alt="photos" />
          </GalleryItem>
          <GalleryItem>
            <img src={katta} alt='photos' />
          </GalleryItem>
          <GalleryItem className='gallery__item--vert'>
            <img src={Three} alt='three' />
          </GalleryItem>
          <GalleryItem>
            <img src={game} alt="photos" />
          </GalleryItem>
          <GalleryItem className='gallery__item--hor'>
            <img src={Five} alt="photos" />
          </GalleryItem>
          <GalleryItem className='gallery__item'>
            <img src={Thatha} alt="photos" />
          </GalleryItem>
          <GalleryItem className=''>
            <img src={Six} alt="photos" />
          </GalleryItem>
          <GalleryItem className='gallery__item--hor'>
            <img src={table} alt="photos" />
          </GalleryItem>
          <GalleryItem className='gallery__item--ver'>
            <img src={red} alt="photos" />
          </GalleryItem>
          <GalleryItem className='gallery__item--ver'>
            <img src={it} alt="photos" />
          </GalleryItem>
          <GalleryItem className='gallery__item--hor'>
            <img src={Baskar} alt="photos" />
          </GalleryItem>
          <GalleryItem className='gallery__item--hor'>
            <img src={dean} alt="photos" />
          </GalleryItem>
        </Gallery>
      </DesktopView>
      <MobileView>
        <StyledCarousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
          <CarouselItem>
            <Card>
              <img src={one} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={Three} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={Five} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={Six} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={Baskar} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={Thatha} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={katta} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={dean} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={game} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={red} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={table} alt="photos" />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <img src={it} alt="photos" />
            </Card>
          </CarouselItem>
        </StyledCarousel>
      </MobileView>
    </Section>
  )
}

export default GridGallery

const Section = styled.div`
  position: relative;
  max-width: 100vw;
  z-index: 1;
  color: #fff;
  margin-bottom: 4%;
  h1{
    text-align: center;
  }
@media screen and (max-width: 768px) {
    padding: 20px;
}
`

const Gallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  max-width: 1200px;
  margin: 10px auto;
  padding: 0 10px;
`;

const MobileView = styled.div`
 display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const DesktopView = styled.div`
@media screen and (max-width: 768px) {
    display: none;
}
`;

const GalleryItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &.gallery__item--hor {
    grid-column: span 2;
  }

  &.gallery__item--vert {
    grid-row: span 2;
  }

  &.gallery__item--lg {
    grid-column: span 2;
    grid-row: span 2;
  }
  
`;

const StyledCarousel = styled(Carousel)`
  max-width: 100vw;
  margin: auto;
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
      border-radius: 12px;
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