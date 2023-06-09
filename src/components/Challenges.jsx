import challengesImage from '../images/img2.jpg'


const Challenges = () => {
  return (
    <>
    
    <section className='about__Vision'>
        <div className='container about__Vision-container'>
            
            <div className='about__section-content'>
                <h1> Challenges</h1>
                <p> The biggest challenges confronted by inmates in their learning is the Lack of adequate feeding while enrolled.</p>
                <p>The inmates reported varying challenges from Inadequate feeding while enrolled, Logistical and security constraints which take precedence over the need for rehabilitation and inadequacy of resources in relation to the number of prisoners’ , 
                    lack of teachers coupled with hunger as main hindrances.</p>
                <p>Grassroot is a non profit NGO, we rely on donations from kind hearted individuals, organizations and governments to survive. </p>
            </div>
            <div className='about__Vision-image'>
                <img src={challengesImage} alt='About Us' />
            </div>
        </div>
    </section>
    </>
)
  }
export default Challenges
