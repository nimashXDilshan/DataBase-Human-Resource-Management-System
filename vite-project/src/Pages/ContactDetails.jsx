import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContexts";
import api from "../config";

function ContactDetails() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth(); // Retrieve user object from AuthContext
    const employee_id = user?.employee_id; 

    useEffect(() => {
        const fetchEmergencyContacts = async () => {
            if (!employee_id) return; // Ensure employee_id is available before making the request
            try {
                const response = await api.get(`/api/EmergencyContact/${employee_id}`); // Use custom API instance
                setContacts(response.data); // Set the contacts state with the fetched data
            } catch (err) {
                setError(err); // Set error state if an error occurs
                console.error("Error fetching emergency contacts:", err); // Log the error
            } finally {
                setLoading(false); // Set loading to false in either case
            }
        };
        fetchEmergencyContacts(); // Call the fetch function
    }, [employee_id]); // Dependency array
    

    if (loading) return <div>Loading emergency contact details...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div className="container mx-auto p-4">
            {contacts && contacts.length > 0 ? (
                <table className="min-w-full table-auto">
                    <tbody>
                        {/* Row for Emergency Contact ID */}
                        <tr>
                            <th className="p-4 text-left bg-gray-100">Emergency Contact ID</th>
                            {contacts.map((contact, i) => (
                                <td key={i} className="p-4 text-left">{contact.emergency_contact_id}</td>
                            ))}
                        </tr>
                        {/* Row for Contact Name */}
                        <tr>
                            <th className="p-4 text-left bg-gray-100">Emergency Contact Person</th>
                            {contacts.map((contact, i) => (
                                <td key={i} className="p-4 text-left">{contact.name}</td>
                            ))}
                        </tr>
                        {/* Row for Address */}
                        <tr>
                            <th className="p-4 text-left bg-gray-100">Address</th>
                            {contacts.map((contact, i) => (
                                <td key={i} className="p-4 text-left">{contact.address}</td>
                            ))}
                        </tr>
                        {/* Row for Contact Number */}
                        <tr>
                            <th className="p-4 text-left bg-gray-100">Contact Number</th>
                            {contacts.map((contact, i) => (
                                <td key={i} className="p-4 text-left">{contact.tel_no}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div className="text-center">No emergency contact details available.</div>
            )}
        </div>
    );
}
export default ContactDetails;