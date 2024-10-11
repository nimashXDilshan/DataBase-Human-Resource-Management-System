import React, { useState } from "react";
import Logofooter from "../Components/Logo-Footer/logofooter";

const EmployeeDetailsForm = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    companyWorkEmail: "",
    address: "",
    telNo: "",
    recruitmentDate: "",
    emergencyContactId: "",
    sectionId: "",
    branchId: "",
    supervisorId: "",
    employmentStatusId: "",
    roleId: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [error, setError] = useState(""); // State for error messages

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "employeeId",
      "firstName",
      "lastName",
      "birthDate",
      "gender",
      "maritalStatus",
      "companyWorkEmail",
      "address",
      "telNo",
      "recruitmentDate",
    ];

    const isFormValid = requiredFields.every(
      (field) => formData[field].trim() !== ""
    );

    if (!isFormValid) {
      setError("Please fill in all required fields.");
      return; // Stop form submission if validation fails
    }

    setError(""); // Clear any previous error messages
    setIsModalOpen(true); // Show modal on form submission
  };

  const handleConfirmAddition = () => {
    console.log("Employee Added:", formData);
    // Here you can add your form submission logic
    setIsModalOpen(false); // Close the modal
    setFormData({
      // Reset form data
      employeeId: "",
      firstName: "",
      middleName: "",
      lastName: "",
      birthDate: "",
      gender: "",
      maritalStatus: "",
      companyWorkEmail: "",
      address: "",
      telNo: "",
      recruitmentDate: "",
      emergencyContactId: "",
      sectionId: "",
      branchId: "",
      supervisorId: "",
      employmentStatusId: "",
      roleId: "",
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 to-navy-900 flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl w-full p-8 bg-gray-400 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-white bg-gray-900 py-3 rounded-md mb-6">
            Employee Details Form
          </h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}{" "}
          {/* Display error message */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black">
                Employee ID
              </label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              >
                <option value="">Select Status</option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Company Work Email
              </label>
              <input
                type="email"
                name="companyWorkEmail"
                value={formData.companyWorkEmail}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Telephone Number
              </label>
              <input
                type="text"
                name="telNo"
                value={formData.telNo}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Recruitment Date
              </label>
              <input
                type="date"
                name="recruitmentDate"
                value={formData.recruitmentDate}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="relative px-6 py-2 text-white font-semibold rounded-md overflow-hidden transition-all duration-100 ease-in-out shadow-md bg-black group"
            >
              <span className="absolute inset-0 transform -translate-x-full bg-gradient-to-r from-gray-700 to-slate-900 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10">Add Employee</span>
            </button>
          </div>
        </form>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Confirm Employee Addition
              </h3>
              <p className="text-gray-300 mb-6">
                Are you sure you want to add this employee?
              </p>
              <div className="flex justify-around">
                <button
                  onClick={handleConfirmAddition}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-300"
                >
                  Confirm
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <Logofooter />
      </div>
    </>
  );
};

export default EmployeeDetailsForm;
