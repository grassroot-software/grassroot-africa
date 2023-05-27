import AboutUsImage1 from '../images/img1.jpg'


const About = () => {
  return (
    <>
    
    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            
            <div className='about__section-content'>
                <h1> About Grassroot</h1>
                <p>
                Prisons may seem designed to strip inhabitants of their humanity, but some individuals discover new hope and strength during their incarceration. 
                We believe  that Correctional education has the potential to lead to change in the hitherto undesirable behaviour patterns of offenders. 
                The idea behind this scheme is to promote a paradigm shift in their thought processes, equip them with employable skills to 
                enhance their chances of securing jobs after release from prison.
                An individuals’ understanding of reality is changed as a result of new information or situations that challenges previously held assumptions. through perspective transformation in their personal development by becoming more critically aware of their beliefs and feelings about themselves and their roles in society.
                </p>
      
              
            </div>
            <div className='about__Vision-image'>
                <img src={AboutUsImage1} alt='About Us' />
            </div>
        </div>
    </section>
    </>
)
  }
export default About