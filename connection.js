const mysql = require("mysql");
//port ="3307";
const con = mysql.createConnection

(
{    
host:"localhost",
user:"root",
password:"",
database:"datadoc",
port:"3307"
}
);

con.connect((err)=>
{
    if(err) console.log(err);
    console.log("everthing ok in database:");
});


// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE doctorProfile (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),spec varchar(30),degree varchar(30),avail varchar(10),address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

module.exports.con= con;