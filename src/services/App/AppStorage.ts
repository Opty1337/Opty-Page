const ThemeStorageKey = "DarkTheme";

export default class AppStorage {
  private static _singleton: AppStorage;

  static get singleton(): AppStorage {
    if (!this._singleton) this._singleton = new AppStorage();
    return this._singleton;
  }

  private _dark: boolean;

  private constructor() {
    const darkTheme = localStorage.getItem(ThemeStorageKey);
    this._dark = darkTheme ? JSON.parse(darkTheme) : window.innerWidth < 1500;
  }

  set dark(dark: boolean) {
    localStorage.setItem(ThemeStorageKey, JSON.stringify(dark));
    this._dark = dark;
  }

  get dark(): boolean {
    return this._dark;
  }
}
