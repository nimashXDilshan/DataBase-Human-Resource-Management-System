// src/components/DeleteConfirmationDialog.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const DeleteConfirmationDialog = ({ open, handleClose, employee, onConfirmDelete }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to delete <strong>{employee?.name}</strong> from the employees list?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button 
          onClick={() => {
            onConfirmDelete(employee.employee_id); // Call the delete function
            handleClose(); // Close the dialog
          }} 
          variant="contained" 
          sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: '#b22222' } }} // Custom red styling
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
