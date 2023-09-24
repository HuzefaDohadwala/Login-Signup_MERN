const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email address',
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (value) => validator.isMobilePhone(value, 'any', { strictMode: false }),
      message: 'Invalid phone number',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  country: {
    type: String,
    enum: [
      'Bahrain',
      'Bangladesh',
      'India',
      'Indonesia',
      'Japan',
      'Malaysia',
      'Nepal',
      'Pakistan',
      'Singapore',
      'South Korea',
      'Sri Lanka',
      'Taiwan',
      // Add more countries as needed
    ],
  },
  age: {
    type: Number,
    min: 18,
    max: 120,
  },
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel
