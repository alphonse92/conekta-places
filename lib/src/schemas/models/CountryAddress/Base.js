export class BaseAddress {
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

  static createFromComponents() {
    throw Error('Class not implemented');
  }

  static get id() {
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
