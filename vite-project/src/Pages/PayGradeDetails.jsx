import React, { useEffect, useState } from "react";
import axios from "axios";


const PayGradeDetails = () => {
    const [payGrade, setPayGrade] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPayGrade = async () => {
            try {
                const response = await axios.get("http://localhost:5000/PayGrade");
                console.log("Pay Grade Response:", response.data); // Log the response data
                setPayGrade(response.data);
            } catch (err) {
                setError(err);
                console.error("Error fetching pay grade:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPayGrade();
    }, []);
    // Placeholder function for viewing salary
    const handleViewSalary = () => {
        console.log("View Salary button clicked!");
        // Add your logic to view the salary here
    };
    if (loading) return <div>Loading pay grade details...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <div className="container mx-auto p-4">
            {payGrade.length > 0 ? (
                <table className="min-w-full table-auto">
                    <tbody>
                        {payGrade.map((grade) => (
                            <tr key={grade.pay_grade_id}>
                                <th className="p-4 text-left bg-gray-100">Pay Grade ID</th>
                                <td className="p-4 text-left">{grade.pay_grade_id}</td>
                            </tr>
                        ))}
                        {payGrade.map((grade) => (
                            <tr key={grade.pay_grade_id}>
                                <th className="p-4 text-left bg-gray-100">Pay Grade Level</th>
                                <td className="p-4 text-left">{grade.pay_grade_level_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center">No pay grade details available.</div>
            )}
            {/* Adjusted button positioning */}
            <div className="mt-8">
                <button
                    onClick={handleViewSalary}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
                >
                    View Salary
                </button>
            </div>
        </div>
    );
};
export default PayGradeDetails;