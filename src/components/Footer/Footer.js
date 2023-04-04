import './Footer.css'
import logo from '../../images/logo.png'
import { FaDiscord, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'



const Footer = () => {

    const linkedinLink = 'https://www.linkedin.com/in/let-s-speak-up-340189251/'
    const whatsappLink = 'https://chat.whatsapp.com/GqHU7BShJUAGRi00J7tsBi'
    const twitterLink = 'https://twitter.com/Lets__Speak__Up'
    const instagramLink = 'https://instagram.com/_lets_speak_up'
    const discordLink = 'https://discord.gg/ezTXcKMsA2'
    const mailLink = "mailto:letsspeakup0802@gmail.com"

    return (
        <footer className='footer'>
            <div className='logo-container'>
                <a href='/' className='footer-image'><img src={logo} alt="Let's Speak Up" />Let's Speak Up</a>
            </div>
            <div className='text-container'>
                <h3>
                    Contact Us
                </h3>
                <div className='social-icons footer-icons'>
                    <div className='icon discord'><a target='_blank' rel='noreferrer' href={discordLink}><FaDiscord /></a></div>
                    <div className='icon instagram'><a target='_blank' rel='noreferrer' href={instagramLink}><FaInstagram /></a></div>
                    <div className='icon whatsapp'><a target='_blank' rel='noreferrer' href={whatsappLink}><FaWhatsapp /></a></div>
                    <div className='icon linkedin'><a target='_blank' rel='noreferrer' href={linkedinLink}><FaLinkedin /></a></div>
                    <div className='icon twitter'><a target='_blank' rel='noreferrer' href={twitterLink}><FaTwitter /></a></div>
                    <div className='icon mail'><a target='_blank' rel='noreferrer' href={mailLink}><FaEnvelope /></a></div>
                </div>

            </div>
        </footer>
    )
}

export default Footer