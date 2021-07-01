export class StringNotFound extends Error {
  constructor(str, dictName) {
    super(`String: "${str}" not found in dictionary: "${dictName}"`);
  }
}
