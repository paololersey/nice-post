// Import dependencies
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
//const dbHost = 'mongodb://database/mean-docker';

const dbHost = 'mongodb://localhost/nice-post';
if(process.env.MONGODB_URI){
   dbHost = 'mongodb://ds139082.mlab.com:39082/heroku_r5bwrx0k';
}

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const sentenceSchema = new mongoose.Schema({
  name: String,
  time: Date,
  sentence: String
});
mongoose.model('Sentence', sentenceSchema);

// create mongoose model
const Sentence = mongoose.model('Sentence', sentenceSchema);
sentenceSchema.plugin(autoIncrement, {inc_field: 'id'});

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all sentences. */
router.get('/sentences', (req, res) => {
    Sentence.find({}, (err, sentences) => {
        if (err) res.status(500).send(error)

        res.status(200).json(sentences);
    });
});

/* GET one sentences. */
router.get('/sentences/:id', (req, res) => {
    Sentence.findById(req.param.id, (err, sentences) => {
        if (err) res.status(500).send(error)

        res.status(200).json(sentences);
    });
});

router.delete('/sentences/:id', (req, res) => {
    Sentence.remove({_id: req.params.id}, (err, sentences) => {
        if (err) res.status(500).send(error)

        res.status(200).json(sentences);
    });
});

/* Create a Sentence. */
router.post('/sentences', (req, res) => {
    let sentence = new Sentence({
        name: req.body.name,
        time: req.body.time,
        sentence: req.body.sentence
    });

    sentence.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'Sentence created successfully'
        });
    });
});

module.exports = router;
