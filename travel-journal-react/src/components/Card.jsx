export default function Card(){
    return(
        <div className="card">
            
                <img
                src="./images/mountFuji.png"
                alt="This is a place image"
                className="card-image">
                </img>
            
            <div className="card-discription">
                <div className="card-top-info">
                <img 
                src="./images/location.png" 
                alt="Location Image" 
                className="card-location-image"/>
                <h3 className="card-country-name">Japan</h3>
                <a href="">View on Google Maps</a>
                </div>
                
                <h1 className="card-place-name">Mount Fuji</h1>
                <p className="card-dates">12 Jan ,2021 - 24 Jan,2021</p>
                <p className="card-place-discription">Mount Fuji is the tallest mountain in Japan standing at 3776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>

       
    );
}