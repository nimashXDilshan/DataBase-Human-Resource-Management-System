import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import leaveRoutes from './routes/leaveRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/leave', leaveRoutes); // Use the leave routes

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
