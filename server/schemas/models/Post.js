const mongoose = require('mongoose');

// Check if the 'Post' model already exists
const Post = mongoose.models.Post || mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    main_image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Media'
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {timestamps: true}));

module.exports = Post;