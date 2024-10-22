// src/pages/Dashboard.jsx
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const today = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const navigate = useNavigate();


  return (
    <div className="p-6 bg-background min-h-screen flex flex-col items-center">
      {/* Date Banner */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary to-accent text-white text-center rounded-lg shadow-lg flex items-center justify-center space-x-4">
        <CalendarTodayIcon fontSize="large" className="text-white" />
        <Typography variant="h5" className="font-bold">{today}</Typography>
      </div>

      {/* Dashboard Overview */}
      <Typography variant="h4" className="mb-6 text-text font-bold text-center p-4">Dashboard Overview</Typography>

      <Grid container spacing={4} justifyContent="center"> {/* Center grid items */}
        {/* Total Employees */}
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="hover:shadow-2xl transition-shadow duration-300" onClick={() => navigate('/allemployees')}>
            <CardContent className="text-center">
              <PeopleIcon fontSize="large" className="text-primary mb-2" />
              <Typography variant="h6" className="text-text font-bold">Total Employees</Typography>
              <Typography variant="h3" className="text-accent font-bold">250</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Latest Leave Request */}
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="hover:shadow-2xl transition-shadow duration-300" onClick={() => navigate('/leaverequests')}>
            <CardContent className="text-center">
              <EventNoteIcon fontSize="large" className="text-primary mb-2" />
              <Typography variant="h6" className="text-text font-bold">Latest Leave Request</Typography>
              <Typography variant="h5" className="text-primary">John Doe</Typography>
              <Typography variant="body2" className="text-text">Requested on: 2024-10-08</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Average Salary */}
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="text-center">
              <AttachMoneyIcon fontSize="large" className="text-primary mb-2" />
              <Typography variant="h6" className="text-text font-bold">Average Salary</Typography>
              <Typography variant="h3" className="text-accent font-bold">$55,000</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Pending Leave Requests */}
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="hover:shadow-2xl transition-shadow duration-300" onClick={() => navigate('/leaverequests')}>
            <CardContent className="text-center">
              <PendingActionsIcon fontSize="large" className="text-primary mb-2" />
              <Typography variant="h6" className="text-text font-bold">Pending Leave Requests</Typography>
              <Typography variant="h4" className="text-accent font-bold">12</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Employee Satisfaction */}
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="text-center">
              <SentimentVerySatisfiedIcon fontSize="large" className="text-primary mb-2" />
              <Typography variant="h6" className="text-text font-bold">Employee Satisfaction</Typography>
              <Typography variant="h4" className="text-accent font-bold">85%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
