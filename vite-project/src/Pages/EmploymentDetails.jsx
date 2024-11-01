import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContexts";
import api from "../config";

function EmploymentDetails() {
  const [data, setData] = useState([]);
  const { user } = useAuth(); // Retrieve user object from AuthContext
  const employee_id = user?.employee_id;

  useEffect(() => {
    const fetchEmploymentDetails = async () => {
        if (!employee_id) return; // Ensure employee_id is available
        try {
            const response = await api.get(`/api/EmployementDetails/${employee_id}`);
            console.log("Fetched employment data:", response.data);
            setData(response.data);
        } catch (error) {
            console.error("Error fetching employment data:", error);
        }
    };

    fetchEmploymentDetails();
}, [employee_id]);
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
