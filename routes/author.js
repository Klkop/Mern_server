const express = require('express');
const router = express.Router();
const Author = require('../model/authorModel');
const Books=require('../routes/books')
// REST API POST METHOD TO HANDLE POST REQUEST
router.post('/', async (req, res) => {
    try {
        const { _id, name, age, total, discreption } = req.body;
        const author = new Author({ _id, name, age, total,discreption });
        // Save to the database
        await author.save();
        res.status(201).send({ message: "Author Created" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
router.get('/',async (req,res)=>{
    try{ 
        const data = await Author.find({},'name');
        const authorNames=data.map(author=> author.name);
        res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
router.put('/', async (req, res) => {
    const {authorName} = req.body;
    try { 
      const author = await Author.findOne({name:authorName})
      if(!author){
        return res.status(404).json({message:"author not found"})
      }
      author.total += 1;
      await author.save(); 
      res.status(201).json({message:"incremented"}); 
  } 
  catch (err) { 
  res.status(400).json({ message: err.message }); 
  }
   });


module.exports = router;
