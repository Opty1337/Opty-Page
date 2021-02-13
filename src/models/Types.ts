export interface MenuOption {
  readonly Name: string;
  readonly Icon: string[];
  readonly To?: string;
  readonly Href?: string;
  readonly Target?: string;
}

export interface SocialNetwork {
  readonly Href: string;
  readonly Icon: string[];
  readonly Label: string;
}

export interface CoursesBranch {
  readonly Name: string;
  readonly HasProjects: boolean;
  readonly Icon: string[];
  readonly Mask?: string[];
}

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

export type CoursesBranches = {
  [Key in string]: CoursesBranch;
};

export type Courses = {
  [Key in string]: Course[];
};

export type Style = {
  [Key in string]: string;
};

export interface Mode {
  readonly inMobile: boolean;
  readonly isDark: boolean;
  readonly IconClassList: string[];
  readonly WrapperStyle: Style;
}
