import {v4 as uuid} from"uuid"; 

let users =[];
export const getUsers = (req ,res) => {
    res.send(users)
};
export const cerateUser = (req , res ) =>{
    const user= req.body ;
    users.push({...user, id:uuid()});
    res.send("user Added Successfully");
};
export const getUser = (req ,res) => {
    const singleUser = users.filter(  (users) => users.id === req.params.id ) ; 
    res.send(singleUser);
};
export const deleteUsers = (req,res) =>{
    users= users.filter(  (users) => users.id !== req.params.id ) ; 
    res.send("user Deleded Successfully");
};
export const UpdateUsers = (req,res) =>{
    const user = user.find((user) =>user.id === req.params.id);
    //user.name= req.body.name; 
    res.send("User Update Successfully ")
}
