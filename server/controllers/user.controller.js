const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  userId: Joi.number().integer().required(),
  pinNumber: Joi.number().integer().required(),
  repeatPinNumber: Joi.number().integer().required(),
});


module.exports = {
  insert
};

async function insert(user) {
  user = await Joi.validate(user, userSchema, { abortEarly: false });
  user.hashedPin = bcrypt.hashSync(user.pinNumber.toString(), 10);
  delete user.pinNumber;
  return await new User(user).save();
}
