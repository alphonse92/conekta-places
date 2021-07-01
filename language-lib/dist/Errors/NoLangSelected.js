"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoLangSelected = void 0;

class NoLangSelected extends Error {
  constructor() {
    super('No language selected');
  }

}

exports.NoLangSelected = NoLangSelected;