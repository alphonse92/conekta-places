"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LangNotAvailable = void 0;

class LangNotAvailable extends Error {
  constructor(selected, AvalableLangs) {
    super(`Language ${selected} not exists. Available langs [${AvalableLangs.join(',')}]`);
  }

}

exports.LangNotAvailable = LangNotAvailable;