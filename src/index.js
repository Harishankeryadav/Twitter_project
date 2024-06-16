const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comments');

app.listen(3000, async ()=> {
    console.log('server started');
    await connect();
    console.log('mongo db coonected');

    // const tweet = await Tweet.create({
    //     content:'first tweet',
    //     userEmail: 'a@b.com',
    //     userName:'hari',
    // });
    // const tweets = await Tweet.find({});

    const tweetRepo = new TweetRepository();
    // const tweet  = await tweetRepo.create({content: 'new tweet'} );
    // console.log(tweet);
    // const comment = await Comment.create({content:'first comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    const tweet  = await tweetRepo.getWithComments('666ddb5ef78bebb27ef2efcf');
    console.log(tweet);
});