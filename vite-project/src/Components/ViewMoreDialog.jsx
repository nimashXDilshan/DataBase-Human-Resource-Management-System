// src/components/ViewMoreDialog.jsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Card,
  CardContent,
  Divider,
  Grid,
} from '@mui/material';

const ViewMoreDialog = ({ open, handleClose, employee }) => {
  if (!employee) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Employee Details</DialogTitle>
      <DialogContent>
        <Card className="w-full shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-primary font-bold mb-4 pb-6">
              Personal Information
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Employee ID:</strong> {employee.employeeId}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>First Name:</strong> {employee.firstName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Middle Name:</strong> {employee.middleName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Last Name:</strong> {employee.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Birth Date:</strong> {employee.birthDate}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Marital Status:</strong> {employee.maritalStatus}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Gender:</strong> {employee.gender}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Work Email:</strong> {employee.workEmail}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Address:</strong> {employee.address}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Telephone Number:</strong> {employee.telephoneNumber}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Recruitment Date:</strong> {employee.recruitmentDate}
                </Typography>
              </Grid>
            </Grid>

            <Divider className="my-6" />

            <Typography variant="h6" className="text-primary font-bold mb-4 pt-10 pb-6">
              Emergency Contact Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Emergency Contact Name:</strong> {employee.emergencyContact.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Emergency Contact Address:</strong> {employee.emergencyContact.address}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Emergency Contact Phone:</strong> {employee.emergencyContact.phone}
                </Typography>
              </Grid>
            </Grid>

            <Divider className="my-6" />

            <Typography variant="h6" className="text-primary font-bold mb-4 pt-10 pb-6">
              Employment Details
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Section Name:</strong> {employee.section.sectionName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Department Name:</strong> {employee.department.departmentName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Branch Name:</strong> {employee.branch.branchName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Supervisor:</strong> {employee.supervisor.supervisorName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Role:</strong> {employee.role.roleName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Employment Status:</strong> {employee.employmentStatus.employmentStatusName}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMoreDialog;
