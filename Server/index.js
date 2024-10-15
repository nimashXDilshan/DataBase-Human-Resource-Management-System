import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import leaveRoutes from './routes/leaveRoutes.js';
import createUserAccount from './routes/CreateUserAccountRoute.js';

//import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/leave', leaveRoutes); // Use the leave routes
app.use('/api/register', createUserAccount);
//app.use('/api/employee', employeeRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
