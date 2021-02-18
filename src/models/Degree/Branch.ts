import Course from "@/models/Degree/Course";

export default interface Branch {
  readonly Name: string;
  readonly Icon: string[];
  readonly Mask?: string[];
  readonly WeightedAVG: number;
  readonly HasGithub: boolean;
  readonly Courses: Course[];
}
