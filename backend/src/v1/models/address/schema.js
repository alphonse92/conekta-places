import mongoose from 'mongoose';

const { Schema } = mongoose;

const Config = global.Config;
const mongoose = require(Config.paths.db + "/mongo");
const Schema = mongoose.Schema;
const validators = require(Config.paths.utils).validators;

module.exports = {
  name: "Activity",
  schema: {
    cursor: {
      type: "String"
    },
  },
};
