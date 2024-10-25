// import React, { useEffect, useState } from "react";
// import Logofooter from "../Components/Logo-Footer/logofooter";

// function ReportingModule() {
//   const [employeeData, setEmployeeData] = useState([]);
//   const [leaveData, setLeaveData] = useState([]);
//   const [selectedReport, setSelectedReport] = useState("employeeDetails");
//   const [department, setDepartment] = useState("");

//   // Fetch employee data
//   useEffect(() => {
//     fetch("http://localhost:5002/employee") 
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => setEmployeeData(data))
//       .catch((err) => console.log('Fetch error:', err));
//   }, []);

//   // Fetch leave data
//   useEffect(() => {
//     fetch("http://localhost:5002/total_leaves")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => setLeaveData(data))
//       .catch((err) => console.log("Fetch error:", err));
//   }, []);

//   const filteredData = department
//     ? employeeData.filter((employee) => employee.department_name === department)
//     : employeeData;

//   return (
//     <>
//       <div className="bg-gradient-to-r from-gray-900 to-navy-900 min-h-screen flex flex-col py-10 px-20">
//         <div className="container mx-auto pt-5 flex flex-col items-center">
//           <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 transition duration-300 hover:shadow-2xl mb-6">
//             <h2 className="text-center text-2xl font-bold text-gray-700">
//               Employee Details by Department
//             </h2>
//             <hr className="my-5 border-gray-300" />
//             <label className="text-lg font-medium text-gray-700 mt-5">
//               Select the Department:
//             </label>
//             <select
//               className="ml-4 px-4 py-2 mt-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-black-700 focus:ring-2 focus:ring-black-700 transition duration-200 ease-in-out"
//               value={department}
//               onChange={(e) => setDepartment(e.target.value)}
//             >
//               <option value="">All Departments</option>
//               <option value="Human Resources">Human Resources</option>
//               <option value="Technology">Technology</option>
//               <option value="Finance">Finance</option>
//             </select>
//           </div>
//         </div>

//         {selectedReport === "employeeDetails" && (
//           <div>
//             <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden mt-10">
//               <thead className="bg-gradient-to-r bg-slate-900 text-white">
//                 <tr>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Employee ID</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Employee Name</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Job Title</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Employment Status</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Pay Grade</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredData.length > 0 ? (
//                   filteredData.map((employee, i) => (
//                     <tr className="hover:bg-gray-100 transition duration-300" key={i}>
//                       <td className="py-3 px-4 text-center">{employee.employee_id}</td>
//                       <td className="py-3 px-4 text-center">{employee.first_name}</td>
//                       <td className="py-3 px-4 text-center">{employee.role_name}</td>
//                       <td className="py-3 px-4 text-center">{employee.status_name}</td>
//                       <td className="py-3 px-4 text-center">{employee.pay_grade_level_name}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="py-3 px-4 text-center text-gray-500">No employees found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}

//         <div className="container mx-auto pt-20 flex flex-col items-center">
//           <div className="card bg-white p-6 rounded-lg shadow-lg w-1/2 transition duration-300 hover:shadow-2xl mb-6">
//             <h2 className="text-center text-2xl font-bold text-gray-700">Total Leaves by Department</h2>
//             <hr className="my-5 border-gray-300" />
//             <table className="table-auto w-full border-collapse rounded-lg shadow-lg overflow-hidden mt-10">
//               <thead className="bg-gradient-to-r bg-slate-900 text-white">
//                 <tr>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Department</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Annual Leaves</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Casual Leaves</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">Maternity Leaves</th>
//                   <th className="py-3 px-4 text-center border-b-2 border-gray-700">NoPay Leaves</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {leaveData.length > 0 ? (
//                   leaveData.map((leave, i) => (
//                     <tr className="hover:bg-gray-100 transition duration-300" key={i}>
//                       <td className="py-3 px-4 text-center">{leave.department_name}</td>
//                       <td className="py-3 px-4 text-center">{leave.Annual_Leaves}</td>
//                       <td className="py-3 px-4 text-center">{leave.Casual_Leaves}</td>
//                       <td className="py-3 px-4 text-center">{leave.Maternity_Leaves}</td>
//                       <td className="py-3 px-4 text-center">{leave.NoPay_Leaves}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="5" className="py-3 px-4 text-center text-gray-500">No leave data found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <div>
//         <Logofooter />
//       </div>
//     </>
//   );
// }

// export default ReportingModule;


import React, { useEffect, useState } from "react";
import Logofooter from "../Components/Logo-Footer/logofooter";

function ReportingModule() {
  const [employeeData, setEmployeeData] = useState([]);
  const [leaveData, setLeaveData] = useState([]);
  const [selectedReport, setSelectedReport] = useState("employeeDetails");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Fetch employee data
  useEffect(() => {
    fetch("http://localhost:5002/employee") 
      .then((res) => res.ok ? res.json() : Promise.reject(res.statusText))
      .then((data) => setEmployeeData(data))
      .catch((err) => console.log('Fetch error:', err));
  }, []);

  // Fetch leave data
  useEffect(() => {
    fetch("http://localhost:5002/total_leaves")
      .then((res) => res.ok ? res.json() : Promise.reject(res.statusText))
      .then((data) => setLeaveData(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  // Filtered data based on department selection
  const filteredEmployeeData = selectedDepartment
    ? employeeData.filter((emp) => emp.department_name === selectedDepartment)
    : employeeData;

  const filteredLeaveData = selectedDepartment
    ? leaveData.filter((leave) => leave.department_name === selectedDepartment)
    : leaveData;

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

        {/* Employee Table */}
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
                {filteredEmployeeData.length > 0 ? (
                  filteredEmployeeData.map((employee, i) => (
                    <tr key={i} className="hover:bg-gray-100">
                      <td className="py-3 px-4 text-center">{employee.employee_id}</td>
                      <td className="py-3 px-4 text-center">{employee.first_name}</td>
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

      <div>
        <Logofooter />
      </div>
    </>
  );
}

export default ReportingModule;