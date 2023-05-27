import React from "react";
import Navbar from "./Navbar";
import MainHeader from "./MainHeader";
import About from "./About"
import HowItWorks from "./HowItWorks"
import Challenges from "./Challenges"
import Programs from "./Programs"
import Donate from "./Donate"
import Footer from "./Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainHeader />
            <About />
            <HowItWorks />
            <Programs />
            <Challenges />
            <Donate />
            <Footer />
        </div>
    )
}

export default Home