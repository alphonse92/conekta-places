"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseAddress = void 0;

class BaseAddress {
  constructor(segments) {
    this.segments = segments;
  }

  static getSegmentNames() {
    return Object.keys(BaseAddress.getSegmentsFromComponents());
  }

  static createInstanceFromComponents(components) {
    return new BaseAddress(BaseAddress.getSegmentsFromComponents(components));
  }

  static getSegmentsFromComponents() {
    throw Error('Class not implemented');
  }

  static getCountryName() {
    throw Error('Class not implemented');
  }

  static get id() {
    throw Error('Class not implemented');
  }

  getPostalCode() {
    throw Error('Class not implemented');
  }

  static getValidator() {
    throw Error('Class not implemented');
  }

  validate() {
    throw Error('Class not implemented');
  }

  toString() {
    throw Error('Class not implemented');
  }

}

exports.BaseAddress = BaseAddress;