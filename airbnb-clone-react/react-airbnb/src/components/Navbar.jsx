import logo from '../images/logo.png'
export default function Navbar(){
    return(
        <nav>
            
                <img 
                className='nav-logo'
                src={logo} alt='airbnb-logo' />
        </nav>
    )
}