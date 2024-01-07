import React from 'react';
import Hero from "./Hero";
import Genres from './Genres';
import NewBooks from "./NewBooks"
import Books from './Books';
import AboutUs from './AboutUs';
const Home= ({dark}) => {
    return (
        <>
            <Hero blackColor={dark}/>
            <Genres blackColor={dark} />
            <NewBooks blackColor={dark} />
            <Books blackColor={dark}/>
            <AboutUs blackColor={dark}/>
        </>
    );
};

export default Home;