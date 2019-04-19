const mongoose = require('mongoose');
const ScheduleSchema = new mongoose.Schema({
  crn: {
    type: Number,
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
      unique:false
  },
  courseSection: {
    type: String,
    required: false,
    unique: false
  },
  courseSectionNum: {
    type: Number,
    required: false,
    unique: false
  },
  sectNum: {
    type: Number,
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
    type: Number,
    required: false,
    unique: false
  },
  end: {
    type: Number,
    required: false,
    unique: false
  },
  classroom: {
    type: String,
    required: false,
    unique: false
  },
  per: {
    type: Number,
    required: false,
    unique: false
  },
  labdays: {
    type: String,
    required: false,
    unique: false
  },
  start2: {
    type: Number,
    required: false,
    unique: false
  },
  end2: {
    type: Number,
    required: false,
    unique: false
  },
  labroom: {
    type: String,
    required: false,
    unique: false
  },
  credits: {
    type: Number,
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
    type: Number,
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
