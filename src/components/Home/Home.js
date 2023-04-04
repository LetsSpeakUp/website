import './Home.css'
import logoAlt from '../../images/logoAlt.png'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div className='head-container'>
            <div className='top'>
                <div>
                    <h2 className='head-quote'>
                        Empowering individuals, inspiring change; Building better personalities together.
                    </h2>
                    <a href='#events'><button className='event-button'>Get Started</button></a>
                </div>
                <img className='logo-img' src={logoAlt} alt='logo' />
            </div>
            <div id='contact'>
                <Contact />
            </div>
            <div id='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home