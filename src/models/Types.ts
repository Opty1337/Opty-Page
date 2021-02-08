export interface MenuOption {
  readonly Name: string;
  readonly Icon: string[];
  readonly To: string;
  readonly Target?: string;
}

export interface SocialNetwork {
  readonly Href: string;
  readonly Icon: string[];
  readonly Label: string;
}

export interface SKeyInfo {
  readonly Name: string;
  readonly HasProjects: boolean;
  readonly Icon: string[];
  readonly Mask?: string[];
}

export interface Subject {
  readonly Name: string;
  readonly Href: string;
  readonly Score: number;
  readonly Interest: number;
  readonly ECTS: number;
  readonly Period: string;
  readonly Year: string;
  readonly Github?: string;
}

export type SKeysInfo = {
  [Key in string]: SKeyInfo;
};

export type Subjects = {
  [Key in string]: Subject[];
};
