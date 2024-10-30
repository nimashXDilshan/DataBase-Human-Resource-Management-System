import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
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
      <div className="relative mb-8 p-8 rounded-xl shadow-lg bg-[#2B3240] flex items-center justify-center space-x-4 overflow-hidden">
        {/* Background Accent Circles for Depth */}
        <div className="absolute -top-10 -left-10 h-36 w-36 rounded-full bg-[#3A4452] opacity-50 blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-[#3A4452] opacity-40 blur-2xl"></div>

        {/* Icon and Text */}
        <CalendarTodayIcon fontSize="large" className="text-white animate-pulse" />
        <Typography variant="h5" className="font-bold text-white tracking-wide relative z-10 drop-shadow-sm transition-transform transform hover:scale-105">
          {today}
        </Typography>

        {/* Soft Border Glow */}
        <div className="absolute inset-0 rounded-xl border border-opacity-10 border-white opacity-70 transition-opacity hover:opacity-90"></div>
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
          <Card className="hover:shadow-2xl transition-shadow duration-300" onClick={() => navigate('/ApproveLeaveSupervisor')}>
            <CardContent className="text-center">
              <EventNoteIcon fontSize="large" className="text-primary mb-2" />
              <Typography variant="h6" className="text-text font-bold">Latest Leave Request</Typography>
              <Typography variant="h5" className="text-primary">John Doe</Typography>
              <Typography variant="body2" className="text-text">Requested on: 2024-10-08</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Pending Leave Requests */}
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="hover:shadow-2xl transition-shadow duration-300" onClick={() => navigate('/Leave')}>
            <CardContent className="text-center">
              <PendingActionsIcon fontSize="large" className="text-primary mb-2" />
              <Typography variant="h6" className="text-text font-bold">Pending Leave Requests</Typography>
              <Typography variant="h4" className="text-accent font-bold">12</Typography>
            </CardContent>
          </Card>
        </Grid>


      </Grid>

      {/* Buttons Section */}
      <div className="mt-8 flex justify-center space-x-4">
        {/* My Personal Details Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/profile')}
          className="font-bold"
        >
          My Personal Details
        </Button>

        {/* Create New Leave Request Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/Leave Request')}
          className="font-bold"
        >
          Create New Leave Request
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
