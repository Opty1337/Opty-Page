export default class DeviceService {
  private static _singleton: DeviceService;
  private _inMobile = window.innerWidth < 1500;

  static get singleton(): DeviceService {
    if (!this._singleton) this._singleton = new DeviceService();
    return this._singleton;
  }

  private constructor() {
    window.onresize = () => {
      this._inMobile = window.innerWidth < 1500;
    };
  }

  get inMobile(): boolean {
    return this._inMobile;
  }
}
