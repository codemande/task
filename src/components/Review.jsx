import { LuSquarePlay } from "react-icons/lu";
import "./styles/Review.css";

function Review() {
  return(
    <div className="review-container">

      <div>
        <span className="review-demage-text">Review Damage:</span> <span className="review-demage">Watch Video <LuSquarePlay className="review-demage-icon" /></span>
      </div>

      <h2>General Description</h2>
      <div className="description-container">
        <p className="description-header">When</p>
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div className="description-container">
        <p className="description-header">Where</p>
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div className="description-container">
        <p className="description-header">How</p>
        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

    </div>
  )
}

export default Review;