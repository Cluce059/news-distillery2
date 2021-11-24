const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedArticles` array in User.js
const articleSchema = new Schema({
  title: {
    type: String,
  },
  creator:
    {
      type: String,
    },
  description: {
    type: String,
  },
  image_url: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  articleId: {
    type: String,
    required: true
  },
  content: {
    type: String
  }
});

module.exports = articleSchema;