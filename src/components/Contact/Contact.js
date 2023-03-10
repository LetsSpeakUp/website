import './Contact.css'
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {

    const linkedinLink = 'https://www.linkedin.com/in/let-s-speak-up-340189251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BYcB7rx6cSK2SbReHkjgNzw%3D%3D'
    const whatsappLink = 'https://chat.whatsapp.com/GqHU7BShJUAGRi00J7tsBi'
    const twitterLink = 'https://twitter.com/Lets__Speak__Up'
    const instagramLink = 'https://instagram.com/_lets_speak_up'
    const discordLink = 'https://discord.gg/ezTXcKMsA2'

    return (
        <div className='contact-container'>
            <h2>
                Connect with us
            </h2>
            <p>
                on various platforms to get access to all the events and resources
            </p>
            <div className='social-icons'>
                <div className='icon discord'><a href={discordLink}><FaDiscord /></a></div>
                <div className='icon instagram'><a href={instagramLink}><FaInstagram /></a></div>
                <div className='icon whatsapp'><a href={whatsappLink}><FaWhatsapp /></a></div>
                <div className='icon linkedin'><a href={linkedinLink}><FaLinkedin /></a></div>
                <div className='icon twitter'><a href={twitterLink}><FaTwitter /></a></div>
            </div>

        </div>
    )
}

export default Contact