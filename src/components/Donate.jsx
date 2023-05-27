import {useRef} from 'react';
import emailjs from 'emailjs-com';
import {GiCheckMark} from 'react-icons/gi'



const Donate = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_603troq', 'template_swlyqkl', form.current, 'UvWQTJzb_i8apdc8o')
    
    e.target.reset()
     };
    return (

    <>
    
    <section className='donate'>
        <div className='container donate__container'>
            
            <div className='donate__section-content'>
                
                
                <h3> Our Service is To God And Country</h3> 
                    <h3>We seek donations in physical items like food, computers and accessories or in cash to :
                </h3><br></br>
                
                <p><GiCheckMark/> Establish a catering service in the prison and provide two square meals for enrolled inmates.</p>
                <p><GiCheckMark/> Provide computers for learning. </p>
                <p><GiCheckMark/> Provide Internet for our teachers as most of them give lectures remotely via zoom. </p><br></br>


    
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Full Name' required />
                <input type='email' name='email' placeholder='Email' required />
                <input type='tel' name='telephone' placeholder='Phone Number' required />
                <textarea name='message' rows='7' placeholder='Drop your message' required />
                <button type='submit' className='btnStart'>Send Mesage</button>
        </form>
        </div>
    </section>
    </>
)
  }
export default Donate