// import mysql from "mysql";

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "vite_project"
// })

// con.connect(function(err) {
//     if (err){
//         console.log("Connection error")
//     }
//     else{
//         console.log("Connected")
//     }
// })

import mysql from "mysql";

const con = mysql.createConnection({
    host: "localhost",   
    user: "root",       
    password: "",       
    database: "vite_project" 
});

con.connect(function(err) {
    if (err){
        console.log("Connection error:", err);
    } else {
        console.log("Connected to the MySQL database");
    }
});

export default con;  
