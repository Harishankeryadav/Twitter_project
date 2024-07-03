const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type : String,
        required : true,
        max : [250, 'max tweet size is 250 car '],
    },
    hashtags:[
       { type : mongoose.Schema.Types.ObjectId,
        ref : 'Hashatg'
       }
    ]
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;