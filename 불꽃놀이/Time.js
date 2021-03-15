export default class Time {
  static delta = 0;
  static startTime = 0;

  static start() {
    Time.startTime = Date.now();
  }

  static update() {
    const currentTime = Date.now();
    Time.delta = (currentTime - Time.startTime) * 0.001;
    Time.startTime = currentTime;
  }
}
