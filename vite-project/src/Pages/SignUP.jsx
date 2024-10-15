// SignUpSignInPage.js
import React from 'react';
import Picturewithcreateaccount from '../Components/LoginSignUp/loginsignup1';

const SignUpSignInPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error('Error:', error); 
    }
  };
return (
    <>
    <br></br>
    <div className="min-h-screen bg-gray-1000 flex items-center justify-center">
      
      {/* <div className="w-full max-w-lg"> */}
        <Picturewithcreateaccount/>
      {/* </div> */}

    </div>
    <h1>For All Employees,</h1>
    <div className="bg-slate-700	t-to-r from-blue-400 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
      <h4 className="text-2xl font-bold mb-4">
        As an employee, you are expected to uphold a high standard of professionalism and integrity in all aspects of your role. This includes consistently meeting or exceeding performance goals, adhering to company policies and procedures, and contributing positively to the team dynamic. You should actively engage in your own professional development, seek feedback, and work collaboratively with colleagues to achieve common objectives. Effective communication, punctuality, and a proactive approach to problem-solving are also crucial. Your responsibility extends to maintaining a respectful and inclusive workplace environment, ensuring that your actions align with the company's values and mission.
      </h4>
    </div> 

    
    
       </>
  );
};



export default SignUpSignInPage;
