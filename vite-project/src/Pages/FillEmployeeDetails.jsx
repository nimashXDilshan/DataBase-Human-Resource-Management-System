import React, { useState } from 'react';
import axios from "axios";

const EmployeeDetailsForm = () => {
  const [formData, setFormData] = useState({
   
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    maritalStatus: '',
    companyWorkEmail: '',
    address: '',
    telNo: '',
    recruitmentDate: '',
    emergencyContactname: '',
    emergencyaddress: '',
    emergencyContactNO: '',
    section: '',
    branch: '',
    supervisor: '',
    employmentStatus: '',
    role: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [error, setError] = useState(''); // State for error messages
  const [branches, setBranches] = useState([]); // State for branches
  const [suggestedBranches, setSuggestedBranches] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = [
     
      'firstName',
      'lastName',
      'birthDate',
      'gender',
      'maritalStatus',
      'companyWorkEmail',
      'address',
      'telNo',
      'recruitmentDate',
    ];

    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isFormValid) {
      setError('Please fill in all required fields.');
      return; // Stop form submission if validation fails
    }

    setError(''); // Clear any previous error messages
    setIsModalOpen(true); // Show modal on form submission
  };

  const handleConfirmAddition = () => {
    console.log('Employee Added:', formData);
    
    // API call to submit employee details
    axios
      .post('http://localhost:5000/api/employee/', formData) // Adjust the URL according to your backend endpoint
      .then((response) => {
        console.log('Employee successfully added:', response.data);
        // Reset form data and close modal
        setIsModalOpen(false);
        setFormData({
          
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    maritalStatus: '',
    companyWorkEmail: '',
    address: '',
    telNo: '',
    recruitmentDate: '',
    emergencyContactname: '',
    emergencyaddress: '',
    emergencyContactNO: '',
    section: '',
    branch: '',
    supervisor: '',
    employmentStatus: '',
    role: '',
        });
      })
      .catch((err) => {
        console.error('Error adding employee:', err);
        setError('Failed to add employee. Please try again.');
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="min-h-screen bg-blue-200 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="max-w-4xl w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white bg-blue-900 py-3 rounded-md mb-6">
          Employee Details Form
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message */}
        <h2 className="text-3xl font-bold text-center text-neutral-950 bg-white py-2 rounded-md mb-6">
  Personal Details
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label className="block text-sm font-medium text-gray-300">First Name</label>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Middle Name</label>
    <input
      type="text"
      name="middleName"
      value={formData.middleName}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Last Name</label>
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Birth Date</label>
    <input
      type="date"
      name="birthDate"
      value={formData.birthDate}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Gender</label>
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
    <label className="block text-sm font-medium text-gray-300">Marital Status</label>
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
    <label className="block text-sm font-medium text-gray-300">Company Work Email</label>
    <input
      type="email"
      name="companyWorkEmail"
      value={formData.companyWorkEmail}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Address</label>
    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Telephone Number</label>
    <input
      type="text"
      name="telNo"
      value={formData.telNo}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Recruitment Date</label>
    <input
      type="date"
      name="recruitmentDate"
      value={formData.recruitmentDate}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>
</div>
<br></br>

<h2 className="text-3xl font-bold text-center text-neutral-950 bg-white py-2 rounded-md mb-6">
  Emergency Contact Details
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label className="block text-sm font-medium text-gray-300">Emergency Contact Name</label>
    <input
      type="text"
      name="emergencyContactname"
      value={formData.emergencyContactname}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Emergency Address</label>
    <input
      type="text"
      name="emergencyaddress"
      value={formData.emergencyaddress}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Emergency Tel No</label>
    <input
      type="text"
      name="emergencyContactNO"
      value={formData.emergencyContactNO}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>
</div>
<br></br>
<h2 className="text-3xl font-bold text-center text-neutral-9500 bg-white py-2 rounded-md mb-6">
  Company Details
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label className="block text-sm font-medium text-gray-300">Section</label>
    <input
      type="text"
      name="section"
      value={formData.section}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Branch</label>
    <input
      type="text"
      name="branch"
      value={formData.branch}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
    {/* {suggestedBranches.length > 0 && (
                            <ul className="absolute bg-white z-10 mt-1 max-h-48 overflow-auto border border-gray-300">
                                {suggestedBranches.map(branch => (
                                    <li
                                        key={branch.id}
                                        onClick={() => handleSelectBranch(branch)}
                                        className="p-2 cursor-pointer hover:bg-blue-200"
                                    >
                                        {branch.name}
                                    </li>
                                ))}
                            </ul>
                        )} */}
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Supervisor</label>
    <input
      type="text"
      name="supervisor"
      value={formData.supervisor}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Employment Status</label>
    <input
      type="text"
      name="employmentStatus"
      value={formData.employmentStatus}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-300">Role</label>
    <input
      type="text"
      name="role"
      value={formData.role}
      onChange={handleInputChange}
      className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
    />
  </div>
</div>



        <div className="flex justify-center mt-6">
          <button type="submit" className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out shadow-md">
            Add Employee
          </button>
        </div>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Confirm Employee Addition</h3>
            <p className="text-gray-300 mb-6">Are you sure you want to add this employee?</p>
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
  );
};

export default EmployeeDetailsForm;