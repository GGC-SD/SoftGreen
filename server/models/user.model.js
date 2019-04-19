const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  hashedPassword: {
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

const ScheduleSchema = new mongoose.schema({
  crn: {
    type: Integer,
    required: false,
    unique: true
  },
  dept: {
    type: String,
    required: false,
    unique: false
  },
  course: {
      type: String,
      required: false,
      unqiue:false
  },
  courseSection: {
    type: String,
    required: false,
    unique: false
  },
  courseSectionNum: {
    type: Integer,
    required: false,
    unique: false
  },
  sectNum: {
    type: Integer,
    required: false,
    unique: true
  },
  term: {
    type: String,
    required: false,
    unique: false
  },
  days: {
    type: String,
    required: false,
    unique: false
  },
  start: {
    type: Integer,
    required: false,
    unique: false
  },
  end: {
    type: Integer,
    required: false,
    unique: false
  },
  classroom: {
    type: String,
    required: false,
    unique: false
  },
  per: {
    type: Integer,
    required: false,
    unique: false
  },
  labdays: {
    type: String,
    required: false,
    unique: false
  },
  start2: {
    type: Integer,
    required: false,
    unique: false
  },
  end2: {
    type: Integer,
    required: false,
    unique: false
  },
  labroom: {
    type: String,
    required: false,
    unique: false
  },
  credits: {
    type: Integer,
    required: false,
    unique: false
  },
  code: {
    type: String,
    required: false,
    unique: false
  },
  lastname: {
    type: String,
    required: false,
    unique: false
  },
  firstname: {
    type: String,
    required: false,
    unique: false
  },
  ptft: {
    type: String,
    required: false,
    unique: false
  },
  max: {
    type: Integer,
    required: false,
    unique: false
  },
  notes: {
    type: String,
    required: false,
    unique: false
  },
  tomnotes: {
    type: String,
    required: false,
    unique: false
  },


})

module.exports = mongoose.model('Schedule', ScheduleSchema);
