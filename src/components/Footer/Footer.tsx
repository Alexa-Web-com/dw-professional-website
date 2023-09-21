import './Footer.css'
import logoDW from '../../assets/logo.png'

const Footer: () => JSX.Element = () => {
    return (
        <div className='footer'>
            <p>Copyright © 2023 </p>
            <a href='https://damianwilczynski.com' className='footer_link'>
                <img src={logoDW} alt='owner logo' className='footer_logo' width='15px' />
                <p className='footer_owner'>Damian Wilczyński</p>
            </a>
        </div>
    )
}

export default Footer