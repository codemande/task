import  { useState } from "react";
import "./styles/Approval.css";

function Approval() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="approval-container">
      <div>
        <p><span>Approval by: </span>John Doe</p>
        <p><span>Edited by: </span>John Doe</p>
        <p><span>Date & Time :</span>25-02-2025 10:21</p>
      </div>

      <div>
        <button className="approval-track-btn" onClick={() => setIsOpen(true)}>Track Progress</button>
      </div>

      {isOpen && (
        <div className="approval-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="track-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Track Your Progress</h2>
            <p>Here you can view your progress</p>

            <div className="modal-btn-container">
              <button className="modal-btn-close" onClick={() => setIsOpen(false)}>Close</button>
              <button className="modal-btn-ok">Ok</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Approval;