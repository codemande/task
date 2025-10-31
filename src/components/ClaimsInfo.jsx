import "./styles/DeviceInfo.css";
import "./styles/ClaimsInfo.css";

function ClaimsInfo() {

  const claimsInfo = [
    {
      description: "Screen Damage",
      amount: "₦50,000",
    },
    {
      description: "Battery Issue",
      amount: "₦60,000",
    },
    {
      description: "Service Fee",
      amount: "₦10,000",
    },
  ];

  return (
    <div>
      <h2>Claims Information</h2>

      <div className="table-container">

        <table className="deviceInfo-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {claimsInfo.map((info, index) => (
              <tr key={index}>
                <td>{info.description}</td>
                <td>{info.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total">
        <p>Total: ₦120,000</p>
        <p>Amount Payable by Insurer: ₦120,000</p>
        <p className="totalLink">Amount Payable by Mona: ₦120,000</p>
      </div>

      <hr />
    </div>
  )
}

export default ClaimsInfo;