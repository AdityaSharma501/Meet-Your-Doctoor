const express = require("express");
const app = express();
const port = 5000;

const mysql = require("./connection").con

//configuration
app.set("view engine","hbs");
app.set("views","./view");
app.use(express.static(__dirname + "/public"));

// routing
app.get("/", (req,res)=>{
res.render("index");  //we can render html also but we will 
                   //use js template engines
});
app.get("/add", (req,res)=>{
    res.render("add");  
    });
    


app.get("/addstudent",(req,res)=>{
    const {name,phone,email,gender}=req.query
    

//fetching data from form
//sanitization XSS... 
//yaha pe query likhenge 
let qry ="select * from test where email=? or phone=?";
mysql.query(qry,[email,phone],(err,results)=>{
    console.log("qry started");
    if(err)
    throw err

    else{
        console.log("no throw error");
        if(results.length>0){
            if(results.affectedRows >0){
                res.render('add',{checkmesg:true})
               }
        }
        else{

            let qry2 = "insert into test values(?,?,?,?)";
            mysql.query(qry2, [name,phone,email,gender],(err,results)=>{
               console.log("data added");
               if(results.affectedRows >0){
                res.render('add',{mesg:true})
               }
                //res.send(results);
            })
        }
       
    }
})
//res.send(req.query)
//res.json("ok ok")
});

app.get("/search",(req,res)=>{
    res.render("search");
});

app.get("/update",(req,res)=>{
    res.render("update");
});

app.get("/delete",(req,res)=>{
    res.render("delete");
});

app.get("/view",(req,res)=>{
    res.render("view");
});

app.listen(port,(err) =>{
    if(err)
    throw err
    else
    console.log("server is listening at %d:",port);
    
})