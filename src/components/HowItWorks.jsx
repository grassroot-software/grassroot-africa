import {FaEye} from 'react-icons/fa'
import {GiBiceps} from 'react-icons/gi'
import { GiCheckMark } from 'react-icons/gi'

import './howitworks.css'



const HowItWorks = () => {
    return (

        <>
            <section >
                < div className='container howItWorks__container'>
                    <div className='howItWorks__2'>
                        <h2 className='howItWorks_h2'> <FaEye /> Our Vision</h2>
                        <article className='howItWorks'>
                              <p><GiCheckMark />  To prepare the ‘less adequate’ for the world outside</p>  
                        </article>
            
                        <h2 className='howItWorks_h2'> <GiBiceps /> Our Mission  </h2>
                        <article className='howItWorks'>
                            <p><GiCheckMark />  Seeking to make inmates employable through  rehabilitation  and redirecting their paths towards social inclusion and  productivity,life fulfillment, , contributing to the development of their societies and ipso facto 
                                enhancing the role of prisons in national development.
                            </p> 
                        </article>
                    </div>

                    <div className='right__side'>
                        <h1>How It Works.</h1><br></br>
                            <p>During the full-time technical curriculum, student inmates 
                                spend 6 to 9 months learning the most in-demand skills in 
                                web development, developing thier technical skills, 
                                building projects, from simple scripts to full web apps 
                                and deployed systems, improving the skills they need to 
                                excel in the global job market.
                            </p>
                               
                    </div>
                </div>

            </section>

        </>
    )
}

export default HowItWorks