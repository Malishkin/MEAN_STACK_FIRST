const mongoose = require('mongoose');

let todosSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
})
 

let postsSchema = new mongoose.Schema({
    post_title: String,
    body: String
})

let user1Schema = new mongoose.Schema({
    full_name: String,
    email: String,
    street: String,
    city: String,
    zipcode: Number,
    todos: [todosSchema],
    posts: [postsSchema]
    
});

module.exports = mongoose.model('users1', user1Schema)