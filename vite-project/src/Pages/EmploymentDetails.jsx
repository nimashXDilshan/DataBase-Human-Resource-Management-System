import React, { useEffect, useState } from "react";
function EmploymentDetails() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/Employee/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched employment data:", data);
        setData(data);
      })
      .catch((err) => console.log("Error fetching employment data:", err));
  }, []);
  return (
    <div className="container mx-auto p-4">
      {data.length > 0 ? (
        <table className="min-w-full table-auto">
          <tbody>
            {/* Row for Section */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Section</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.section_name}</td>
              ))}
            </tr>
            {/* Row for Branch */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Branch</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.branch_name}</td>
              ))}
            </tr>
            {/* Row for Supervisor */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Supervisor</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">
                  {d.supervisor_first_name} {d.supervisor_last_name}
                </td>
              ))}
            </tr>
            {/* Row for Employment Status */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Employment Status</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.status_name}</td>
              ))}
            </tr>
            {/* Row for Role */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Role</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.role_name}</td>
              ))}
            </tr>
            {/* Row for Work Email */}
            <tr>
              <th className="p-4 text-left bg-gray-100">Work Email</th>
              {data.map((d, i) => (
                <td key={i} className="p-4 text-left">{d.company_work_email}</td>
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
export default EmploymentDetails;
