const express = require('express');
const router = express.Router();
const fs = require('fs');



router.get('/notes', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        res.json(notes);
        console.log(notes);
    })
});

router.post('/notes', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        
        let notes = JSON.parse(data);

        let newNote = req.body;
        let noteId = (notes.length).toString();
        newNote.id = noteId;
        notes.push(newNote);

        fs.writeFileSync('db/db.json', JSON.stringify((notes), null, 2), (err, data) => {
            if (err) throw err;
        })
        res.json(notes);
    })
});

// router.delete('/notes:id', (req, res) => {
//     fs.readFile('db/db.json', (err, data) => {
//         if (err) throw err;

//         let notes = JSON.parse(data);
//         const id = req.params.id;
//     })

// })

module.exports = router;