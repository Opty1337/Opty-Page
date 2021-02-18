import DegreeService from "@/services/Degree/DegreeService";
import MSc from "@/assets/Data/Degree/MSc.json";

const MSC_BRANCH_STORAGE_KEY = "MScBranchKey";

export default class MScService extends DegreeService {
  private static _singleton: MScService;

  static get singleton(): MScService {
    if (!this._singleton) this._singleton = new MScService();
    return this._singleton;
  }

  private constructor() {
    super(MSc, MSC_BRANCH_STORAGE_KEY);
  }
}
