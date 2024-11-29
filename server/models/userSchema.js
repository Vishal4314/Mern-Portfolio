const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
  },
  lName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  mobile: {
    type: String,
    required: true,
  },
  messages: [],
});

//save message method
userSchema.methods.saveMessage = async function (message) {
  try {
    this.messages = this.messages.concat({ message });
    await this.save();
    return message;
  } catch (error) {
    console.log("error while saving data in DB", error);
  }
};

const users = new mongoose.model("users", userSchema);

module.exports = users;
