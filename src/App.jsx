import ClaimDetails from "./components/ClaimDetails"
import DeviceInfo from "./components/DeviceInfo";
import Parties from "./components/Parties";
import ClaimsInfo from "./components/ClaimsInfo";
import Review from "./components/Review";
import ClaimCard from "./components/ClaimCard";
import Approval from "./components/Approval";
import "./App.css";

function App() {

  return (
    <div className="app-container">
      <header className="app-header">Repair Claim Details</header>
      <div className="app-components">
        <ClaimDetails/>
        <DeviceInfo/>
        <Parties/>
        <ClaimsInfo/>
        <Review/>
        <ClaimCard/>
        <Approval/>
      </div>
    </div>
  )
}

export default App
