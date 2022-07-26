import star from '../assets/star.png'
import './Card.css'

export function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.country === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="card">
      {Boolean(badgeText) && <div className="card--badge">{badgeText}</div>}
      <img src={`../src/assets/${props.item.image}`} className="card--img" alt="image" />
      <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.country}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
  )
}