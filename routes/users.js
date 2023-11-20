import  express, { Router }  from "express";
const route = express.Router() ;
import { getUsers,cerateUser,getUser,deleteUsers ,UpdateUsers } from "../controllers/users.js";


route.get("/users",getUsers);
route.post("/user",cerateUser);
route.get("/user/:id",getUser)
route.delete("/user/:id",deleteUsers);
route.put("/user/:id",UpdateUsers);
export default route ;