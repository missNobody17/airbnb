import reactLogo from '../assets/photo-grid.png'
import './Hero.css'

export function Hero() {
  return (
    <div className="hero">
      <img src={reactLogo} className="hero--img" alt="Airbnb logo" />
      <div className='hero--content'>
        <h1 className='hero--title'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}