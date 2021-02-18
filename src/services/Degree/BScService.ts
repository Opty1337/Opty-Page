import DegreeService from "@/services/Degree/DegreeService";
import BSc from "@/assets/Data/Degree/BSc.json";

const BSC_BRANCH_STORAGE_KEY = "BScBranchKey";

export default class BScService extends DegreeService {
  private static _singleton: BScService;

  static get singleton(): BScService {
    if (!this._singleton) this._singleton = new BScService();
    return this._singleton;
  }

  private constructor() {
    super(BSc, BSC_BRANCH_STORAGE_KEY);
  }
}
