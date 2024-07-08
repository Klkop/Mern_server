const express = require('express');
const router = express.Router();
const Book = require('../model/bookModel');

// REST API POST METHOD TO HANDLE POST REQUEST
router.post('/', async (req, res) => {
    try {
        const { _id, publisher, totalbooks, authorId,discreption } = req.body;
        const book = new Book({ _id,publisher, totalbooks,authorId,discreption });
        // Save to the database
        await book.save();
        res.status(201).send({ message: "book Created" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
router.get('/',async(req,res)=>{
    try{
        const data=await Book.find({},'publisher')
        const booknames=data.map(book=>book.publisher)
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
    }
)
module.exports = router;
