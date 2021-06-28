export class ManagerNotStarted extends Error {
  constructor() {
    super('Manager is not properly initialized.');
  }
}
