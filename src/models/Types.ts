import { DataTableHeader } from "vuetify";

export interface MenuOption {
  readonly Name: string;
  readonly Icon: string[];
  readonly To: string;
  readonly Target?: string;
}

export interface SocialNetwork {
  readonly Href: string;
  readonly Icon: string[];
}

export interface Group {
  readonly Name: string;
  readonly Icon: string[];
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

export type Gid = "CES" | "ES" | "CCS";

export type Header = {
  [Key in Gid]: DataTableHeader[];
};

export type Groups = {
  [Key in Gid]: Group;
};

export type Subjects = {
  [Key in Gid]: Subject[];
};
