import { IoMdStar } from "react-icons/io";
import "./styles/ClaimCard.css";

function ClaimCard() {
  return(
    <div className="claimCard-container">

      <div className="claimCard-details">
        <div className="claimCard-name">John Doe</div>
        <div className="claimCard-id">Claim ID: CL-134763</div>
        <div className="claimCard-tag">Accidental Damage</div>
        <div className="claimCard-text">
          Aliyu did a great job assisting us with the repairs of my iphone 13
        </div>
        <div className="claimCard-icon">
          <IoMdStar className="star-icon" /> <IoMdStar className="star-icon"/> <IoMdStar className="star-icon"/> <IoMdStar className="star-icon"/> <IoMdStar />
        </div>
        <div>
          2 months ago
        </div>
      </div>

      <div className="claimCard-rating-container">
        <p>4.5</p>
      </div>
    </div>
  )
}

export default ClaimCard;