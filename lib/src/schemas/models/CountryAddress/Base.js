export class BaseAddress {
  constructor(segments) {
    this.segments = segments;
  }

  static getSegments() {
    throw Error('Class not implemented');
  }

  static getCountryId() {
    throw Error('Class not implemented');
  }

  static getCountryName() {
    throw Error('Class not implemented');
  }

  static createFromComponents() {
    throw Error('Class not implemented');
  }

  getPostalCode() {
    throw Error('Class not implemented');
  }

  getValidator() {
    throw Error('Class not implemented');
  }

  validate() {
    throw Error('Class not implemented');
  }

  toString() {
    throw Error('Class not implemented');
  }

}
