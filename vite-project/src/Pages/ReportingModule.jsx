import React, { useEffect, useState } from "react";
import Logofooter from "../Components/Logo-Footer/logofooter";

function ReportingModule() {
  // State for the first table (Employee Details)
  const [employeeData, setEmployeeData] = useState([]);
  const [departmentFilter1, setDepartmentFilter1] = useState("");

  // State for the second table (Employee Report)
  const [employeeReport, setEmployeeReport] = useState([]);
  const [departmentFilter2, setDepartmentFilter2] = useState("");
  const [jobTitleFilter2, setJobTitleFilter2] = useState("");
  const [payGradeFilter2, setPayGradeFilter2] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/employee")
      .then((res) => res.json())
      .then((data) => setEmployeeData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/employee_report")
      .then((res) => res.json())
      .then((data) => setEmployeeReport(data))
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <>
      {/* Employee Details by Department Section */}
      <div className="bg-gradient-to-r from-gray-900 to-navy-900 min-h-screen flex flex-col py-10 px-20">
        <div className="container mx-auto pt-5 flex flex-col items-center">
          <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 transition duration-300 hover:shadow-2xl mb-6">
            <h2 className="text-center text-2xl font-bold text-gray-700">
              Employee Details by Department
            </h2>
            <hr className="my-5 border-gray-300" />

            {/* Department Filter */}
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

        {/* Employee Details Table */}
        <div>
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
                  Job Title
                </th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Branch
                </th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Employment Status
                </th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Pay Grade
                </th>
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Salary
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEmployeeData.map((employee, i) => (
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
                    {employee.role_name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {employee.branch_name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {employee.status_name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {employee.pay_grade_level_name}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {employee.salary_amount?.toLocaleString() + "/= "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

        <div>
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
                <th className="py-3 px-4 text-center border-b-2 border-gray-700">
                  Salary
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
                  <td className="py-3 px-4 text-center">
                    {employee.salary_amount?.toLocaleString() + "/= "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Logofooter />
    </>
  );
}

export default ReportingModule;
