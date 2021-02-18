import Branch from "@/models/Degree/Branch";

export default abstract class DegreeService {
  private readonly _branches: Branch[];
  private readonly _bStorageKey: string;
  private _bKey!: number;

  protected constructor(branches: Branch[], bStorageKey: string) {
    this._branches = branches;
    this._bStorageKey = bStorageKey;
    this._bKey = this.localBranchKey;
  }

  get branch(): Branch {
    return this._branches[this._bKey];
  }

  getBranchByKey(bKey: number): Branch {
    return this._branches[bKey];
  }

  set currentBranchKey(bKey: number) {
    this.localBranchKey = bKey;
    this._bKey = bKey;
  }

  get nonCurrentBranchKeys(): number[] {
    const bKeys = [];
    for (let bKey = 0; bKey < this._branches.length; bKey++) {
      if (bKey != this._bKey) bKeys.push(bKey);
    }
    return bKeys;
  }

  // Local Storage

  private set localBranchKey(bKey: number) {
    localStorage.setItem(this._bStorageKey, JSON.stringify(bKey));
  }

  private get localBranchKey(): number {
    const branchKey = localStorage.getItem(this._bStorageKey);
    return branchKey ? JSON.parse(branchKey) : 0;
  }
}
