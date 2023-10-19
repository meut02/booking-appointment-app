const User=require('../models/User')

exports.addexpense=(async(req,res,next)=>{
    try{
    const expenseamount=req.body.expenseamount;
    const description=req.body.description;
    const category=req.body.category
  
    const data= await User.create({expenseamount:expenseamount,description:description,Category:category})
    res.status(201).json({newexpensedetails:data});
    }
    catch(err){
      res.status(500).json({
        error:err
      })
    }
  })

  exports.getexpense=(async(req,res,next)=>{
    try{
    const expense=await User.findAll()
    res.status(200).json({allexpense:expense})
    }
    catch(err){
      res.status(500).json({error:err})
    }
  })

  exports.deleteexpense=(async(req,res,next)=>{
    try{
      if(req.params.id=='undefined')
      {
       return res.status(400).json({err:'id is missing'})
      }
    const uid=req.params.id
    await User.destroy({where:{id:uid}})
    res.sendStatus(200);
    }
    catch(err){
      console.log(err)
    }
  })

  exports.editexpense=(async(req,res,next)=>{
    try{
      if(req.params.id=='undefined')
      {
        return res.status(400).json({err:'id is missing'})
      }
      const uid=req.params.id
    }
    catch(err){
      console.log(err)
    }

    
  })