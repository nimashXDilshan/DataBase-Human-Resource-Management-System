import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';
import bodyParser from 'body-parser';

import createUserAccount from './routes/CreateUserAccountRoute.js';
import loginAcconut from './routes/loginAcconutRoutes.js';
import db from './config/db.js';
import employeeRoute from './routes/employeeRoute.js'
import employeeMoreInfoRoute from './routes/employeeMoreInfoRoute.js'; 
import {gen} from './controllers/hashgen.js';
import passport from './auth/stratergy.js';

import approveLeaveRequest from './routes/AcceptLeavesSupervisorRoutes.js';
import updatestatusleave from './routes/ChangeStatusoftheleavebysupervisor.js'

import nationality from './routes/getNationalityRoutes.js'
import personalDetails from './routes/personaldetailsRoutes.js'
import paygradedetails from './routes/paygradedetailsRoutes.js'
import emergencycontactdetailsprofile from './routes/contactdetailsRoutes.js'
import employmentdetails from './routes/employmentDetailsRoutes.js'
import SalaryRecords from './routes/SalaryRecordRoutes.js'

import getleaverequestusingleave_id from './routes/getleaverequestbyleaveId.js'
import deleteleavebyleave_id from './routes/deleteLeaveRoutes.js'
import loadleavebyemployee_id from './routes/loadleaverequestbyemployee_id.js'
import createleaveRoutes from './routes/createleaveRoutes.js';


import reportingEmployeedepartment from './routes/ReportingModuleRoutesDepartment.js'
import reportingLeaves from './routes/ReportingModuleLeavesByDepartment.js'
import reportingrole from './routes/ReportingModuleRole.js'
import reportingreport from './routes/ReportingModuleReport.js'

//import BranchForFillEmployeeDetails from './routes/BranchRoutes.js';

import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());




// Check for the authentication
const checkAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.error('Authentication error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      console.error('Authentication failed:', info?.message);
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    req.user = user;
    next();
  })(req, res, next);
};


const checkHRManager = (req, res, next) => {
  console.log('Role ', req.user.role_id);
  if (req.user.role_id === '1') {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden' });
}

app.use('/api/employee', checkAuth, checkHRManager, employeeRoute);
app.use('/api/employeeMoreInfo', checkAuth, checkHRManager, employeeMoreInfoRoute);

app.use('/api/approveLeave', approveLeaveRequest);


//---------------------------------------------------------------------------------------------leave details

app.use('/api/Createleave', checkAuth,createleaveRoutes); // Use the leave routes
app.use('/api/Viewleave',checkAuth,getleaverequestusingleave_id); // Use the leave routes
app.use('/api/Loadleave', checkAuth,loadleavebyemployee_id)
app.use( '/api/Deleteleave', checkAuth,deleteleavebyleave_id)

//---------------------------------------------------------------------------------------------login & create accounts



app.use('/api/register', createUserAccount);
app.use('/api/login', loginAcconut);


//-------------------------------------------------------------------supervisor
app.use('/api/approveLeave', approveLeaveRequest);
app.use('/api/ChangeStatusapproveLeave', updatestatusleave);
//-------------------------------------------------------------------

app.use('/api/employeeMoreInfo', employeeMoreInfoRoute);

app.get('/gen',gen);

//app.use('/api/branch',BranchForFillEmployeeDetails)

//app.use('/api/employee', employeeRoutes);


//-------------------------------------------------------------------------Get Login profile Details 
app.use("/api/Nationality", nationality);

app.use("/api/PayGrade", checkAuth,paygradedetails);
app.use("/api/EmergencyContact", checkAuth, emergencycontactdetailsprofile);
app.use("/api/PersonalDetails", checkAuth,  personalDetails);
app.use("/api/EmployementDetails", checkAuth, employmentdetails);


app.use("/api/Salary_Record",checkAuth, SalaryRecords);


//---------------------------------------------------------------------------------------------------Reporting module
app.use("/api/employeedepartment", reportingEmployeedepartment);
app.use("/api/total_leaves", reportingLeaves);
app.use("/api/employees_by_role", reportingrole);
app.use("/api/employee_report", reportingreport);



//------------------------------------------------------------------------------------



app.get('/',(re,res)=>{
  return res.json("From Backend side");
})
//Personal Details Section

//--------------------------------------------------------------------------------------------------------------

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
