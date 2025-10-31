import "./styles/DeviceInfo.css";

function Parties() {
  const partiesInfo = [
    {
      name: "Davies",
      user: "Customer",
      email: "X@gmail.com",
      phone: "08034289834",
    },
    {
      name: "Mr Obi",
      user: "Sales & Repair",
      email: "X@gmail.com",
      phone: "08034289834",
    },
    {
      name: "Chuks",
      user: "Team Member",
      email: "X@gmail.com",
      phone: "08034289834",
    },
  ];

  return (
    <div>
      <h2>Parties</h2>

      <div className="table-container">

        <table className="deviceInfo-table parties-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Type</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>

          <tbody>
            {partiesInfo.map((info, index) => (
              <tr key={index}>
                <td>{info.name}</td>
                <td>{info.user}</td>
                <td>{info.email}</td>
                <td>{info.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Parties;