import {
  Course,
  Courses,
  CoursesBranch,
  CoursesBranches,
} from "@/models/Types";

export default class Degree {
  private selectedCoursesAVG: number | undefined;

  constructor(
    private courses: Courses,
    private branches: CoursesBranches,
    private selectedKey: string
  ) {
    this.calculateAVG();
  }

  private calculateAVG() {
    let value = 0;
    let ECTS = 0;
    this.SelectedCourses.forEach((course: Course) => {
      value += course.Grade * course.ECTS;
      ECTS += course.ECTS;
    });
    this.selectedCoursesAVG = value / ECTS;
  }

  getBranch(key: string): CoursesBranch {
    return this.branches[key];
  }

  get SelectedCourses(): Course[] {
    return this.courses[this.selectedKey];
  }

  get SelectedBranch(): CoursesBranch {
    return this.branches[this.selectedKey];
  }

  get UnselectedKeys(): string[] {
    return Object.keys(this.branches).filter(
      (key: string) => key != this.selectedKey
    );
  }

  set SelectedKey(key: string) {
    this.selectedKey = key;
    this.calculateAVG();
  }

  get SelectedCoursesAVG() {
    return this.selectedCoursesAVG;
  }
}
