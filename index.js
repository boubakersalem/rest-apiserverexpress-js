import  express  from "express";
import bodyparser from "body-parser";
import cors from"cors";

import users from "./routes/users.js";



const app = express(); 


const port = 5000 ;
app.use(bodyparser.json()); 
app.use(cors());
app.use("/", users);
app.get("/",(req,res) => res.send("server express  js  from  boubaker  salem"));
app.all("/", (res,req) => res.send("that route  dosen t exist "))
app.listen(port, () => 
console.log('server listeing  in prot :http://localhost:${port} '));
