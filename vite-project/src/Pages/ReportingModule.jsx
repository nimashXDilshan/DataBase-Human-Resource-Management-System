import React, { useState } from "react";
import Logofooter from "../Components/Logo-Footer/logofooter";

function ReportingModule() {
  const [selectedReport, setSelectedReport] = useState("");

  // Function to handle button clicks
  const handleButtonClick = (report) => {
    setSelectedReport(report);
  };

  // Employee details table headings
  const employeeTableHeadings = [
    "Department Name",
    "Employee ID",
    "Employee Name",
    "Job Title",
    "Employment Status",
    "Pay Grade",
  ];

  // Total Leaves table headings
  const totalLeavesTableHeadings = [
    "Department Name",
    "Annual Leave",
    "Casual Leave",
    "Maternity Leave",
    "No-pay Leave",
    "Total Leaves Taken",
  ];

  // Employee Report table headings
  const employeeReportTableHeadings = [
    "Job Title",
    "Employee ID",
    "Employee Name",
    "Department",
    "Pay Grade",
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-navy-900 min-h-screen flex flex-col py-10 px-20">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
          <button
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black hover:font-bold focus:outline-none sm:w-auto"
            onClick={() => handleButtonClick("employeeDetails")}
          >
            Employee Details by Department
          </button>
          <button
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black hover:font-bold focus:outline-none sm:w-auto"
            onClick={() => handleButtonClick("totalLeaves")}
          >
            Total Leaves
          </button>
          <button
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black hover:font-bold focus:outline-none sm:w-auto"
            onClick={() => handleButtonClick("employeeReport")}
          >
            Employee Report
          </button>
        </div>

        {/* Conditionally render the Employee Details table */}
        {selectedReport === "employeeDetails" && (
          <div className="mt-8">
            <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r bg-slate-900 text-white">
                <tr>
                  {employeeTableHeadings.map((heading) => (
                    <th
                      key={heading}
                      className="py-3 px-4 text-center border-b-2 border-gray-700"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example row data */}
                <tr className="hover:bg-gray-100 transition duration-300">
                  <td className="py-3 px-4 text-center font-medium text-gray-700">
                    Sales
                  </td>
                  <td className="py-3 px-4 text-center">12345</td>
                  <td className="py-3 px-4 text-center">John Doe</td>
                  <td className="py-3 px-4 text-center">Manager</td>
                  <td className="py-3 px-4 text-center">Full-time</td>
                  <td className="py-3 px-4 text-center">A1</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        )}

        {/* Conditionally render the Total Leaves table */}
        {selectedReport === "totalLeaves" && (
          <div className="mt-8">
            <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r bg-slate-900 text-white">
                <tr>
                  {totalLeavesTableHeadings.map((heading) => (
                    <th
                      key={heading}
                      className="py-3 px-4 text-center border-b-2 border-gray-700"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example row data */}
                <tr className="hover:bg-gray-100 transition duration-300">
                  <td className="py-3 px-4 text-center font-medium text-gray-700">
                    Sales
                  </td>
                  <td className="py-3 px-4 text-center">10</td>
                  <td className="py-3 px-4 text-center">5</td>
                  <td className="py-3 px-4 text-center">0</td>
                  <td className="py-3 px-4 text-center">2</td>
                  <td className="py-3 px-4 text-center">17</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        )}

        {/* Conditionally render the Employee Report table */}
        {selectedReport === "employeeReport" && (
          <div className="mt-8">
            <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r bg-slate-900 text-white">
                <tr>
                  {employeeReportTableHeadings.map((heading) => (
                    <th
                      key={heading}
                      className="py-3 px-4 text-center border-b-2 border-gray-700"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example row data */}
                <tr className="hover:bg-gray-100 transition duration-300">
                  <td className="py-3 px-4 text-center font-medium text-gray-700">
                    Manager
                  </td>
                  <td className="py-3 px-4 text-center">12345</td>
                  <td className="py-3 px-4 text-center">John Doe</td>
                  <td className="py-3 px-4 text-center">Sales</td>
                  <td className="py-3 px-4 text-center">A1</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
        <Logofooter />
      </div>
    </>
  );
}

export default ReportingModule;
