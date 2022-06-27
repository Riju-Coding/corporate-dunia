    const express= require('express');
    const router= express.Router()
const Company = require('../models/Company')

router.get('/fetchallcompanies', async (req,res)=>{
    try {
       const page = parseInt(req.query.page || "0");
       const alise=req.query.alise
       const totalResults = await Company.countDocuments({})
       const PAGE_SIZE=90;
      
        const companies = await Company.find().limit(PAGE_SIZE).skip(PAGE_SIZE*page)
        res.json({companies,totalResults});
   
    
        // const companies = await Company.find({}).where('ALISE').equals(alise).limit(PAGE_SIZE).skip(PAGE_SIZE*page)
        // res.json({companies,totalResults}); 
  
   
       
       
      
       
       
    } catch (error) {
        console.error(error.massege);
        res.status(500).send("Some Error Occured"); 
    }

})
router.get('/company_by_alise/companies', async (req, res)=>{
    try {
        const page = parseInt(req.query.page || "0");
        const alise=req.query.alise
      
        const PAGE_SIZE=90;
       
        //  const companies = await Company.find().limit(PAGE_SIZE).skip(PAGE_SIZE*page)
       
    
     
         const company = await Company.find({}).where('ALISE').equals(alise)
         // res.json({companies,totalResults}); 
         res.json(company);
    
        
        
       
        
        
     } catch (error) {
         console.error(error.massege);
         res.status(500).send("Some Error Occured"); 
     }

})
module.exports = router   