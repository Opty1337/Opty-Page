export class Subject {
  gid!: number;
  href!: string;
  name!: string;
  github!: string;
  score!: number;
  interest!: number;
  ECTS!: number;
  period!: string;
  year!: string;

  constructor(
    gid: number,
    name: string,
    href: string,
    score: number,
    interest: number,
    ECTS: number,
    period: string,
    year: string,
    github?: string
  ) {
    this.gid = gid;
    this.name = name;
    this.href = href;
    this.score = score;
    this.interest = interest;
    this.ECTS = ECTS;
    this.period = period;
    this.year = year;
    if (github) this.github = github;
  }
}
