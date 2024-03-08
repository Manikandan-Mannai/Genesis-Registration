import React, { useEffect } from 'react';
import styled from 'styled-components';
import Document from '../assets/Gifs/doc.gif';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Registration = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (

        <Section>
            <h1 style={{ textAlign: 'center' }} >GUIDELINES AND REGISTRATION</h1>
            <Box>
                <Right>
                    <GuidelineBox>
                        <ol>
                            <li>Each team must consist of 3 students.</li>
                            <li>Teams in the hackathon must comprise members from the same academic year.</li>
                            <li>A Team can have participants from different departments but within same year.</li>
                            <li>Single registration is enough for the entire team.</li>
                            <li>Same team can submit multiple ideas and member of a team should not be in any other team.</li>
                            <li>Teams can choose their own problem statement and will be shortlisted based on the innovation and novelty of the idea.</li>
                            <li>Download the Sample Abstract for reference and submit your abstract in PDF format.</li>
                        </ol>
                        <>
                            <a href="https://storage.googleapis.com/registrationform-3f9a0.appspot.com/ABSTRACT.docx?Expires=1740497358&GoogleAccessId=firebase-adminsdk-wdi5h%40registrationform-3f9a0.iam.gserviceaccount.com&Signature=IQoegdw6g7tTVf0i2f2dI6kBugDNnP%2BAasG6VYRqGwQdzre0V7FZFkBCoif9cY91VCVBAz%2FrH%2F6xHcBSReqNBZS0O7IOSsLe2rPUpCxa8OHMRddsYzddqt9wb85tOFe6o95ePqB7I9BoS5CIetXQZgUFF3RVXgkGD%2FM%2FDg%2BAFT%2F9sZAG94q4Gd07uUK%2BHuT7u7cv7AFwp4MxARn7XtIlwt9LZt8AhQ1LDSeOJIBw1aeDPZkSD4aHV7ZOS%2BFuU%2Fh0YUv1kdtOUHt8RsehrcQ9WCjf%2FzF2NEl5q87StKuvH4BaB4RBJv2Z9ZSYtSA0FIyV6MvCfMwQ%2B77qXgNvNrhMaw%3D%3D ">
                                Download Here <img src={Document} alt='document' />
                            </a>
                        </>
                    </GuidelineBox>
                </Right>
                <Left>
                    <h1>Registration Closed !!</h1>
                </Left>
            </Box>
        </Section>

    )
}

export default Registration

const Section = styled.div`
    max-width: 100vw;
    height: 100%;
    padding: 20px 104px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-direction: column;
    position: relative;
    z-index: 1;
    h1{
        position: relative;
    }

    @media screen and (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const Box = styled.div`
    display: flex;
    gap: 50px;
    position: relative;
        @media screen and (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: flex-start;
    }
    `;

const Left = styled.div`
    flex-basis: 50%;
    h1{
        text-align: center;
    }
    `;

const GuidelineBox = styled.div`
border: 3px solid #444;
border-radius: 4px;
min-height: 450px;
padding: 10px;
li{
    margin-bottom: 15px;
}
a{
    display: flex;
    align-items: center;
    margin-left: 4%;
}
img{
    width: 42px;
}
@media screen and (max-width: 768px) {
        margin-bottom: 10%;
        min-height: 600px;
        a{
    justify-content: center;
}
    }
`;
const Right = styled.div`
    flex-basis: 45%;
`;

