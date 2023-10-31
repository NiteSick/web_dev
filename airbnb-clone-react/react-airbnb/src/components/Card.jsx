

export default function Card({
    
    img ,
    rating,
    reviewCount,
    country,
    title,
    price}){


        
    return(
        <div className="card-div">
       <div className="card">
        <img src= {`/images/${img}`}
        alt='This is a image of a swimmer'
        className='card-image'
        ></img>
        <div className="card-stats">
           <img src={`images/star.png`}
           alt='this is a star image'
           className='star'/>
           <span>{rating}</span>
           <span>{reviewCount}</span>
           <span>{country}</span>
          
        </div>
        <p>
           {title}
           </p>
           <p><span className='bold'>From ${price}</span>/peron</p>

       </div>
       </div>
    );
}