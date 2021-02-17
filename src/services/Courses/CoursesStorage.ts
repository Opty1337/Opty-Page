import { CoursesKey, BranchKey } from "@/models/Courses";

const enum BranchesStorageKey {
  BSc = "BScBranchKey",
  MSc = "MScBranchKey",
}

const enum DefaultBranchKey {
  BSc = "CES",
  MSc = "SP",
}

export default class CoursesStorage {
  private static _singleton: CoursesStorage;

  static get singleton(): CoursesStorage {
    if (!this._singleton) this._singleton = new CoursesStorage();
    return this._singleton;
  }

  private readonly _bKeys = {
    BSc: <BranchKey>(
      (localStorage.getItem(BranchesStorageKey.BSc) || DefaultBranchKey.BSc)
    ),
    MSc: <BranchKey>(
      (localStorage.getItem(BranchesStorageKey.MSc) || DefaultBranchKey.MSc)
    ),
  };

  currentBranchKeyStore(cKey: CoursesKey, bKey: BranchKey): void {
    localStorage.setItem(cKey + "BranchKey", bKey);
    this._bKeys[cKey] = bKey;
  }

  currentBranchKey(cKey: CoursesKey): BranchKey {
    return this._bKeys[cKey];
  }
}
