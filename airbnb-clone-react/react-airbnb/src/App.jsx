import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import { data } from './data/data'

import './App.css'

const cards = data.map((items)=>{
 
  return(<Card 
    key={items.id}
    img={items.img}
    rating={items.stats.rating}
    reviewCount={items.stats.reviewCount}
    title={items.title}
    price={items.price}
    country={items.location}/>) 

})


function App() {
 
 return (
    
     <>
     <h1>hy</h1>
     <Navbar/>
     <Hero/>
     {cards}
     
    
    
     </>
  )
}

export default App
