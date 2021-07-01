"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringNotFound = void 0;

class StringNotFound extends Error {
  constructor(str, dictName) {
    super(`String: "${str}" not found in dictionary: "${dictName}"`);
  }

}

exports.StringNotFound = StringNotFound;