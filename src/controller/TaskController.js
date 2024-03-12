const TasksModel = require("../model/TasksModel");

//User to-do list create
exports.create=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let reqBody=req.body;
        reqBody.email=email;
        await TasksModel.create(reqBody);
        res.json({status:"success",message:"Create Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
//User to-do list read
exports.read=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let data=await TasksModel.find({email:email});
        res.json({status:"success",data:data})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
//User to-do list update
exports.update=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let {id}=req.params;
        let reqBody=req.body;
        await TasksModel.updateOne({_id:id,email:email},reqBody);
        res.json({status:"success",message:"Update Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

//User to-do list delete
exports.delete=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let {id}=req.params;
        await TasksModel.deleteOne({_id:id,email:email});
        res.json({status:"success",message:"Delete Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

//User to-do list complete/cancel mark status

exports.statusMark=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let {id}=req.params;
        let reqBody=req.body;
        await TasksModel.updateOne({_id:id,email:email},reqBody);
        res.json({status:"Complete",message:"Update mark Completed"})
    }catch (err) {
        res.json({status:"cancel",message:err})
    }
}