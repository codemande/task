import "./styles/ClaimDetails.css";

function ClaimDetails() {
  return(
    <div className="claimDetails-container">
      <p>
        <span>Claim ID:</span> 12345678
      </p>
      <p>
        <span>Created On:</span> 2025-01-15
      </p>
      <p>
        <span>Claim Type:</span> Accidental Damage
      </p>
      <p>
        <span>Total Sum Insured:</span> ₦10,000
      </p>
      <p>
        <span>Device Balance:</span> ₦10,000
      </p>
      <p>
        <span>Status:</span> Completed
      </p>
      <p>
        <span>Insurer:</span> Axa Mansard
      </p>
    </div>
  )
}

export default ClaimDetails;