import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate, Link } from 'react-router-dom'; 
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const LeaveRequest = () => {
    const [values, setValues] = useState({
        leaveType: '',
        from_date: '',
        to_date: '',
        leaveReason: ''
    });

    const navigate = useNavigate();

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3000/auth/LeaveRequest', values)
    //     .then(result => console.log(result.data))
    //     .catch(err => console.log(err))

    //     console.log(values); 
        navigate('/Leave'); 
    };

    const [fromDate, setFromDate] = useState(null);  
    const [toDate, setToDate] = useState(null);      

    const [category, setCategory] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:3000/auth/Leave')
    //     .then(result => {
    //         if(result.data.Status) {
    //             setCategory(result.data.Result);
    //         }
    //         else{
    //             alert(result.data.Error)
    //         }
    //     }) 
    //     .catch(err => console.log(err))
    // }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">Request a Leave</h1>
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
            >
                
                <div className="mb-6 text-left">
                    <label htmlFor="leaveType" className="block text-gray-700 text-sm font-bold mb-2">
                        Leave Type*
                    </label>
                    <select
                        name="leaveType"
                        id="leaveType"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={(e) => handleChanges(e)} 
                        required
                    >
                        <option value="" disabled selected>Select the leave type</option>
                        <option value="Annual Leave">Annual Leave</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Maternity Leave">Maternity Leave</option>
                        <option value="No Pay">No Pay</option>
                    </select>
                </div>

                <div className="mb-6 text-left">
                    <label htmlFor="from-date" className="block text-gray-700 text-sm font-bold mb-2">
                        From*
                    </label>
                    <DatePicker
                        placeholderText="dd/mm/yyyy" 
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        id="from-date"
                        required
                    />
                </div>

                <div className="mb-6 text-left">
                    <label htmlFor="to-date" className="block text-gray-700 text-sm font-bold mb-2">
                        To*
                    </label>
                    <DatePicker
                        placeholderText="dd/mm/yyyy" 
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        id="to-date"
                        required
                    />
                </div>
                
                <div className="mb-6 text-left">
                    <label htmlFor="leaveReason" className="block text-gray-700 text-sm font-bold mb-2">
                        Leave Reason*
                    </label>
                    <textarea
                        name="leaveReason"
                        id="leaveReason"
                        rows="4"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Description"
                        onChange={(e) => handleChanges(e)} 
                        required
                    ></textarea>
                </div>

                <div className="flex items-center justify-between">
                    <Link 
                        to="/Leave"
                        className="bg-black text-white font-bold py-2 px-4 rounded border border-black hover:bg-white hover:text-black hover:font-medium focus:outline-none focus:ring sm:w-auto"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="bg-black text-white font-bold py-2 px-4 rounded border border-black hover:bg-white hover:text-black hover:font-medium focus:outline-none focus:ring sm:w-auto"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LeaveRequest;
