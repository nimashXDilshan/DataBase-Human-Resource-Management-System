import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Logofooter from "../Components/Logo-Footer/logofooter";

function ReportingModule() {
  const [employeeData, setEmployeeData] = useState([]);
  const [departmentFilter1, setDepartmentFilter1] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/employee")
      .then((res) => res.json())
      .then((data) => setEmployeeData(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredEmployeeData = employeeData.filter((employee) => {
    return !departmentFilter1 || employee.department_name === departmentFilter1;
  });

  // Function to generate PDF
  const downloadPDF = () => {
    const input = document.getElementById("employeeDetailsTable");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add title to the PDF
      pdf.setFontSize(16);
      pdf.text("Employee Details by Department Report", 105, 20, { align: "center" });

      // Add the table image after the title
      pdf.addImage(imgData, "PNG", 10, 30, imgWidth, imgHeight);

      pdf.save("Employee_Details_by_Department_Report.pdf");
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-navy-900 min-h-screen flex flex-col py-10 px-20">
        <div className="container mx-auto pt-5 flex flex-col items-center">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 transition duration-300 hover:shadow-2xl mb-6">
            <h2 className="text-center text-2xl font-bold text-gray-700">
              Employee Details by Department
            </h2>
            <hr className="my-5 border-gray-300" />

            <label className="text-lg font-medium text-gray-700 mt-5">
              Select the Department :
            </label>
            <select
              className="ml-4 px-4 py-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
              value={departmentFilter1}
              onChange={(e) => setDepartmentFilter1(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
        </div>

        <div id="employeeDetailsTable">
          <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden mt-10">
            <thead className="bg-gradient-to-r bg-slate-900 text-white">
              <tr>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">Employee ID</th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">Employee Name</th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">Job Title</th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">Branch</th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">Employment Status</th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">Pay Grade</th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">Salary</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployeeData.map((employee, i) => (
                <tr className="hover:bg-gray-100 transition duration-300" key={i}>
                  <td className="py-3 px-4 text-center">{employee.employee_id}</td>
                  <td className="py-3 px-4 text-center">{employee.first_name}</td>
                  <td className="py-3 px-4 text-center">{employee.role_name}</td>
                  <td className="py-3 px-4 text-center">{employee.branch_name}</td>
                  <td className="py-3 px-4 text-center">{employee.status_name}</td>
                  <td className="py-3 px-4 text-center">{employee.pay_grade_level_name}</td>
                  <td className="py-3 px-4 text-center">{employee.salary_amount?.toLocaleString() + "/= "}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={downloadPDF}
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black focus:outline-none sm:w-auto"
          >
            Download Employee Details by Department Report
          </button>
        </div>
      </div>

      <Logofooter />
    </>
  );
}

export default ReportingModule;
