import React, { useEffect, useState } from "react";
import axios from "axios";
function ContactDetails() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchEmergencyContacts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/EmergencyContact");
                setContacts(response.data);
            } catch (err) {
                setError(err);
                console.error("Error fetching emergency contacts:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchEmergencyContacts();
    }, []);
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
                                <td key={i} className="p-4 text-left">{contact.contact_name}</td>
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