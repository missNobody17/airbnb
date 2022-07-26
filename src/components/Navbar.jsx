import reactLogo from '../assets/airbnb-logo.png'
import './Navbar.css'

export function Navbar() {
  return (
    <div className="navbar">
      <img src={reactLogo} className="navbar--logo" alt="Airbnb logo" />
    </div>
  )
}

