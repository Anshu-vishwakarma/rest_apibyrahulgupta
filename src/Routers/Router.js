const express = require("express");
const router = express.Router();
const UsersSignUp = require("../Modals/Signup");


router.get("/",(req,res)=>{
      res.send("i am express router js home page ")
})

router.post("/studentregister",async (req,res)=>{
    const {email} = req.body;
   try{
       const userExist = await UsersSignUp.findOne({email})
       if(userExist){
           return res.status(522).json({msg:"Email Already Exists "});
       }

         const result =  await UsersSignUp(req.body).save()
         res.status(201).json({msg:" User Registered Successfully "});

   }catch(error){
       res.status(500).json({error:"something went wrong "})
       console.log(error);
   }

})


router.get("/studentregister",async (req,res)=>{
  try{
        const result = await UsersSignUp.find();
        res.status(201).json({msg:result})
  }catch(error){
    res.status(500).json({msg:"Something Went Wrong "});
    console.log(error);
  }
})

// show data using id 

router.get("/studentregister/:id",async (req,res)=>{
   const _id = req.params.id;
    try{
        const result = await UsersSignUp.find({_id})
        res.status(201).json({message:result});
    }catch(e){
            res.status(500).json({error:"Something Went Wrong!"})
    }
})



//  restful api for delete by using mongodb 
router.delete("/studentregister/:id1",async(req,res)=>{
    const _id = req.params.id1;
    try{
        const response = await UsersSignUp.deleteOne({_id});
       res.status(201).json({msg:" Deleted "})
    }catch(error){
        res.status(500).json({msg:"Something Went Wrong!"})
        console.log(error);
    }
    
})


// api for update documents  

router.patch("/studentregister/:id",async (req,res)=>{
    const _id = req.params.id;
      try{
          const result = await UsersSignUp.updateOne({_id},{$set:req.body});
         res.status(201).json({message:" Data Updated Successfully "});
      }catch(e){
          res.status(500).json({message:"Something Is Wrong!"});
      }
})

module.exports = router;


/*
promise code for sav data in to data base 
router.post("/usersignup",(req,res)=>{
    const {email} = req.body;
    // console.log(req.body);
    // res.json({message:req.body});
    UsersSignUp.findOne({email}).then((suerExists) => {
        if(suerExists)
            return res.status(422).json({error:" Email Exists Already "});
          
          const result =  UsersSignUp(req.body).save();
          result.then((done)=>{
            res.status(201).json({message:" User Registered Successfully "})
          }).catch((error)=>{
                res.status(500).json({error:error})
          })

    }).catch((err) => {
        res.status(500).json({error:err})
    });
})


// here we are going to create a get request to get data from remote database 

router.get("/usersignup",(req,res)=>{
//   res.json({msg:"done"})
UsersSignUp.find().then((result) => {
    res.status(201).json({msg:result})
}).catch((err) => {
    res.status(422).json({msg:err})
});
})
*/