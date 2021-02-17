import AppStorage from "@/services/App/AppStorage";

export default class AppService {
  private static _singleton: AppService;

  static get singleton(): AppService {
    if (!this._singleton) this._singleton = new AppService();
    return this._singleton;
  }

  private readonly _aStorage: AppStorage = AppStorage.singleton;
  private _inMobile = window.innerWidth < 1500;

  private constructor() {
    window.onresize = () => {
      this._inMobile = window.innerWidth < 1500;
    };
  }

  get inMobile(): boolean {
    return this._inMobile;
  }

  set dark(dark: boolean) {
    this._aStorage.dark = dark;
  }

  get dark(): boolean {
    return this._aStorage.dark;
  }
}
