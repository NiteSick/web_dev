import heroImage from '../images/groupImage.png'
export default function Hero(){
    return(
        <div className='hero-main-div'>
        <img 
        className='hero-image'
        src={heroImage} 
        alt="This is a hero imge" />

        <h1 className='hero-heading'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}