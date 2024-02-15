import React from 'react';
import styled from 'styled-components';
import { AiFillPhone } from 'react-icons/ai';
import Star from '../assets/star.jpg'

const Footer = () => {
  return (
    <StyledFooter>
      <FlexBox>
        <LeftSection>
          <p>All rights reserved by <span>TITANS™</span></p>
        </LeftSection>
        <RightSection>
          <Subheading>STUDENT CO-ORDINATORS</Subheading>
          <Contacts>
            <Contact>
              <ContactIcon><AiFillPhone /></ContactIcon>
              <ContactText>
                <a href="tel:+919361067203"><span>Arun Kumar KJ</span>: +91 9361067203</a>
              </ContactText>
            </Contact>
            <Contact>
              <ContactIcon><AiFillPhone /></ContactIcon>
              <ContactText>
                <a href="tel:+916383241428"><span>Manikandan A</span> : +91 6383241428</a>
              </ContactText>
            </Contact>
            <Contact>
              <ContactIcon><AiFillPhone /></ContactIcon>
              <ContactText>
                <a href="tel:+916385761464"><span>Gayathri T</span>: +91 6385761464</a>
              </ContactText>
            </Contact>
          </Contacts>
        </RightSection>
      </FlexBox>
      <Copyright>
        Developed by XYZ.
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;


/* position: relative;
background-position: center;
background-image: url(${Star});
background-size: cover;
background-repeat: no-repeat; */

h1{
  position: relative;
}
&::before {
  content: '';
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (min-width: 768px) {
    padding: 20px 104px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftSection = styled.div`
  flex-basis: 100%;
  margin-bottom: 20px;

  
span {
  font-size: 24px;
  font-weight: 800;
  height: 300px;
  width: 100%;
  background-image: url("https://dl.dropbox.com/s/r2s8s2r17wi0xm6/flame.png?dl=0");
  background-position: 0 -1000px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fire 4s linear infinite;
}

h1 {
  color: #fff;
  font-size: 80px;
  text-align: center;
}

@keyframes fire {
  0% {
    background-position: 0% -50%;
  }
  100% {
    background-position: 0% -25%;
  }
}


  @media (min-width: 768px) {
    flex-basis: 40%;
    margin-bottom: 0;
  }
`;

const RightSection = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-basis: 40%;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  `;

const Subheading = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  `;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  `;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  `;

const ContactIcon = styled.span`
  margin-right: 10px;
  font-size: 20px;
  `;

const ContactText = styled.span`
  font-size: 16px;
  line-height: 1.2; 
  span{
    font-weight: 800;
  }
  a{
    font-weight: 300;
  }
  `;

const Copyright = styled.div`
  position: relative;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  
  @media (min-width: 768px) {
    text-align: right;
  }
`;
