// src/pages/LeaveRequests.jsx
import React, { useState } from 'react';
import {
  TextField, IconButton, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Select from '@mui/material/Select';

const leaveRequests = [
  { id: 'L001', name: 'John Doe', employeeId: 'E001', createdAt: '2024-10-10 09:00 AM', startDate: '2024-10-12', endDate: '2024-10-14', leaveDays: 3, leaveType: 'Vacation', reason: 'Family emergency', status: 'Unseen' },
  { id: 'L002', name: 'Jane Smith', employeeId: 'E002', createdAt: '2024-10-09 11:00 AM', startDate: '2024-10-15', endDate: '2024-10-18', leaveDays: 4, leaveType: 'Sick Leave', reason: 'Fever and cold', status: 'Approved' },
  { id: 'L003', name: 'Mark Johnson', employeeId: 'E003', createdAt: '2024-10-08 02:00 PM', startDate: '2024-10-20', endDate: '2024-10-22', leaveDays: 3, leaveType: 'Personal Leave', reason: 'Attending a family function', status: 'Not Approved' }
];

const LeaveRequests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [expandedRequestId, setExpandedRequestId] = useState(null);

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleViewMore = (id) => {
    setExpandedRequestId(expandedRequestId === id ? null : id);
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <DoneAllIcon style={{ color: 'green' }} />;
      case 'Not Approved':
        return <CloseIcon style={{ color: 'red' }} />;
      default:
        return <HourglassEmptyIcon style={{ color: 'gray' }} />;
    }
  };

  return (
    <div className="p-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4" className="font-bold text-primary">
          Leave Requests
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className="bg-primary hover:bg-accent"
        >
          Create Leave Request
        </Button>
      </div>

      {/* Search and Dropdown */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-4">
          <TextField
            label="Search Leave Requests"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            className="w-96"
          />

          <Select
            value={searchBy}
            onChange={handleSearchByChange}
            variant="outlined"
            className="bg-white"
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="employeeId">Employee ID</MenuItem>
            <MenuItem value="role">Role</MenuItem>
          </Select>
        </div>
      </div>

      {/* Leave Request Table */}
      <TableContainer className="shadow-lg">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Employee ID</strong></TableCell>
              <TableCell><strong>Request Created</strong></TableCell>
              <TableCell><strong>Start Date</strong></TableCell>
              <TableCell><strong>End Date</strong></TableCell>
              <TableCell><strong>Days</strong></TableCell>
              <TableCell><strong>Leave Type</strong></TableCell>
              <TableCell><strong>Reason</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveRequests.map((request) => (
              <TableRow key={request.id} className="hover:bg-gray-50 transition duration-300">
                <TableCell>{request.name}</TableCell>
                <TableCell>{request.employeeId}</TableCell>
                <TableCell>{request.createdAt}</TableCell>
                <TableCell>{request.startDate}</TableCell>
                <TableCell>{request.endDate}</TableCell>
                <TableCell>{request.leaveDays}</TableCell>
                <TableCell>{request.leaveType}</TableCell>
                <TableCell>
                  {request.reason.length > 20 ? (
                    <>
                      {expandedRequestId === request.id ? request.reason : `${request.reason.slice(0, 20)}... `}
                      <Button color="primary" onClick={() => handleViewMore(request.id)}>
                        {expandedRequestId === request.id ? 'View Less' : 'View More'}
                      </Button>
                    </>
                  ) : (
                    request.reason
                  )}
                </TableCell>
                <TableCell>
                  <Tooltip title={request.status}>
                    {renderStatusIcon(request.status)}
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <CheckIcon />
                  </IconButton>
                  <IconButton color="secondary">
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LeaveRequests;
