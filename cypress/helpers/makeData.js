export class MakeData {
  static getEmail() {
    return `${Math.random().toString(36).slice(2, 8)}qa@gmail.com`;
  }

  static getValidPassword() {
    return `${Math.random().toString(36).slice(2, 12)}P!`;
  }
}