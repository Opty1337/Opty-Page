import {
  CoursesKey,
  BScBranchKey,
  MScBranchKey,
  BranchKey,
  Branch,
  Course,
  BScBranchesType,
  MScBranchesType,
  BScCoursesType,
  MScCoursesType,
} from "@/models/Courses";
import CoursesStorage from "@/services/Courses/CoursesStorage";
import BScBranches from "@/assets/Data/BSc/Branches.json";
import MScBranches from "@/assets/Data/MSc/Branches.json";
import BScCourses from "@/assets/Data/BSc/Courses.json";
import MScCourses from "@/assets/Data/MSc/Courses.json";

export default class CoursesService {
  private static _singleton: CoursesService;

  static get singleton(): CoursesService {
    if (!this._singleton) this._singleton = new CoursesService();
    return this._singleton;
  }

  private readonly _cStorage = CoursesStorage.singleton;
  private readonly _courses = {
    BSc: <BScCoursesType>BScCourses,
    MSc: <MScCoursesType>MScCourses,
  };
  private readonly _cBranches = {
    BSc: <BScBranchesType>BScBranches,
    MSc: <MScBranchesType>MScBranches,
  };
  private _cKey!: CoursesKey;
  private _cAvg = -1;

  toBSc(): void {
    this._cKey = "BSc";
    this.cAvgUpdate();
  }

  toMSc(): void {
    this._cKey = "MSc";
    this.cAvgUpdate();
  }

  get currentCourses(): Course[] {
    const bKey = this.currentBranchKey;
    switch (this._cKey) {
      case "BSc":
        return this._courses.BSc[<BScBranchKey>bKey];
      case "MSc":
        return this._courses.MSc[<MScBranchKey>bKey];
    }
  }

  cBranch(bKey: BranchKey): Branch {
    switch (this._cKey) {
      case "BSc":
        return this._cBranches.BSc[<BScBranchKey>bKey];
      case "MSc":
        return this._cBranches.MSc[<MScBranchKey>bKey];
    }
  }

  set currentBranchKey(bKey: BranchKey) {
    this._cStorage.currentBranchKeyStore(this._cKey, bKey);
    this.cAvgUpdate();
  }

  get currentBranchKey(): BranchKey {
    return this._cStorage.currentBranchKey(this._cKey);
  }

  get currentBranch(): Branch {
    return this.cBranch(this.currentBranchKey);
  }

  get nonCurrentBranchKeys(): BranchKey[] {
    return (<BranchKey[]>Object.keys(this._cBranches[this._cKey])).filter(
      (bKey: BranchKey) => bKey != this.currentBranchKey
    );
  }

  get currentCoursesAvg(): number {
    return this._cAvg;
  }

  private cAvgUpdate(): void {
    let avg = 0;
    let ECTS = 0;
    for (const course of this.currentCourses) {
      avg += course.Grade * course.ECTS;
      ECTS += course.ECTS;
    }
    this._cAvg = avg / ECTS;
  }
}
