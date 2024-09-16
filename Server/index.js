import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from "mysql";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Dulz@0216",
  database: "hrms"
})

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM leave_request ";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { leave_type, from_date, to_date, leave_reason } = req.body;

  const sqlInsert = "INSERT INTO leave_request (leave_type, from_date, to_date, leave_reason) VALUES (?,?,?,?)";
  db.query(sqlInsert, [leave_type, from_date, to_date, leave_reason], (error, result) => {
    if (error) {
      console.log("SQL error:", error);
    } 
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;

  const sqlRemove = "DELETE FROM leave_request  WHERE id = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log("SQL error:", error);
    } 
  });
});

app.get("/api/get/:id", (req, res) => {
  const {id} = req.params;
  const sqlGet = "SELECT * FROM leave_request WHERE id = ?";
  db.query(sqlGet, id, (error, result) => {
    if(error){
      console.log(error);
    }
    res.send(result);
  });
});

// app.put("/api/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { leave_type, from_date, to_date, leave_reason } = req.body;

//   // Update SQL query with placeholders for parameters
//   const sqlUpdate = "UPDATE leave_request SET leave_type = ?, from_date = ?, to_date = ?, leave_reason = ? WHERE id = ?";
  
//   // Pass the parameters as an array, including the `id` at the end
//   db.query(sqlUpdate, [leave_type, from_date, to_date, leave_reason, id], (error, result) => {
//     if (error) {
//       console.log("SQL error:", error);
//       res.status(500).send("Error updating record");
//     } else {
//       res.send(result);
//     }
//   });
// });


app.put("/api/update/:id", (req, res) => {
  const {id} = req.params;
  const {leave_type, from_date, to_date, leave_reason} = req.body;
  const sqlUpdate = "UPDATE leave_request SET leave_type = ?, from_date = ?, to_date = ?, leave_reason = ? WHERE id = ?";
  db.query(sqlUpdate, [leave_type, from_date, to_date, leave_reason], (error, result) => {
    if(error){
      console.log(error);
    }
    res.send(result);
  });
});

// app.get("/", (req, res) => {
//   const sqlInsert = "INSERT INTO leave_request (leave_type, from_date, to_date, leave_reason) VALUES ('llll', '2024-01-17', '2024-02-17', 'fdmnggnb')";
//   db.query(sqlInsert, (error, result) => {
//     console.log("error", error);
//     console.log("result", result);
//     res.send("Hello express");
//   })
// })

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
})