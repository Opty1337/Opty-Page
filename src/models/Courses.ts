export type CoursesKey = "BSc" | "MSc";
export type BScBranchKey = "CES" | "ES" | "CCS";
export type MScBranchKey = "SP" | "CB";
export type BranchKey = BScBranchKey | MScBranchKey;

export interface Branch {
  readonly Name: string;
  readonly HasProjects: boolean;
  readonly Icon: string[];
  readonly Mask?: string[];
}

export type BScBranchesType = {
  [Key in BScBranchKey]: Branch;
};
export type MScBranchesType = {
  [Key in MScBranchKey]: Branch;
};

export interface Course {
  readonly Name: string;
  readonly Href: string;
  readonly Grade: number;
  readonly Interest: number;
  readonly ECTS: number;
  readonly Period: string;
  readonly Year: string;
  readonly Github?: string;
}

export type BScCoursesType = {
  [Key in BScBranchKey]: Course[];
};
export type MScCoursesType = {
  [Key in MScBranchKey]: Course[];
};
