import "./styles/DeviceInfo.css";

function DeviceInfo() {
  const deviceInfo = [
    {
      id: "#DDD1",
      brand: "Samsung",
      model: "Galaxy S22",
      imei: "356789123456789",
      policy: "View More",
    },
  ];
  return (
    <div>
      <h2>Device Information</h2>

      <div className="table-container">
        <table className="deviceInfo-table">
          <thead>
            <tr>
              <th>Device ID</th>
              <th>Device Brand</th>
              <th>Model</th>
              <th>IMEI</th>
              <th>Policy Document</th>
            </tr>
          </thead>

          <tbody>
            {deviceInfo.map((device, index) => (
              <tr key={index}>
                <td className="link">{device.id}</td>
                <td>{device.brand}</td>
                <td>{device.model}</td>
                <td>{device.imei}</td>
                <td>
                  <span className="link">{device.policy}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />     
    </div>
  )
}

export default DeviceInfo;