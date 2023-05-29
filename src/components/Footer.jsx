import { Link } from "react-router-dom"
import Logo from '../images/logo.png'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                The benefits of education for prisoners are well established. It gives them the opportunity to broaden their knowledge and acquire new skills that will facilitate their sustainable (re)integration into the labour market and society, while, at the same time, reducing recidivism and the attendant economic and social costs. Yet prisoners’ education remains overlooked and under-valued
                </p>
            </article>
            <article>
                <h4> Hyperlinks</h4>
                <a href='/' > Grassroot Africa</a>
                <a href='https://grassroot.academy' > Grassroot Africa</a>
                
                
                
                
            </article>
            <article>
                <h4> Get Started</h4>
                <a href='/signup'>Register </a>
                <a href='https://learn.grassroot.academy/sign_in'>Login </a>
            </article>
            <article>
                <h4> Contact Us</h4>
                <a href='mailto:Management@grassroot.academy' target='_blank' rel='noreferrer noopener'>Send Us A Mail</a>
            </article>
        </div>
        <div className="footer__copyright">
            <small>Grassroot Theme Powered by: Grassroot Software Academy</small>
        </div>
    </footer>
  )
}

export default Footer
