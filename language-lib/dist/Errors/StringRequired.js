"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringRequired = void 0;

class StringRequired extends Error {
  constructor() {
    super('No String suplied');
  }

}

exports.StringRequired = StringRequired;