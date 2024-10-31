import React, { useEffect, useState } from "react";
import Logofooter from "../Components/Logo-Footer/logofooter";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import api from "../config";
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function ReportingModule() {
  const [employeeData1, setEmployeeData1] = useState([]);
  const [leaveData, setLeaveData] = useState([]);
  const [roleData, setRoleData] = useState([]); // New state for roles
  const [selectedReport, setSelectedReport] = useState("employeeDetails");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // New state for selected role
  const [employeeReport, setEmployeeReport] = useState([]);
  const [departmentFilter2, setDepartmentFilter2] = useState("");
  const [jobTitleFilter2, setJobTitleFilter2] = useState("");
  const [payGradeFilter2, setPayGradeFilter2] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const [departmentFilter1, setDepartmentFilter1] = useState("")

  // Fetch employee data
  useEffect(() => {
    api.get("api/employeedepartment")
      .then((res) => setEmployeeData1(res.data))
      .catch((err) => console.log('Fetch error:', err));
  }, []);
  
  // Fetch leave data
  useEffect(() => {
    api.get("api/total_leaves")
      .then((res) => setLeaveData(res.data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);
  
  // Fetch employee details by role
  useEffect(() => {
    api.get("api/employees_by_role")
      .then((res) => setRoleData(res.data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);
  
  // Fetch employee report
  useEffect(() => {
    api.get("api/employee_report")
      .then((res) => setEmployeeReport(res.data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  // Filtered data based on department selection
  // Filtered data based on department selection
  const filteredEmployeeData1 = departmentFilter1
    ? employeeData1.filter((emp) => emp.department_name === departmentFilter1)
    : employeeData1;

  const filteredLeaveData = selectedDepartment
    ? leaveData.filter((leave) => leave.department_name === selectedDepartment)
    : leaveData;

  // Filtered role data based on selected role
  const filteredRoleData = selectedRole
    ? roleData.filter((role) => role.role_name === selectedRole)
    : roleData;

  // Filtering logic for the first table (Employee Details)
  const filteredEmployeeData = employeeData.filter((employee) => {
    return !departmentFilter1 || employee.department_name === departmentFilter1;
  });

  // Filtering logic for the second table (Employee Report)
  const filteredEmployeeReport = employeeReport.filter((employee) => {
    return (
      (!departmentFilter2 || employee.department_name === departmentFilter2) &&
      (!jobTitleFilter2 || employee.role_name === jobTitleFilter2) &&
      (!payGradeFilter2 || employee.pay_grade_level_name === payGradeFilter2)
    );
  });

  // Prepare Leaves Bar Chart Data
  const leaveChartData = {
    labels: filteredLeaveData.map((leave) => leave.department_name),
    datasets: [
      { label: 'Annual Leaves', data: filteredLeaveData.map((leave) => leave.Annual_Leaves), backgroundColor: '#FF6384' },
      { label: 'Casual Leaves', data: filteredLeaveData.map((leave) => leave.Casual_Leaves), backgroundColor: '#36A2EB' },
      { label: 'Maternity Leaves', data: filteredLeaveData.map((leave) => leave.Maternity_Leaves), backgroundColor: '#FFCE56' },
      { label: 'No Pay Leaves', data: filteredLeaveData.map((leave) => leave.NoPay_Leaves), backgroundColor: '#4BC0C0' }
    ]
  };


  // Function to generate PDF
  const downloadPDF = (tableId, pdfTitle) => {
    const input = document.getElementById(tableId);

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add title to the PDF
      pdf.setFontSize(16);
      pdf.text(pdfTitle, 105, 20, { align: "center" });

      // Add the table image after the title
      pdf.addImage(imgData, "PNG", 10, 30, imgWidth, imgHeight);

      pdf.save(`${pdfTitle}.pdf`); // Save PDF with title as filename
    });
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-navy-900 min-h-screen flex flex-col py-10 px-20">
        {/* Employee Details */}
        <div className="container mx-auto pt-5 flex flex-col items-center">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-700">
              Employee Details by Department
            </h2>
            <hr className="my-5 border-gray-300" />
            <label className="text-lg font-medium text-gray-700">Select Department:</label>
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

        {/* Employee Table */}
        <div id="employeeDetailsTable">
          {selectedReport === "employeeDetails" && (
            <div className="container mx-auto mt-10">
              <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="py-3 px-4 text-center">Employee ID</th>
                    <th className="py-3 px-4 text-center">Employee Name</th>
                    <th className="py-3 px-4 text-center">Job Title</th>
                    <th className="py-3 px-4 text-center">Employment Status</th>
                    <th className="py-3 px-4 text-center">Pay Grade</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  {filteredEmployeeData1.length > 0 ? (
                    filteredEmployeeData1.map((employee, i) => (
                      <tr key={i} className="hover:bg-gray-100">
                        <td className="py-3 px-4 text-center">{employee.employee_id}</td>
                        <td className="py-3 px-4 text-center">{`${employee.first_name} ${employee.last_name}`}</td>
                        <td className="py-3 px-4 text-center">{employee.role_name}</td>
                        <td className="py-3 px-4 text-center">{employee.status_name}</td>
                        <td className="py-3 px-4 text-center">{employee.pay_grade_level_name}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-3 px-4 text-center text-gray-500">No employees found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => downloadPDF("employeeDetailsTable", "Employee details by Department Report")}
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black focus:outline-none sm:w-auto"
          >
            Download Employee Details by Department
          </button>
        </div>

        {/* Leave Details */}
        <div className="container mx-auto pt-20 flex flex-col items-center">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-700">Total Leaves by Department</h2>
            <hr className="my-5 border-gray-300" />
            <label className="text-lg font-medium text-gray-700">Select Department:</label>
            <select
              className="ml-4 px-4 py-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
        </div>

        {/* Leave Table */}
        <div id="approvedLeavesTable">
          <div className="container mx-auto mt-10">
            <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="py-3 px-4 text-center">Department</th>
                  <th className="py-3 px-4 text-center">Annual Leaves</th>
                  <th className="py-3 px-4 text-center">Casual Leaves</th>
                  <th className="py-3 px-4 text-center">Maternity Leaves</th>
                  <th className="py-3 px-4 text-center">NoPay Leaves</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {filteredLeaveData.length > 0 ? (
                  filteredLeaveData.map((leave, i) => (
                    <tr key={i} className="hover:bg-gray-100">
                      <td className="py-3 px-4 text-center">{leave.department_name}</td>
                      <td className="py-3 px-4 text-center">{leave.Annual_Leaves}</td>
                      <td className="py-3 px-4 text-center">{leave.Casual_Leaves}</td>
                      <td className="py-3 px-4 text-center">{leave.Maternity_Leaves}</td>
                      <td className="py-3 px-4 text-center">{leave.NoPay_Leaves}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-3 px-4 text-center text-gray-500">No Leaves found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-10 w-full">
          <div className="w-3/4" style={{ height: '600px' }}> {/* Adjusted height */}
            <Bar
              data={leaveChartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'top',
                    labels: {
                      color: '#ffffff',
                      font: { weight: 'bold' }
                    }
                  },
                  tooltip: {
                    bodyFont: { weight: 'bold' },
                    titleFont: { weight: 'bold' }
                  }
                },
                scales: {
                  x: {
                    ticks: {
                      color: '#ffffff',
                      font: { weight: 'bold' }
                    }
                  },
                  y: {
                    max: 20, // Adjust this value to reduce bar height
                    ticks: {
                      color: '#ffffff',
                      font: { weight: 'bold' }
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => downloadPDF("approvedLeavesTable", "Approved Leaves by Department Report")}
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black focus:outline-none sm:w-auto"
          >
            Download Approved Leaves by Department
          </button>
        </div>

        {/* Employee Details by Role */}
        <div className="container mx-auto pt-20 flex flex-col items-center">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 mb-6">
            <h2 className="text-2xl font-bold text-center text-gray-700">Employee Details by Role</h2>
            <hr className="my-5 border-gray-300" />
            <label className="text-lg font-medium text-gray-700">Select Role:</label>
            <select
              className="ml-4 px-4 py-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">All Roles</option>
              <option value="QA Engineer">QA Engineer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="HR Manager">HR Manager</option>
              <option value="Accountant">Accountant</option>
            </select>
          </div>
        </div>

        {/* Role Table */}
        <div id="employeeRoleTable">
          <div className="container mx-auto mt-10">
            <table className="table-auto w-full border-collapse rounded-lg shadow-lg">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="py-3 px-4 text-center">Employee ID</th>
                  <th className="py-3 px-4 text-center">Employee Name</th>
                  <th className="py-3 px-4 text-center">Role</th>
                  <th className="py-3 px-4 text-center">Role Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {filteredRoleData.length > 0 ? (
                  filteredRoleData.map((role, i) => (
                    <tr key={i} className="hover:bg-gray-100">
                      <td className="py-3 px-4 text-center">{role.employee_id}</td>
                      <td className="py-3 px-4 text-center">{`${role.first_name} ${role.last_name}`}</td>
                      <td className="py-3 px-4 text-center">{role.role_name}</td>
                      <td className="py-3 px-4 text-center">{role.role_description}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-3 px-4 text-center text-gray-500">No employees found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => downloadPDF("employeeRoleTable", "Employee details by Role Report")}
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black focus:outline-none sm:w-auto"
          >
            Download Employee Details by Role
          </button>
        </div>


        {/* Employee Report Section */}
        <div className="container mx-auto pt-20 flex flex-col items-center">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 transition duration-300 hover:shadow-2xl mb-6">
            <h2 className="text-center text-2xl font-bold text-gray-700">
              Employee Report
            </h2>
            <hr className="my-5 border-gray-300" />

            <div>
              <label className="text-lg font-medium text-gray-700 mt-5">
                Select the Department :
              </label>
              <select
                className="ml-4 px-4 py-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
                value={departmentFilter2}
                onChange={(e) => setDepartmentFilter2(e.target.value)}
              >
                <option value="">All Departments</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div>
              <label className="text-lg font-medium text-gray-700 mt-5">
                Select the Job Title :
              </label>
              <select
                className="ml-4 px-4 py-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
                value={jobTitleFilter2}
                onChange={(e) => setJobTitleFilter2(e.target.value)}
              >
                <option value="">All Job Titles</option>
                <option value="HR Manager">HR Manager</option>
                <option value="Accountant">Accountant</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="QA Engineer">QA Engineer</option>
              </select>
            </div>

            <div>
              {" "}
              <label className="text-lg font-medium text-gray-700 mt-5">
                Select the Pay Grade :
              </label>
              <select
                className="ml-4 px-4 py-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
                value={payGradeFilter2}
                onChange={(e) => setPayGradeFilter2(e.target.value)}
              >
                <option value="">All Pay Grades</option>
                <option value="Level 1">Level 1</option>
                <option value="Level 2">Level 2</option>
                <option value="Level 3">Level 3</option>
              </select>
            </div>
          </div>
        </div>

        <div id="employeeReportTable">
          <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden mt-10">
            <thead className="bg-gradient-to-r bg-slate-900 text-white">
              <tr>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Employee ID
                </th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Employee Name
                </th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Branch
                </th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Employment Status
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployeeReport.map((employee, i) => (
                <tr
                  className="hover:bg-gray-100 transition duration-300"
                  key={i}
                >
                  <td className="py-3 px-4 text-center">
                    {employee.employee_id}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {employee.first_name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {employee.branch_name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {employee.status_name}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => downloadPDF("employeeReportTable", "Employee Report")}
            className="inline-block rounded-full bg-gradient-to-r from-gray-600 to-gray-900 px-12 py-3 text-sm font-medium text-white transition duration-300 ease-in-out transform hover:scale-105 hover:from-gray-400 hover:to-gray-700 hover:text-black focus:outline-none sm:w-auto"
          >
            Download Employee Report
          </button>
        </div>


        <br></br>
      </div>
      <Logofooter />
    </>
  );
}

export default ReportingModule;