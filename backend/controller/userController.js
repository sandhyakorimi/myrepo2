// const { default: Userdetails } = require("../../mca_class/src/back");

// const userData = require("../model/usermodel");
const userData = require("../model/usermodel");

const AddUser = async(req,res) =>{
    const {userName,userNumber} = req.body;
    console.log(userName,userNumber);
    try{
        // const mydata = new userData({userName,userNumber});
        // await mydata.save();
        await userData.insertMany(req.body)
        res.status(201).send({message:"user added succesfully.."});
        // res.send("user added Successfullly..")
    }
    catch(er){
        console.log(er);
        res.status(500).send(er);
    }

}

const GetUserDetails = async(req,res)=>{
    try{
        // const mydata = await userData.find();
        // const mydata = await userData.findById(req.params.id);
        const mydata = await userData.findOne(req.params.username);

        res.status(200).send(mydata);
        // res.send(mydata);
    }
    catch(er){
        res.status(500).send(er);
    }
}
// update the user by id
const UpdateUserById = async(req,res)=>{
    try{
        const updatinguser = await userData.findByIdAndUpdate(
        req.params.id ,
        req.body)
        if(!updatinguser){
            return res.status(404).send("user not found");
        }
        return res.status(200).send("user updated successfully")
    }catch(er){
        console.log(er);
        res.status(500).send(er);
    }
}
//delting the user
const deleteUserById = async(req,res)=>{
    try{
      const deleteUser = await userData.findByIdAndDelete(req.params.id)
      if(!deleteUser){
        return res.status(404).send("user not deleted");
      }
        return res.status(200).send("user deleted successfully");
    }catch(er){
      res.status(500).send(er);
    }
}
exports.AddUser =  AddUser;
exports.GetUserDetails = GetUserDetails;
exports.UpdateUserById = UpdateUserById;
exports.deleteUserById= deleteUserById;
// modal
// controller
// router
// post
// get