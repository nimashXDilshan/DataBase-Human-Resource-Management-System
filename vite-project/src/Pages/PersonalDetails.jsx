import React, { useEffect, useState } from "react";
function PersonalDetails() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/Employee")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format as MM/DD/YYYY
  };
  return (
    <div className="container mx-auto p-4">
      {data.length > 0 ? (
        <table className="min-w-full table-auto">
          <tbody>
            {/* Row for ID */}
            <tr>
              <th className="p-4 text-left bg-gray-100">ID</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.employee_id}</td>
              ))}
            </tr>
            {/* Row for Full Name */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Full Name</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">
                  {`${d.first_name} ${d.middle_name ? d.middle_name + ' ' : ''}${d.last_name}`}
                </td>
              ))}
            </tr>
            {/* Row for Birth Date */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Birth Date</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{formatDate(d.birth_date)}</td>
              ))}
            </tr>
            {/* Row for Gender */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Gender</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.gender}</td>
              ))}
            </tr>
            {/* Row for Marital Status */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Marital Status</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.marital_status}</td>
              ))}
            </tr>
            {/* Row for Contact Number */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Contact Number</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.tel_no}</td>
              ))}
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="text-center">No data found</div>
      )}
    </div>
  );
}
export default PersonalDetails;