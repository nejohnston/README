export default class ConfigStore {
  constructor() {
    this.splashTime = 1000; // time splash screen will render
    this.splashImg = require("../../images/splash.jpg");
  }
  get SplashImg() {
    return this.splashImg;
  }
  get SplashTime() {
    return this.splashTime;
  }
}
