import './Footer.css'
import logoAlexaWeb from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Copyright © 2023 </p>
            {/* TODO */}
            <a href='https://damianwilczynski.com'
                target='_blank'
                rel='noreferrer'
                className='footer_link'
            >
                <p className='footer_owner'>Damian Wilczyński</p>
            </a>
        </div>
    )
}

export default Footer