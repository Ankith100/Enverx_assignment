const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    blog: {
      type: String,
      required: [true, "Please add the blog post"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);