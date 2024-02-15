import React from "react";
import Hero from './Hero';
import Schedule from './Schedule';
import Theme from './Theme';
import CountUpComponent from './CountUpComponent';
import Price from './Price';
import Registration from './Registration';
import Footer from './Footer';
import FAQ from './FAQ';
import Timer from '../components/Timer'
import GridGallery from "./GridGallery";
import About from "./About";

const Home = () => {


    return (
        <>
            <Hero />
            <About />
            <GridGallery />
            <Timer />
            <Schedule />
            <CountUpComponent />
            <Price />
            <Theme />
            <Registration />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
