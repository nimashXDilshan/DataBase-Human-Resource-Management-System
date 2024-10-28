import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactDetails from './ContactDetails';
import PersonalDetails from './PersonalDetails';
//import EmploymentDetails from './EmploymentDetails';
import PayGradeDetails from './PayGradeDetails';

function Profile1() {
    const [fullName, setFullName] = useState('');
    const [nationality, setNationality] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // useEffect(() => {
    //   const fetchNationality = async () => {
    //     try {
    //       const response = await axios.get("http://localhost:5000/Nationality");
    //       const data = response.data[0]; // Assuming the response is an array
    //       setFullName(`${data.first_name} ${data.middle_name || ''} ${data.last_name}`);
    //       setNationality(data.country);
    //     } catch (err) {
    //       setError(err);
    //       console.error("Error fetching nationality:", err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   fetchNationality();
    // }, []);
    const tabs = [
     { name: 'Personal', component: <PersonalDetails /> },
     { name: 'Contacts', component: <ContactDetails /> },
     //{ name: 'Employment', component: <EmploymentDetails /> },
     { name: 'Pay Grade', component: <PayGradeDetails /> },
    ];

    const [activeTab, setActiveTab] = useState(0);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
      <div className="flex items-start justify-between h-screen p-8 bg-gray-100">
        {/* Left Section */}
        <div className="w-4/12 flex flex-col items-center mt-24">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile for user"
            className="w-36 h-36 object-cover transition-transform transform hover:scale-110 border-4 border-blue-500 rounded-full duration-300"
          />
          <div className="flex flex-col items-center mt-4 bg-gradient-to-r from-blue-500 to-blue-300 p-4 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
            <span className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">{fullName}</span>
            {/* <span className="text-lg font-medium text-gray-600 mt-1 hover:text-blue-500 transition-colors duration-300">{nationality}</span> */}
          </div>
        </div>

        <div className="w-8/12 border-l border-gray-300 flex flex-col justify-start ml-28">
        <div className="flex mb-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`min-w-[200px] p-3 text-center cursor-pointer transition-colors duration-300 ${
                activeTab === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black hover:bg-blue-300 hover:text-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </div>

))}
</div>

<div className="p-4 transition-all duration-300 ease-in-out">
  {tabs[activeTab].component}
</div>
</div>
</div>
  );
}
export default Profile1;