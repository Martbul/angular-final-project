const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "the NAME of the order is required"],
    // validate: {
    //   validator: function (value) {
    //     return /^[a-zA-Z]+ [a-zA-Z]+$/.test(value);
    //   },
    //   message: "please enter a correct name(exp: Discord))",
    // },
  },
  description: {
    type: String,
    required: [true, "the description is required"],
  },
  app_id: {
    type: String,
    required: [true, "the price for the order is required"],
  },
  price: {
    type: Number,
    required: [true, "the price for the order is required"],
  },
  category: {
    type: String,
    required: [true, "the category field is required"],
  },

  imgUrl: {
    type: String,
    required: [true, "the img field is required"],
  },
  likes: {
    type: Number,
  },
  likedBy: {
    type: Array,
  },
  _creator: { type: String },
});


const App = mongoose.model("App", appSchema);

module.exports = App;
