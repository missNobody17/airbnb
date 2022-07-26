import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import {Card} from './components/Card'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const cards = data.map(card =>  <Card key={card.id} item={card}/>/*<Card key={card.title} openSpots={card.openSpots} image=
    {`./src/assets/${card.coverImg}`} rating={card.stats.rating} reviewCount={card.stats.reviewCount} country={card.location} title={card.title} price={card.price}/>*/)

  return (
    <div className="app">
      <div className='app--items'>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
         {cards}
      </section>
      </div>
    </div>
  )
}

export default App
