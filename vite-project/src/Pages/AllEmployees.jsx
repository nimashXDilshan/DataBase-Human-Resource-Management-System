import React, { useState, useEffect } from 'react';
import {
    TextField, IconButton, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography, Tooltip
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';

import AddEmployeeDialog from '../Components/AddEmployeeDialog';
import ViewMoreDialog from '../Components/ViewMoreDialog';
import EditEmployeeDialog from '../Components/EditEmployeeDialog';
import DeleteConfirmationDialog from '../Components/DeleteConfirmationDialog'; // Import the delete dialog


const AllEmployees = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchBy, setSearchBy] = useState('name');
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openViewDialog, setOpenViewDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for delete dialog
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/employee'); // Replace with your actual API route
                const data = await response.json();
                setEmployees(data); // Set the fetched employee data
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        fetchEmployees();
    }, []); // Empty dependency array to run only on mount

    const handleSearchByChange = (event) => {
        setSearchBy(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleAddNew = () => {
        console.log("Add new employee clicked"); // For debugging
        setOpenAddDialog(true);
    };

    const handleViewMore = (employee) => {
        console.log("View more clicked for", employee); // For debugging
        setSelectedEmployee({
            employeeId: employee.employee_id,
            firstName: employee.first_name,
            middleName: employee.middle_name,
            lastName: employee.last_name,
            email: employee.company_work_email,
            phone: employee.employee_tel_no,
            role: {
                roleId: employee.role_id,  // Added role_id
                roleName: employee.role_name
            },
            emergencyContact: {
                name: employee.emergency_contact_name,
                address: employee.emergency_contact_address,
                phone: employee.emergency_contact_tel_no
            },
            section: {
                sectionId: employee.section_id,  // Added section_id
                sectionName: employee.section_name
            },
            department: {
                departmentId: employee.department_id,  // Added department_id
                departmentName: employee.department_name
            },
            branch: {
                branchId: employee.branch_id,  // Added branch_id
                branchName: employee.branch_name
            },
            supervisor: {
                supervisorId: employee.supervisor_id,  // Added supervisor_id
                supervisorName: employee.supervisor_name
            },
            employmentStatus: {
                employmentStatusId: employee.employment_status_id,  // Added employment_status_id
                employmentStatusName: employee.employment_status_name
            },
            birthDate: employee.birth_date,
            maritalStatus: employee.marital_status,
            gender: employee.gender,
            workEmail: employee.company_work_email,
            address: employee.employee_address,
            telephoneNumber: employee.employee_tel_no,
            recruitmentDate: employee.recruitment_date

        });
        setOpenViewDialog(true);
    };

    const handleEdit = (employee) => {
        console.log("Edit clicked for", employee); // For debugging
        setSelectedEmployee({
            employeeId: employee.employee_id,
            firstName: employee.first_name,
            middleName: employee.middle_name,
            lastName: employee.last_name,
            email: employee.company_work_email,
            phone: employee.employee_tel_no,
            role: {
                roleId: employee.role_id,  // Added role_id
                roleName: employee.role_name
            },
            emergencyContact: {
                name: employee.emergency_contact_name,
                address: employee.emergency_contact_address,
                phone: employee.emergency_contact_tel_no
            },
            section: {
                sectionId: employee.section_id,  // Added section_id
                sectionName: employee.section_name
            },
            department: {
                departmentId: employee.department_id,  // Added department_id
                departmentName: employee.department_name
            },
            branch: {
                branchId: employee.branch_id,  // Added branch_id
                branchName: employee.branch_name
            },
            supervisor: {
                supervisorId: employee.supervisor_id,  // Added supervisor_id
                supervisorName: employee.supervisor_name
            },
            employmentStatus: {
                employmentStatusId: employee.employment_status_id,  // Added employment_status_id
                employmentStatusName: employee.employment_status_name
            },
            birthDate: employee.birth_date,
            maritalStatus: employee.marital_status,
            gender: employee.gender,
            workEmail: employee.company_work_email,
            address: employee.employee_address,
            telephoneNumber: employee.employee_tel_no,
            recruitmentDate: employee.recruitment_date
        });
        setOpenEditDialog(true);
    };

    const handleDelete = (employee) => {
        setSelectedEmployee(employee);
        setOpenDeleteDialog(true); // Open delete confirmation dialog
    };

    const handleDeleteEmployee = async (employeeId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/employee/${employeeId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove the deleted employee from the state
                setEmployees((prevEmployees) => prevEmployees.filter(employee => employee.employee_id !== employeeId));
                console.log(`Employee with ID ${employeeId} deleted successfully.`);
            } else {
                console.error('Error deleting employee:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div className="p-6 bg-background min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <Typography variant="h4" className="font-bold text-primary">
                    All Employees
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddNew}
                    className="bg-primary hover:bg-accent"
                >
                    Add Employee
                </Button>
            </div>

            {/* Search and Dropdown */}
            <div className="flex justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <TextField
                        label="Search Employees"
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
                        <MenuItem value="email">Email</MenuItem>
                        <MenuItem value="role">Role</MenuItem>
                    </Select>
                </div>
            </div>

            {/* Employee Table */}
            <TableContainer className="shadow-lg">
                <Table>
                    <TableHead>
                        <TableRow className="bg-gray-100">
                            <TableCell><strong>Name</strong></TableCell>
                            <TableCell><strong>Email</strong></TableCell>
                            <TableCell><strong>Employee ID</strong></TableCell>
                            <TableCell><strong>Phone</strong></TableCell>
                            <TableCell><strong>Role</strong></TableCell>
                            <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees
                            .slice()  // Creates a shallow copy of the array
                            .sort((a, b) => b.employee_id - a.employee_id)  // Sorts in descending order by employee_id
                            .map((employee) => (
                                <TableRow key={employee.id} className="hover:bg-gray-50 transition duration-300">
                                    <TableCell>{`${employee.first_name} ${employee.middle_name} ${employee.last_name}`}</TableCell>
                                    <TableCell>{employee.company_work_email}</TableCell>
                                    <TableCell>{employee.employee_id}</TableCell>
                                    <TableCell>{employee.employee_tel_no}</TableCell>
                                    <TableCell>{employee.role_name}</TableCell>
                                    <TableCell>
                                        <Tooltip title="View More Info">
                                            <IconButton color="primary" className="mr-2" onClick={() => handleViewMore(employee)}>
                                                <MoreHorizIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Edit">
                                            <IconButton color="secondary" className="mr-2" onClick={() => handleEdit(employee)}>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton style={{ color: 'red' }} onClick={() => handleDelete(employee)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* Add New Employee Dialog */}
            {openAddDialog && (
                <AddEmployeeDialog open={openAddDialog} handleClose={() => setOpenAddDialog(false)} />
            )}

            {/* View More Dialog */}
            {openViewDialog && selectedEmployee && (
                <ViewMoreDialog open={openViewDialog} handleClose={() => setOpenViewDialog(false)} employee={selectedEmployee} />
            )}

            {/* Edit Employee Dialog */}
            {openEditDialog && selectedEmployee && (
                <EditEmployeeDialog open={openEditDialog} handleClose={() => setOpenEditDialog(false)} employee={selectedEmployee} />
            )}

            {/* Delete Confirmation Dialog */}
            {openDeleteDialog && selectedEmployee && (
                <DeleteConfirmationDialog
                    open={openDeleteDialog}
                    handleClose={() => setOpenDeleteDialog(false)}
                    employee={selectedEmployee}
                    onConfirmDelete={handleDeleteEmployee} // Pass the delete function here
                />
            )}
        </div>
    );
};

export default AllEmployees;
