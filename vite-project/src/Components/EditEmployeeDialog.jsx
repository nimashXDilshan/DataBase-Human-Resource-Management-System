// src/components/EditEmployeeDialog.jsx
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  MenuItem
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

const maritalStatusOptions = ['Married', 'Unmarried'];
const genderOptions = ['Male', 'Female', 'Other'];

const EditEmployeeDialog = ({ open, handleClose, employee }) => {

  const [formData, setFormData] = useState({
    employeeId: employee.employeeId,
    firstName: employee.firstName,
    middleName: employee.middleName,
    lastName: employee.lastName,
    birthDate: new Date(employee.birthDate).toISOString().split('T')[0],
    maritalStatus: employee.maritalStatus,
    gender: employee.gender,
    workEmail: employee.workEmail,
    address: employee.address,
    telNo: employee.phone,
    recruitmentDate: new Date(employee.recruitmentDate).toISOString().split('T')[0],
    emergencyContactName: employee.emergencyContact.name,
    emergencyContactAddress: employee.emergencyContact.address,
    emergencyContactPhone: employee.emergencyContact.phone,
    sectionID: employee.section.sectionId,
    departmentID: employee.department.departmentId,
    branchID: employee.branch.branchId,
    supervisorID: employee.supervisor.supervisorId,
    employmentStatusID: employee.employmentStatus.employmentStatusId,
    roleID: employee.role.roleId
  });

  const [sectionOptions, setSections] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);
  const [supervisorOptions, setSupervisorOptions] = useState([]);
  const [selectedDept, setSelectedDept] = useState(0);
  const [employmentStatusOptions, setEmploymentStatusOptions] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employeeMoreInfo/branch');
        setBranchOptions(response.data);
      } catch (error) {
        console.error('Error fetching branches:', error);
      }
    };

    fetchBranches();
  }, []);

  useEffect(() => {
    const fetchSupervisors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employeeMoreInfo/supervisor');
        setSupervisorOptions(response.data);
      } catch (error) {
        console.error('Error fetching supervisors:', error);
      }
    };

    fetchSupervisors();
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employeeMoreInfo/department');
        setDepartmentOptions(response.data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    setSelectedDept(formData.departmentID);
  }, []);

  useEffect(() => {
    const fetchSectionsByDepartment = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/employeeMoreInfo/section/${selectedDept}`);
        setSections(response.data);
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };
    fetchSectionsByDepartment();
  }, [selectedDept]);

  useEffect(() => {
    const fetchEmploymentStatuses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employeeMoreInfo/status');
        setEmploymentStatusOptions(response.data);
      } catch (error) {
        console.error('Error fetching employment statuses:', error);
      }
    };

    fetchEmploymentStatuses();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/employeeMoreInfo/role');
        setRoles(response.data);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(`Form data: ${JSON.stringify(formData)}`);
  };

  const handleDeptChange = (e) => {
    setSelectedDept(e.target.value);
    console.log('Selected department:', e.target.value);
  }

  const handleSave = async (employee) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/employee/${employee.employeeId}`, formData);
      console.log('Employee updated successfully:', response.data);
      // Optionally, you can call handleClose to close the dialog after saving
      handleClose();
    } catch (error) {
      console.error('Error updating employee:', error);
      // Optionally, you can display an error message to the user
      alert('Failed to update employee. Please try again.');
    }
  };
  




  if (!employee) return null; // Return null if no employee is provided

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Employee Details</DialogTitle>
      <DialogContent>
        <Card className="w-full shadow-lg">
          <CardContent>
            <Typography variant="h6" className="text-primary font-bold mb-4 pb-6">
              Personal Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Employee ID"
                  name="employeeId"
                  variant="outlined"
                  fullWidth
                  value={formData.employeeId}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Middle Name"
                  name="middleName"
                  variant="outlined"
                  fullWidth
                  value={formData.middleName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Birth Date"
                  name="birthDate"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value={formData.birthDate}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Marital Status"
                  name="maritalStatus"
                  variant="outlined"
                  fullWidth
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                >
                  {maritalStatusOptions.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Gender"
                  name="gender"
                  variant="outlined"
                  fullWidth
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  {genderOptions.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Work Email"
                  name="workEmail"
                  variant="outlined"
                  fullWidth
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <EmailIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  value={formData.address}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <HomeIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Telephone Number"
                  name="telNo"
                  variant="outlined"
                  fullWidth
                  value={formData.telNo}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PhoneIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Recruitment Date"
                  name="recruitmentDate"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value={formData.recruitmentDate}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>

            <Divider className="my-6" />

            <Typography variant="h6" className="text-primary font-bold  mb-4 pt-10 pb-6">
              Emergency Contact Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Name"
                  name="emergencyContactName"
                  variant="outlined"
                  fullWidth
                  value={formData.emergencyContactName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Address"
                  name="emergencyContactAddress"
                  variant="outlined"
                  fullWidth
                  value={formData.emergencyContactAddress}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <HomeIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Emergency Contact Phone"
                  name="emergencyContactPhone"
                  variant="outlined"
                  fullWidth
                  value={formData.emergencyContactPhone}
                  onChange={handleInputChange}
                  InputProps={{
                    startAdornment: <PhoneIcon className="mr-2 text-primary" />
                  }}
                />
              </Grid>
            </Grid>

            <Divider className="my-6" />

            <Typography variant="h6" className="text-primary font-bold mb-4 pt-10 pb-6">
              Employment Details
            </Typography>
            <Grid container spacing={4}>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Department Name"
                  name="departmentID"
                  variant="outlined"
                  fullWidth
                  value={formData.departmentID} // This should be an empty string initially
                  onChange={(e) => {
                    handleInputChange(e);
                    handleDeptChange(e);
                  }}
                >

                  {/* Render department options dynamically */}
                  {departmentOptions.map((department, index) => (
                    <MenuItem key={index} value={department.department_id}>
                      {department.department_name}
                    </MenuItem>
                  ))}
                </TextField>

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Section Name"
                  name="sectionID"
                  variant="outlined"
                  fullWidth
                  value={formData.sectionID}
                  onChange={handleInputChange}
                >
                  {sectionOptions.map((section, index) => (
                    <MenuItem key={index} value={section.section_id}>
                      {section.section_name} {/* Access section_name correctly */}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Branch Name"
                  name="branchID"
                  variant="outlined"
                  fullWidth
                  value={formData.branchID}
                  onChange={handleInputChange}
                >
                  {branchOptions.map((branch, index) => (
                    <MenuItem key={index} value={branch.branch_id}>
                      {branch.branch_name} {/* Assuming your backend sends 'branch_name' */}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Supervisor"
                  name="supervisorID"
                  variant="outlined"
                  fullWidth
                  value={formData.supervisorID}
                  onChange={handleInputChange}
                >
                  {supervisorOptions.map((supervisor) => (
                    <MenuItem key={supervisor.supervisor_id} value={supervisor.supervisor_id}>
                      {supervisor.full_name} (ID: {supervisor.supervisor_id})
                    </MenuItem>
                  ))}
                </TextField>

              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Employment Status"
                  name="employmentStatusID"
                  variant="outlined"
                  fullWidth
                  value={formData.employmentStatusID}
                  onChange={handleInputChange}
                >
                  {employmentStatusOptions.map((status, index) => (
                    <MenuItem key={index} value={status.employment_status_id}>
                      {status.status_name} {/* Assuming your backend sends 'status_name' */}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Role"
                  name="roleID" // Ensure this matches your formData structure
                  variant="outlined"
                  fullWidth
                  value={formData.roleID}
                  onChange={handleInputChange}
                >
                  {roles.map((role, index) => (
                    <MenuItem key={index} value={role.role_id}>
                      {role.role_name} {/* Assuming your backend sends 'role_name' */}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


            </Grid>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleSave(employee)} variant="contained" color="primary">
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditEmployeeDialog;
