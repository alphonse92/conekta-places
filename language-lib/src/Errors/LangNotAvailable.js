export class LangNotAvailable extends Error {
  constructor(selected, AvalableLangs) {
    super(`Language ${selected} not exists. Available langs [${AvalableLangs.join(',')}]`);
  }
}