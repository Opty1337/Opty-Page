const THEME_STORAGE_KEY = "DarkTheme";

export default class ThemeService {
  private static _singleton: ThemeService;
  private _dark: boolean;

  static get singleton(): ThemeService {
    if (!this._singleton) this._singleton = new ThemeService();
    return this._singleton;
  }

  private constructor() {
    this._dark = ThemeService.localDark;
  }

  set dark(dark: boolean) {
    ThemeService.localDark = dark;
    this._dark = dark;
  }

  get dark(): boolean {
    return this._dark;
  }

  // Local Storage

  private static set localDark(dark: boolean) {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(dark));
  }

  private static get localDark(): boolean {
    const dark = localStorage.getItem(THEME_STORAGE_KEY);
    return dark
      ? JSON.parse(dark)
      : window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
}
