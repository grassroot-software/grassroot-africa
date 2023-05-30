import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import MakeDonation from "./makeDonation";


// Email Config
import {useRef} from 'react';
import emailjs from 'emailjs-com';

import AboutUsImage1 from '../images/img3.jpg'


const AboutGrassroot = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_603troq', 'template_swlyqkl', form.current, 'UvWQTJzb_i8apdc8o')
    
    e.target.reset()
     };

    return (
        <div>
            <Navbar />
            {/* <SmallerHeader title ="ABOUT GRASSROOT" image={HeaderImage}>
    Grassroot is run by an open community of experienced software engineers from Havard and universities around the world.
    </SmallerHeader> */}
    <section className='about__Vision about-page'>
        <div className='container about__Vision-container'>
            
            <div className='about__section-content'>
                <h1 className="about-heading"> About Grassroot</h1>
                <p>
                    By a show of Hands, How many of you either witnessed a child, parent, or friend from a 
                    poor background struggle with tuition in spite of a great desire to attain academic excellence?
                </p>
                <p>
                    Think about it. Did you ever feel helpless in their struggle? If you have, you're not alone
                </p>
                <p>
                    Many people who have lived in a low-income community, like myself where crime rates rise above 50%,  
                    have experienced the same feeling of helplessness when I see smart young  Africans resorting to crime due to a lack of academic opportunities.
                </p>
                <p>
                    That's why today,  I'm doing something about it 
                </p>
                <p>
                    My name is Samson Chuks and I'm the founder of Grassroot Africa. The organization that will equip African inmates with employable skills to 
                    enhance their chances of securing jobs after release from prison
                </p>
                <p>
                    Prisons may seem designed to strip inhabitants of their humanity, but some individuals discover new hope and strength during their incarceration
                </p>
                <p>
                    During the full-time technical training, student inmates spend 6 to 9 months learning the most in-demand skills in computer software engineering, developing 
                    their technical skills, building projects, from simple scripts to full web apps and deployed systems, and improving the skills they need to excel in the global job market.
                </p>
                <p>
                    Upon  graduation and release from prison,  we connect them to a  network of remote employers at home and abroad for on-site or remote  job placements in the domain of software development 
                </p>
                <p>
                    Our goal is To prepare the ‘less adequate’ for the world outside by making  African inmates employable through rehabilitation and redirecting their paths towards social inclusion and productivity, life fulfillment, contributing to the 
                    development of their societies, and ipso facto enhancing the role of prisons in national development.
                </p>

                <h1 className="sub_heading">Our Service is For God and Country</h1>
                <p> 
                    We invite you to support  the grassroot initiative 
                </p> <p>We seek donations in physical items like food, computers and accessories or in cash to :</p>
                

                <ul className="support-list">
                    <li>Establish a catering service in the prison and provide two square meals for enrolled inmates.</li>
                    <li>Provide computers for learning.</li>
                    <li>Finance the cost of transportation for  Grassroot teachers who volunteer their time and expertise without asking for financial rewards </li>
                </ul>
               <br />
               <br />


                <MakeDonation />

                <br />
                
                <h3 className="dontate__physical-items">For Physical items like food, computers, and computer accessories, please fill out the form below and  a Grassroot ambassador will get in touch</h3>
    
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Full Name' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='tel' name='telephone' placeholder='Phone Number' required />
                    <textarea name='message' rows='7' placeholder='Drop your message' required />
                    <button type='submit' className='btnStart'>Submit</button>
                </form>

            </div>
            <div className='about__Vision-image'>
                <img src={AboutUsImage1} alt='About Us' />
            </div>
        </div>
    </section>


    <Footer />
        </div>
    )
}

export default AboutGrassroot
