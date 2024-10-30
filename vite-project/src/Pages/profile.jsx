import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactDetails from './ContactDetails';
import PersonalDetails from './PersonalDetails';
import EmploymentDetails from './EmploymentDetails';
import PayGradeDetails from './PayGradeDetails';
import { useAuth } from '../contexts/AuthContexts';
import { AppBar, Tabs, Tab, Box, Typography, CircularProgress, Paper } from '@mui/material';
import { PersonOutline } from '@mui/icons-material';
import api from '../config';

function Profile1() {
  const { user } = useAuth();
  const employee_id = user?.employee_id;

  const [fullName, setFullName] = useState('');
  const [nationality, setNationality] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchNationality = async () => {
      if (!employee_id) return;
      try {
        const response = await axios.get(`http://localhost:5000/api/Nationality/${employee_id}`);
        const data = response.data[0];
        setFullName(`${data.first_name} ${data.middle_name || ''} ${data.last_name}`);
        setNationality(data.country);
      } catch (err) {
        setError(err);
        console.error("Error fetching nationality:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNationality();
  }, [employee_id]);

  const tabs = [
    { name: 'Personal', component: <PersonalDetails fullName={fullName} nationality={nationality} /> },
    { name: 'Contacts', component: <ContactDetails /> },
    { name: 'Employment', component: <EmploymentDetails /> },
    { name: 'Pay Grade', component: <PayGradeDetails /> },
  ];

  const [activeTab, setActiveTab] = useState(0);
  
  if (loading) return <div className="flex justify-center items-center h-screen"><CircularProgress /></div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;

  return (
    <div className="min-h-screen p-6 bg-[#F4F4F4]">
      {/* Profile Header */}
      <Paper elevation={3} className="bg-[#FFFFFF] shadow-lg rounded-lg p-6 flex items-center space-x-4 mb-6">
        <PersonOutline fontSize="large" className="text-[#11182a]" />
        <div>
          <Typography variant="h4" className="font-bold text-[#11182a] hover:text-[#73EC8B] transition duration-300">{fullName}</Typography>
          <Typography variant="subtitle1" className="text-gray-600">{nationality}</Typography>
        </div>
      </Paper>

      {/* Tabs Section */}
      <Box sx={{ width: '100%', mb: 4 }}>
        <AppBar position="static" sx={{ backgroundColor: '#11182a', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <Tabs 
            value={activeTab} 
            onChange={(event, newValue) => setActiveTab(newValue)} 
            textColor="inherit"
            indicatorColor="secondary"
          >
            {tabs.map((tab, index) => (
              <Tab 
                key={index} 
                label={tab.name} 
                className="font-bold text-lg hover:bg-[#73EC8B] rounded-lg transition duration-300" 
              />
            ))}
          </Tabs>
        </AppBar>
      </Box>

      {/* Tab Content */}
      <Box sx={{ p: 4, backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: 2 }}>
        {tabs[activeTab].component}
      </Box>
    </div>
  );
}

export default Profile1;
