import './Home.css'
import About from './components/about/About'
import logoAlt from '../../images/logoAlt.png'
import Contact from '../Contact/Contact'
import Blogs from '../Blogs/Blog'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div className='head-container'>
            <div className='top'>
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    transition={{ duration: 1.3 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}>
                    <h2 className='head-quote'>
                        Empowering individuals, inspiring change; Building better personalities together.
                    </h2>
                    <a href='#events'><button className='event-button'>Get Started</button></a>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0, x: 300 }}
                    transition={{ duration: 1.3 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }} className='logo-img' src={logoAlt} alt='logo' />
            </div>
            
            <div id="About">
                <About />
            </div>

            <div id='blogs'>
                <Blogs />
            </div>

            <div id='contact'>
                <Contact />
            </div>
        </div>
    )
}

export default Home