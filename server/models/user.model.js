const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId:{
    type:Number,
    required:true
  },
  hashedPin: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  roles: [{
    type: String,
  }]
}, {
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);

