const mongoose = require('mongoose');

class TweetService {
    constructor() {
        this.tweetRepository = new this.tweetRepository();
    }

    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}

module.exports = TweetService;