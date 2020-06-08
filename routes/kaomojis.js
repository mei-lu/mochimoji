const express = require('express')
const router = express.Router();
const Kaomoji = require('../models/kaomoji')

// Get kaomojis in the database
router.get('/', async (req, res) => {
    const allKaomojis = await Kaomoji.find()
    res.json(allKaomojis)
})

//Get random Kaomoji with any emotion
router.get('/random', async (req, res) => {
    const count = Kaomoji.estimatedDocumentCount
    const randomKaomoji = await Kaomoji.find().skip().limit(1)
    res.json(randomKaomoji)
})

// Get a specific Kaomoji by emotion
router.get('/:emotion', (req, res) => {
    const emotionInput = req.params.emotion
    Kaomoji.countDocuments({emotion: emotionInput}, (err, count) => {
        random = Math.floor(Math.random() * count);

        findKaomoji = emotionInput => {
            Kaomoji.find({emotion: emotionInput}, (err, kaomoji) => {
                 res.json(kaomoji)
             }).skip(random).limit(1)
        }
        findKaomoji(emotionInput)
    })
})

// Submits a Kaomoji to the database
router.post('/', (req, res) => {
    const kaomoji = new Kaomoji({
        kaomoji: req.body.kaomoji,
        emotion: req.body.emotion
    })

    kaomoji.save()
    .then(data => {
        res.json(data)
    })
    .catch(error => {
        res.send('error!')
    })
    
})

module.exports = router;